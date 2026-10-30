/* =====================================================================
   <ui-trend-draw> — phần tử Web Component không framework: biểu tượng biểu đồ trong một nút (hoặc liên kết) thật do trang viết; đường xu hướng
   được vẽ từ trái sang khi state="drawn" và một chấm bật ra ở cuối đường (chủ dự án mô tả 2026-10-29).
   Đây là MỘT nút: phần tử chỉ vẽ biểu tượng, không biết gì về ý nghĩa của xu hướng. Trang giữ trạng thái, tên nút, mọi thuộc tính ARIA và việc
   báo kết quả cho người dùng; phần tử không ghi ARIA, không nói gì với người đọc màn hình, chỉ thêm một biểu tượng ẩn.
   Nó chỉ ghi state và data-enhanced trên chính nó. Không timer, không requestAnimationFrame, không animate(): mọi thay đổi là transition CSS
   (trend-draw.css). Script thường (không module) để mở được bằng file:///.
   MỞ RỘNG RIÊNG CỦA ui-pages (bản mô tả không có): phần tử có thuộc tính `decorative` là biểu tượng trang trí đặt trong một thẻ, không có nút
   hay liên kết riêng — biểu tượng được thêm thẳng vào phần tử và trang tự đặt aria-hidden ở khung chứa. Có nút/liên kết con thì vẫn theo bản mô tả.
   ===================================================================== */
(function () {
  'use strict';

  if (typeof customElements === 'undefined' || customElements.get('ui-trend-draw')) {
    return;
  }

  /* Luật không có DOM: hai trạng thái theo thứ tự, và cách một chữ trở thành trạng thái. */
  var STATES = ['flat', 'drawn'];
  var DEFAULT_STATE = 'flat';

  function stateOf(text) {
    var key = String(text == null ? '' : text).trim().toLowerCase();

    return STATES.indexOf(key) !== -1 ? key : DEFAULT_STATE;
  }

  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var CHANGE_EVENT = 'ui-trend-draw-change';

  /* Hình vẽ trong hộp 24: trục biểu đồ (chữ L từ (3,5; 3,5) xuống (3,5; 20,5) rồi sang (20,5; 20,5), luôn được vẽ), đường xu hướng một nét gồm ba
     đoạn thẳng từ (7,5; 15,5) tới (20; 7) — vẽ hai lần trên cùng dữ liệu (một lần mờ là đường sẽ được vẽ, một lần đủ mực là đường đã vẽ) — và chấm
     có tâm đúng ở đầu mút (20; 7), bán kính 2: mép phải x 22, mép trên y 5. */
  var AXES = 'M3.5 3.5v17h17';
  var TREND = 'M7.5 15.5l4-5 3 3 5.5-6.5';
  var DOT = { cx: '20', cy: '7', r: '2' };

  function make(tag, attributes) {
    var element = document.createElementNS(SVG_NAMESPACE, tag);

    Object.keys(attributes).forEach(function (name) {
      element.setAttribute(name, attributes[name]);
    });

    return element;
  }

  function icon() {
    var svg = make('svg', { class: 'td__icon', viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' });

    svg.appendChild(make('path', { class: 'td__axes', d: AXES }));
    svg.appendChild(make('path', { class: 'td__ghost', d: TREND }));
    svg.appendChild(make('path', { class: 'td__line', d: TREND, pathLength: '1' }));
    svg.appendChild(make('circle', { class: 'td__dot', cx: DOT.cx, cy: DOT.cy, r: DOT.r }));

    return svg;
  }

  class UiTrendDraw extends HTMLElement {
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

      if (this._build()) {
        this._enhance();
        return;
      }

      /* Script nạp trước khi trình duyệt đọc tới nút con: đợi đọc xong rồi thử một lần nữa. */
      if (document.readyState === 'loading') {
        document.addEventListener(
          'DOMContentLoaded',
          function () {
            if (self._connected && self._build()) {
              self._enhance();
            }
          },
          { once: true }
        );
      }
    }

    disconnectedCallback() {
      this._connected = false;
    }

    attributeChangedCallback(name, previous, value) {
      if (!this._built || name !== 'state') {
        return;
      }

      var next = stateOf(value);

      /* Trạng thái không ghi bằng một trong hai từ thì được ghi lại bằng từ nó được hiểu, để stylesheet chỉ cần khớp hai từ. Ghi lại sẽ quay về đây
         và lúc đó mới là một thay đổi. */
      if (value !== next) {
        this.setAttribute('state', next);
        return;
      }

      this._set(next);
    }

    /* flat hoặc drawn. Trang đặt; gì khác là flat. */
    get state() {
      return stateOf(this.getAttribute('state'));
    }

    set state(value) {
      this.setAttribute('state', stateOf(value));
    }

    /* Nơi đặt biểu tượng: nút hoặc liên kết con đầu tiên của phần tử; không có mà phần tử là `decorative` thì chính phần tử. */
    _control() {
      var control = Array.prototype.slice.call(this.children).filter(function (child) {
        return child.matches('button, a');
      })[0];

      return control || (this.hasAttribute('decorative') ? this : null);
    }

    /* Thêm biểu tượng vào trước mọi thứ trang đã viết ở đó. */
    _build() {
      if (this._built) {
        return true;
      }

      var control = this._control();

      if (!control) {
        return false;
      }

      control.insertBefore(icon(), control.firstChild);
      this._built = true;

      return true;
    }

    /* Trạng thái có sẵn lúc nối vào trang hiện ngay, không transition (phần tử chưa "enhanced" nên chưa khai báo transition). Trạng thái được ghi
       nhớ TRƯỚC khi ghi thuộc tính, để việc ghi đó không bị coi là một thay đổi và không phát sự kiện. */
    _enhance() {
      var state = stateOf(this.getAttribute('state'));

      this._state = state;

      if (this.getAttribute('state') !== state) {
        this.setAttribute('state', state);
      }

      this.setAttribute('data-enhanced', '');
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

  customElements.define('ui-trend-draw', UiTrendDraw);
})();