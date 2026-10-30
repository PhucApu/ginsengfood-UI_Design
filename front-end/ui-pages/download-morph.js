/* =====================================================================
   <ui-download-morph> — phần tử Web Component không framework: nút tải xuống thật do trang viết, biểu tượng mũi tên-trên-khay biến thành
   vòng tròn đầy dần theo tiến độ (hoặc cung quay khi chưa biết dung lượng) rồi khép lại quanh dấu tích hoặc dấu chéo (chủ dự án mô tả 2026-10-29).
   Đây là MỘT nút: phần tử chỉ vẽ biểu tượng, không biết gì về công việc phía sau. Trang giữ trạng thái, giá trị, tên nút, mọi thuộc tính ARIA và
   việc báo tiến độ/kết quả cho người dùng; phần tử không ghi ARIA, không nói gì với trình đọc màn hình, chỉ thêm một biểu tượng ẩn.
   Nó chỉ ghi: state, data-enhanced, data-indeterminate trên chính nó và --dm-off trên cung của biểu tượng. Không timer, không requestAnimationFrame,
   không đồng hồ: mọi thay đổi là transition CSS (download-morph.css). Script thường (không module) để mở được bằng file:///.
   ===================================================================== */
(function () {
  'use strict';

  if (typeof customElements === 'undefined' || customElements.get('ui-download-morph')) {
    return;
  }

  /* Luật không có DOM: bốn trạng thái, đổi chữ thành trạng thái, đổi giá trị thành nơi vòng bắt đầu. */
  var STATES = ['idle', 'loading', 'done', 'error'];
  var DEFAULT_STATE = 'idle';
  var VALUE_LIMITS = { least: 0, most: 100 };
  /* Nét đứt dài 1 dời 1,02 / 1,03 / 1,04 nằm hẳn ngoài đường đi: không vẽ gì, không để lại chấm ở đầu nét tròn. */
  var EMPTY_OFFSET = 1.03;

  function stateOf(text) {
    var key = String(text == null ? '' : text).trim().toLowerCase();

    return STATES.indexOf(key) !== -1 ? key : DEFAULT_STATE;
  }

  /* Giá trị: chữ đã cắt khoảng trắng thành số hữu hạn kẹp trong 0–100, không làm tròn; null khi không có, trống, không phải số ("50%") hay không hữu hạn. */
  function valueOf(text) {
    if (text === null || text === undefined) {
      return null;
    }

    var trimmed = String(text).trim();

    if (trimmed === '') {
      return null;
    }

    var number = Number(trimmed);

    if (!isFinite(number)) {
      return null;
    }

    return Math.min(VALUE_LIMITS.most, Math.max(VALUE_LIMITS.least, number));
  }

  function progressOf(text) {
    var value = valueOf(text);

    return value === null ? 0 : value / VALUE_LIMITS.most;
  }

  function offsetFor(progress) {
    if (!(progress > 0)) {
      return EMPTY_OFFSET;
    }

    return Math.round((1 - progress) * 10000) / 10000;
  }

  var SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
  var CHANGE_EVENT = 'ui-download-morph-change';

  /* Hình vẽ trong hộp 24: khay, mũi tên trên khay, và vòng quanh giữa hộp phía trên khay, dấu tích hoặc dấu chéo nằm trong vòng. */
  var TRAY = { d: 'M5 20h14' };
  var SHAFT = { d: 'M12 4v11' };
  var HEAD = { d: 'M7.5 10.5L12 15l4.5-4.5' };
  var RING = { cx: '12', cy: '11', r: '6.5' };
  var TURN = { transform: 'rotate(-90 12 11)' };
  var TICK = { d: 'M9 11.2l2.2 2.2L15.2 9', pathLength: '1' };
  var CROSS = { d: 'M9 8l6 6M15 8l-6 6', pathLength: '1' };

  function make(tag, attributes) {
    var element = document.createElementNS(SVG_NAMESPACE, tag);

    Object.keys(attributes).forEach(function (name) {
      element.setAttribute(name, attributes[name]);
    });

    return element;
  }

  function merge() {
    var out = {};

    Array.prototype.slice.call(arguments).forEach(function (part) {
      Object.keys(part).forEach(function (name) {
        out[name] = part[name];
      });
    });

    return out;
  }

  /* Biểu tượng, và cung của nó: phần duy nhất mà phần tử ghi vị trí. Stylesheet vẽ phần còn lại. */
  function icon() {
    var svg = make('svg', { class: 'dm__icon', viewBox: '0 0 24 24', 'aria-hidden': 'true', focusable: 'false' });
    var arrow = make('g', { class: 'dm__arrow' });
    var arc = make('circle', merge({ class: 'dm__arc' }, RING, { pathLength: '1' }, TURN));

    arrow.appendChild(make('path', SHAFT));
    arrow.appendChild(make('path', HEAD));
    svg.appendChild(make('path', merge({ class: 'dm__tray' }, TRAY)));
    svg.appendChild(arrow);
    svg.appendChild(make('circle', merge({ class: 'dm__track' }, RING)));
    svg.appendChild(make('circle', merge({ class: 'dm__spinner' }, RING, { pathLength: '1' }, TURN)));
    svg.appendChild(arc);
    svg.appendChild(make('path', merge({ class: 'dm__tick' }, TICK)));
    svg.appendChild(make('path', merge({ class: 'dm__cross' }, CROSS)));

    return { svg: svg, arc: arc };
  }

  class UiDownloadMorph extends HTMLElement {
    static get observedAttributes() {
      return ['state', 'value'];
    }

    constructor() {
      super();
      this._connected = false;
      this._built = false;
      this._state = DEFAULT_STATE;
      this._arc = null;
    }

    connectedCallback() {
      if (this._connected) {
        return;
      }

      this._connected = true;

      if (!this._build()) {
        return;
      }

      /* Trạng thái và giá trị có sẵn lúc nối vào trang hiện ngay, không transition (phần tử chưa "enhanced" nên chưa khai báo transition).
         Trạng thái được ghi nhớ TRƯỚC khi ghi thuộc tính, để việc ghi đó không bị coi là một thay đổi. */
      var state = stateOf(this.getAttribute('state'));

      this._state = state;
      this._sync();

      if (this.getAttribute('state') !== state) {
        this.setAttribute('state', state);
      }

      this.setAttribute('data-enhanced', '');
    }

    disconnectedCallback() {
      this._connected = false;
    }

    attributeChangedCallback(name, previous, value) {
      if (!this._built) {
        return;
      }

      if (name === 'value') {
        this._sync();
        return;
      }

      if (name !== 'state') {
        return;
      }

      var next = stateOf(value);

      /* Trạng thái không ghi bằng một trong bốn từ thì được ghi lại bằng từ nó được hiểu, để trang tin được điều nó đọc ra. */
      if (value !== next) {
        this.setAttribute('state', next);
        return;
      }

      this._set(next);
    }

    /* idle, loading, done hoặc error. Trang đặt; gì khác là idle. */
    get state() {
      return stateOf(this.getAttribute('state'));
    }

    set state(value) {
      this.setAttribute('state', stateOf(value));
    }

    /* Đã tải được bao xa, 0–100, hoặc null khi trang không đưa số (chưa biết dung lượng). */
    get value() {
      return valueOf(this.getAttribute('value'));
    }

    set value(next) {
      if (next === null || next === undefined || next === '') {
        this.removeAttribute('value');
        return;
      }

      this.setAttribute('value', String(next));
    }

    /* Thêm biểu tượng vào nút hoặc liên kết đầu tiên trong phần tử, đứng trước mọi thứ trang đã viết ở đó. */
    _build() {
      if (this._built) {
        return true;
      }

      var control = Array.prototype.slice.call(this.children).filter(function (child) {
        return child.matches('button, a');
      })[0];

      if (!control) {
        return false;
      }

      var made = icon();

      control.insertBefore(made.svg, control.firstChild);
      this._arc = made.arc;
      this._built = true;

      return true;
    }

    /* Báo cho stylesheet biết đã biết dung lượng chưa và vòng bắt đầu ở đâu; vòng tự di chuyển tới đó bằng transition của stylesheet. */
    _sync() {
      var attribute = this.getAttribute('value');

      this.toggleAttribute('data-indeterminate', valueOf(attribute) === null);
      this._arc.style.setProperty('--dm-off', String(offsetFor(progressOf(attribute))));
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

  customElements.define('ui-download-morph', UiDownloadMorph);
})();