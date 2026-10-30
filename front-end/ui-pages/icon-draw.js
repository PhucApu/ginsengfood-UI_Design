/* =====================================================================
   <ui-icon-draw> — phần tử Web Component không framework: họ biểu tượng "vẽ nét" đi cùng <ui-trend-draw> (trend-draw.js), cùng một công thức
   chuyển động, chỉ khác hình (chủ dự án chọn hai phương án 1A và 2A ngày 2026-10-29). Thuộc tính kind chọn hình: link (hai mắt xích trượt vào và
   khớp nhau) hoặc camera (ống kính máy quay được vẽ ra, rồi chấm ghi hình bật lên). kind được đọc một lần lúc dựng; kind lạ thì phần tử để trống.
   Đây là MỘT biểu tượng: phần tử chỉ vẽ, không biết gì về ý nghĩa của nó. Trang giữ trạng thái, tên, mọi thuộc tính ARIA và việc báo kết quả cho
   người dùng; phần tử không ghi ARIA, không nói gì với người đọc màn hình, chỉ thêm một biểu tượng ẩn.
   Nó chỉ ghi state và data-enhanced trên chính nó. Không timer, không requestAnimationFrame, không animate(): mọi thay đổi là transition CSS
   (icon-draw.css). Script thường (không module) để mở được bằng file:///.
   Như <ui-trend-draw>: phần tử có thuộc tính `decorative` là biểu tượng trang trí đặt trong một thẻ, không có nút hay liên kết riêng — biểu tượng
   được thêm thẳng vào phần tử và trang tự đặt aria-hidden ở khung chứa. Có nút/liên kết con thì biểu tượng vào đó.
   ===================================================================== */
(function () {
  'use strict';

  if (typeof customElements === 'undefined' || customElements.get('ui-icon-draw')) {
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
  var CHANGE_EVENT = 'ui-icon-draw-change';

  /* Hình vẽ trong hộp 24, theo thứ tự vẽ; mỗi phần là [thẻ SVG, lớp, thuộc tính].
     link: hai mắt xích, đúng hai đường của biểu tượng liên kết tĩnh của trang (#i-link), mỗi mắt xích là MỘT path để tự trượt bằng `translate`.
     camera: thân máy (hình chữ nhật bo góc, luôn được vẽ), ống kính một nét — vẽ hai lần trên cùng dữ liệu (một lần mờ là nét sẽ được vẽ, một lần
     đủ mực là nét đã vẽ) — và chấm ghi hình có tâm đúng giữa thân (9,5; 12), bán kính 2. Thân và ống kính là đúng biểu tượng máy quay tĩnh (#i-video). */
  var LENS = 'M15.5 10.5l5-3v9l-5-3';
  var KINDS = {
    link: [
      ['path', 'id__hook id__hook--a', { d: 'M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1.2 1.2' }],
      ['path', 'id__hook id__hook--b', { d: 'M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1.2-1.2' }]
    ],
    camera: [
      ['rect', 'id__body', { x: '3.5', y: '6', width: '12', height: '12', rx: '2.5' }],
      ['path', 'id__ghost', { d: LENS }],
      ['path', 'id__line', { d: LENS, pathLength: '1' }],
      ['circle', 'id__dot', { cx: '9.5', cy: '12', r: '2' }]
    ]
  };

  function kindOf(text) {
    var key = String(text == null ? '' : text).trim().toLowerCase();

    return Object.prototype.hasOwnProperty.call(KINDS, key) ? key : '';
  }

  function make(tag, attributes) {
    var element = document.createElementNS(SVG_NAMESPACE, tag);

    Object.keys(attributes).forEach(function (name) {
      element.setAttribute(name, attributes[name]);
    });

    return element;
  }

  function icon(kind) {
    var svg = make('svg', { class: 'id__icon', viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' });

    KINDS[kind].forEach(function (part) {
      var attributes = { class: part[1] };

      Object.keys(part[2]).forEach(function (name) {
        attributes[name] = part[2][name];
      });

      svg.appendChild(make(part[0], attributes));
    });

    return svg;
  }

  class UiIconDraw extends HTMLElement {
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

    /* Thêm biểu tượng vào trước mọi thứ trang đã viết ở đó. Không có kind hợp lệ thì không thêm gì. */
    _build() {
      if (this._built) {
        return true;
      }

      var kind = kindOf(this.getAttribute('kind'));
      var control = kind ? this._control() : null;

      if (!control) {
        return false;
      }

      control.insertBefore(icon(kind), control.firstChild);
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

  customElements.define('ui-icon-draw', UiIconDraw);
})();