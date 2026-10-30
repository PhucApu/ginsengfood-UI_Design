/**
 * <ui-cart-morph>: biểu tượng "thêm vào giỏ" biến hình cho một nút thật do trang viết (script thường, không import/export để chạy được cả khi mở tệp bằng file:///).
 *
 * Trang sở hữu trạng thái, tên nút và mọi thuộc tính ARIA; phần tử chỉ vẽ. "empty" là chiếc giỏ có dấu cộng trong lòng giỏ, "added" xoay dấu cộng đi và vẽ dấu tích nảy nhẹ.
 * Phần tử chỉ ghi `state` và `data-enhanced` trên chính nó, và thêm một svg ẩn vào ĐẦU nút (hoặc liên kết) con trực tiếp đầu tiên; không ghi ARIA, id, class, style lên nút.
 * Mỗi lần đổi là các transition CSS (xem cart-morph.css), nên đổi giữa chừng thì quay từ chỗ các phần đã đến; không có bộ đếm giờ hay vòng requestAnimationFrame.
 * Sự kiện `ui-cart-morph-change` (nổi bọt, detail { state, previous }) được gửi khi trạng thái đổi: không phải lúc nạp, không phải khi đặt lại cùng trạng thái.
 */
(function () {
  'use strict';

  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var CHANGE_EVENT = 'ui-cart-morph-change';
  var STATES = ['empty', 'added'];
  var DEFAULT_STATE = 'empty';

  /* Hình vẽ trong hộp 24: giỏ (một nét từ tay cầm (3,5; 3,5) xuống lòng giỏ), hai bánh xe, dấu cộng ở tâm lòng giỏ (13,5; 10,5) và dấu tích cùng chỗ (pathLength = 1 để một nét dash là cả đường). */
  var CART = 'M3.5 3.5H6l2.2 11h10.3l2-8H7';
  var WHEELS = [
    { cx: '10.5', cy: '19.5', r: '1.3' },
    { cx: '17', cy: '19.5', r: '1.3' },
  ];
  var PLUS = ['M13.5 8.9v3.2', 'M11.9 10.5h3.2'];
  var TICK = 'M11.2 10.6l1.7 1.7 3.4-3.6';

  /* Trạng thái từ chữ: cắt khoảng trắng, không phân biệt hoa thường, mọi thứ khác là "empty". */
  function stateOf(text) {
    var key = String(text == null ? '' : text).trim().toLowerCase();

    return STATES.indexOf(key) !== -1 ? key : DEFAULT_STATE;
  }

  function make(tag, attributes) {
    var element = document.createElementNS(SVG_NAMESPACE, tag);

    Object.keys(attributes).forEach(function (name) {
      element.setAttribute(name, attributes[name]);
    });

    return element;
  }

  function icon() {
    var svg = make('svg', { class: 'ct__icon', viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' });
    var plus = make('g', { class: 'ct__plus' });
    var mark = make('g', { class: 'ct__mark' });

    PLUS.forEach(function (d) {
      plus.appendChild(make('path', { d: d }));
    });
    mark.appendChild(make('path', { class: 'ct__tick', d: TICK, pathLength: '1' }));
    svg.appendChild(make('path', { class: 'ct__cart', d: CART }));
    WHEELS.forEach(function (wheel) {
      svg.appendChild(make('circle', { class: 'ct__wheel', cx: wheel.cx, cy: wheel.cy, r: wheel.r }));
    });
    svg.appendChild(plus);
    svg.appendChild(mark);

    return svg;
  }

  class UiCartMorph extends HTMLElement {
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
      if (this._connected) {
        return;
      }

      this._connected = true;

      if (!this._build()) {
        return;
      }

      /* Trạng thái có sẵn lúc nạp được hiện ngay, không chuyển động: chưa có data-enhanced thì chưa khai báo transition nào.
         Đặt trước khi ghi thuộc tính để việc ghi không bị đọc là một lần đổi. */
      var state = stateOf(this.getAttribute('state'));

      this._state = state;

      if (this.getAttribute('state') !== state) {
        this.setAttribute('state', state);
      }

      this.setAttribute('data-enhanced', '');
    }

    disconnectedCallback() {
      this._connected = false;
    }

    attributeChangedCallback(name, previous, value) {
      if (!this._built || name !== 'state') {
        return;
      }

      var next = stateOf(value);

      /* Giá trị không phải một trong hai từ được ghi lại thành từ nó được đọc là, để CSS chỉ cần khớp hai từ. Ghi lại sẽ quay về đây và khi đó mới là một lần đổi. */
      if (value !== next) {
        this.setAttribute('state', next);
        return;
      }

      this._set(next);
    }

    /* "empty" hoặc "added"; trang đặt, mọi thứ khác là "empty". */
    get state() {
      return stateOf(this.getAttribute('state'));
    }

    set state(value) {
      this.setAttribute('state', stateOf(value));
    }

    /* Thêm biểu tượng vào nút hoặc liên kết con trực tiếp đầu tiên, đặt trước mọi thứ trang đã viết ở đó. Không có thì không dựng gì. */
    _build() {
      if (this._built) {
        return true;
      }

      var control = Array.prototype.find.call(this.children, function (child) {
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

  if (typeof customElements !== 'undefined' && !customElements.get('ui-cart-morph')) {
    customElements.define('ui-cart-morph', UiCartMorph);
  }
})();
