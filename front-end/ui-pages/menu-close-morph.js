/* =====================================================================
   <ui-menu-close-morph> — phần tử Web Component không framework: nút menu thật do trang viết, ba thanh ngang của biểu tượng ☰ dịch lại, xoay đi
   để thành dấu chéo đóng (chủ dự án mô tả 2026-10-29).
   Đây là MỘT nút: phần tử chỉ vẽ biểu tượng, không biết gì về thứ mà nút mở ra. Trang giữ trạng thái, tên nút và mọi thuộc tính ARIA
   (aria-label, aria-expanded, aria-controls); phần tử không ghi ARIA, không ghi id/class/style, không đổi tiêu điểm, chỉ thêm một biểu tượng ẩn.
   Nó chỉ ghi: state và data-enhanced trên chính nó. Không timer, không requestAnimationFrame, không pathLength, không nét đứt: mọi thay đổi là
   transition CSS (menu-close-morph.css) nên đổi giữa chừng thì quay tiếp từ chỗ các thanh đang ở. Phần tử không tự đổi khi bấm: trang đặt state.
   Script thường (không module) để mở được bằng file:///.
   ===================================================================== */
(function () {
  'use strict';

  if (typeof customElements === 'undefined' || customElements.get('ui-menu-close-morph')) {
    return;
  }

  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var CHANGE_EVENT = 'ui-menu-close-morph-change';

  /* Luật không có DOM: hai trạng thái gọi theo cái được vẽ, và cách một chữ thành một trạng thái. */
  var STATES = ['menu', 'close'];
  var DEFAULT_STATE = 'menu';

  function stateOf(text) {
    var key = String(text == null ? '' : text).trim().toLowerCase();

    return STATES.indexOf(key) !== -1 ? key : DEFAULT_STATE;
  }

  /* Ba thanh: mỗi thanh một lớp và chỗ đứng trong khung 24 × 24, chạy từ x = 4 đến x = 20. */
  var BARS = [
    ['mc__bar mc__bar--top', 7],
    ['mc__bar mc__bar--mid', 12],
    ['mc__bar mc__bar--bot', 17]
  ];

  function icon() {
    var svg = document.createElementNS(SVG_NAMESPACE, 'svg');

    svg.setAttribute('class', 'mc__icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');

    BARS.forEach(function (bar) {
      var line = document.createElementNS(SVG_NAMESPACE, 'line');

      line.setAttribute('class', bar[0]);
      line.setAttribute('x1', '4');
      line.setAttribute('y1', String(bar[1]));
      line.setAttribute('x2', '20');
      line.setAttribute('y2', String(bar[1]));
      svg.appendChild(line);
    });

    return svg;
  }

  class UiMenuCloseMorph extends HTMLElement {
    static get observedAttributes() {
      return ['state'];
    }

    constructor() {
      super();
      this._connected = false;
      this._built = false;
      this._state = DEFAULT_STATE;
    }

    connectedCallback() {
      var self = this;

      if (this._connected) {
        return;
      }

      this._connected = true;

      if (!this._build()) {
        /* Nút của trang chưa được trình duyệt đọc tới (script đứng trước nút): đợi tài liệu đọc xong rồi thử lại một lần. */
        if (document.readyState === 'loading') {
          document.addEventListener('DOMContentLoaded', function () {
            if (self._connected && self._build()) {
              self._show();
            }
          }, { once: true });
        }

        return;
      }

      this._show();
    }

    disconnectedCallback() {
      this._connected = false;
    }

    attributeChangedCallback(name, previous, value) {
      var next;

      if (!this._built || name !== 'state') {
        return;
      }

      next = stateOf(value);

      /* Trạng thái không viết đúng một trong hai chữ được ghi lại bằng chữ nó được đọc thành, để CSS chỉ cần khớp hai chữ. Ghi lại sẽ quay về đây
         và lúc đó mới là một thay đổi. */
      if (value !== next) {
        this.setAttribute('state', next);
        return;
      }

      this._set(next);
    }

    /* 'menu' hoặc 'close'. Trang đặt; mọi chữ khác là 'menu'. */
    get state() {
      return stateOf(this.getAttribute('state'));
    }

    set state(value) {
      this.setAttribute('state', stateOf(value));
    }

    /* Trạng thái có sẵn lúc nối vào được hiện ngay, không transition: phần tử chưa có data-enhanced nên CSS chưa khai báo transition nào.
       Gán _state trước khi ghi thuộc tính để việc ghi không bị đọc là một thay đổi. */
    _show() {
      var state = stateOf(this.getAttribute('state'));

      this._state = state;

      if (this.getAttribute('state') !== state) {
        this.setAttribute('state', state);
      }

      this.setAttribute('data-enhanced', '');
    }

    /* Thêm biểu tượng vào nút hoặc liên kết đầu tiên trong phần tử, đứng trước mọi thứ trang đã viết ở đó. */
    _build() {
      var control;

      if (this._built) {
        return true;
      }

      control = Array.prototype.find.call(this.children, function (child) {
        return child.matches('button, a');
      });

      if (!control) {
        return false;
      }

      control.insertBefore(icon(), control.firstChild);
      this._built = true;

      return true;
    }

    _set(next) {
      var previous = this._state;

      if (next === previous) {
        return;
      }

      this._state = next;
      this.dispatchEvent(new CustomEvent(CHANGE_EVENT, { bubbles: true, detail: { state: next, previous: previous } }));
    }
  }

  customElements.define('ui-menu-close-morph', UiMenuCloseMorph);
}());
