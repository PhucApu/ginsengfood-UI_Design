/* =====================================================================
   GIỎ HÀNG DẠNG DRAWER — dùng chung trang-chu.html và hai trang chi tiết sản phẩm (chủ dự án chọn mẫu B, 2026-10-29).
   Script thường (không module) để mở được bằng file:///. Đi kèm cart-drawer.css.
   - Bấm nút giỏ trên card (.card .card__actions .iconbtn): thêm món (trùng thì cộng dồn), mở drawer.
   - Bấm biểu tượng giỏ biến hình có data-cart-sku (trang chi tiết): thêm đúng số hộp đang chọn, mở drawer sau ~0,4 giây
     để kịp thấy dấu tích; biểu tượng quay về dấu cộng sau 1,4 giây như nút giỏ trên card.
   - Bấm icon giỏ trên header (.header__cart): mở drawer xem giỏ.
   - Trong drawer: 1–20 hộp mỗi món, xoá món có thanh "Hoàn tác" 6 giây, giỏ trống, gợi ý mua kèm (mock).
   - Đóng bằng nút X, màn che, "Tiếp tục mua sắm" hoặc Esc; tiêu điểm bị nhốt trong drawer, đóng thì trả về nút đã bấm.
   - "Đến trang giỏ hàng" ghi các món vào sessionStorage "gf-cart" (cùng dạng gio-hang.html / thanh-toan.html đọc) rồi chuyển trang.
   Mock: dữ liệu nằm trong bộ nhớ trang, không gọi API; tải lại trang là về 2 món mẫu, khớp số 2 trên icon giỏ.
   ===================================================================== */
(function () {
  'use strict';
  if (window.GfCart) return;
  var SCRIPT = document.currentScript, BASE = SCRIPT && SCRIPT.src ? SCRIPT.src : location.href;
  var MAX_QTY = 20, KEY = 'gf-cart';
  var RM = window.matchMedia('(prefers-reduced-motion: reduce)');
  var ICONS = {
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    trash: '<path d="M4.5 7h15"/><path d="M9.5 7V5.2A1.2 1.2 0 0110.7 4h2.6a1.2 1.2 0 011.2 1.2V7"/><path d="M6.5 7l.9 12a1.5 1.5 0 001.5 1.4h6.2a1.5 1.5 0 001.5-1.4l.9-12"/><path d="M10 11v6M14 11v6"/>',
    minus: '<path d="M5.5 12h13"/>',
    plus: '<path d="M12 5.5v13M5.5 12h13"/>',
    check: '<path d="M4.5 12.5l4.5 4.5L19.5 6.5"/>',
    cart: '<path d="M2.8 4h2.4l2.3 11.2a1.6 1.6 0 001.6 1.3h8.6a1.6 1.6 0 001.6-1.3L21.2 8.2H6.2"/><circle cx="9.7" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>',
    arrow: '<path d="M5 12h13M13 6.5l5.5 5.5L13 17.5"/>'
  };
  var items = [], heroSku = null, flashSku = null, undo = null, undoTimer = 0, openTimer = 0, lastTrigger = null, sugBySku = {};
  var drawer, scrim, body, foot, countEl, closeBtn, live;

  function money(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ'; }
  function num(t) { return parseInt(String(t || '').replace(/\D/g, ''), 10) || 0; }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function ic(n) { return '<svg class="cart-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + ICONS[n] + '</svg>'; }
  function pageUrl(rel) { return new URL(rel, BASE).href; }
  /* Ảnh lưu dạng "../public/…" tính từ thư mục ui-pages (đúng dạng gio-hang.html / thanh-toan.html nhận); hiển thị thì đổi về địa chỉ đầy đủ. */
  function canonImg(src) { if (!src) return ''; try { var u = new URL(src, document.baseURI).href, i = u.indexOf('/public/'); return i < 0 ? '' : '../public/' + u.slice(i + 8); } catch (_) { return ''; } }
  function showImg(canon) { return canon ? pageUrl(canon) : ''; }
  function find(sku) { for (var i = 0; i < items.length; i++) if (items[i].sku === sku) return items[i]; return null; }
  function text(root, sel) { var el = root.querySelector(sel); return el ? el.textContent.trim() : ''; }
  function announce(t) { live.textContent = ''; setTimeout(function () { live.textContent = t; }, 30); }
  function totals() {
    var qty = 0, sub = 0, saved = 0;
    items.forEach(function (it) { qty += it.qty; sub += it.price * it.qty; saved += Math.max(0, it.listed - it.price) * it.qty; });
    return { qty: qty, sub: sub, saved: saved, lines: items.length };
  }

  /* ---------- đọc dữ liệu món từ card / từ biểu tượng giỏ ở trang chi tiết ---------- */
  function fromCard(card) {
    var img = card.querySelector('.card__media img'), srcset = img ? (img.getAttribute('srcset') || '') : '';
    var raw = srcset ? srcset.split(',')[0].trim().split(/\s+/)[0] : (img ? img.getAttribute('src') : '');
    var pack = card.getAttribute('data-packs') || (text(card, '.price__serving').match(/(\d+)\s*gói/) || [])[1], name = text(card, '.card__name');
    return { sku: card.getAttribute('data-sku') || name, name: name, img: canonImg(raw), price: num(text(card, '.price__row--final dd')), listed: num(text(card, '.price__row--listed dd')), pack: pack ? 'Hộp ' + pack + ' gói' : '', qty: 1 };
  }
  function fromMorph(el) {
    var packs = el.getAttribute('data-cart-packs');
    return { sku: el.getAttribute('data-cart-sku'), name: el.getAttribute('data-cart-name') || '', img: canonImg(el.getAttribute('data-cart-img')), price: num(el.getAttribute('data-cart-price')), listed: num(el.getAttribute('data-cart-listed')), pack: packs ? 'Hộp ' + packs + ' gói' : '', qty: 1 };
  }

  /* ---------- dựng nội dung ---------- */
  function qtyHtml(it) {
    return '<div class="cart-qty" role="group" aria-label="Số lượng ' + esc(it.name) + '">'
      + '<button type="button" data-cart="dec" aria-label="Giảm số lượng"' + (it.qty <= 1 ? ' disabled' : '') + '>' + ic('minus') + '</button>'
      + '<span class="cart-qty__val">' + it.qty + '</span>'
      + '<button type="button" data-cart="inc" aria-label="Tăng số lượng"' + (it.qty >= MAX_QTY ? ' disabled' : '') + '>' + ic('plus') + '</button></div>';
  }
  function rowHtml(it, noFlash) {
    var isNew = !noFlash && it.sku === flashSku;
    return '<li class="cart-item' + (isNew ? ' is-new' : '') + '" data-sku="' + esc(it.sku) + '">'
      + '<img class="cart-item__img" src="' + esc(showImg(it.img)) + '" alt="" width="76" height="76" loading="lazy" decoding="async">'
      + '<div class="cart-item__info"><div class="cart-item__top"><p class="cart-item__name">' + esc(it.name) + '</p>'
      + '<button type="button" class="cart-item__remove" data-cart="remove" aria-label="Xóa ' + esc(it.name) + ' khỏi giỏ" title="Xóa khỏi giỏ">' + ic('trash') + '</button></div>'
      + '<p class="cart-item__meta">' + (it.pack ? esc(it.pack) + ' · ' : '') + money(it.price) + '/hộp</p>'
      + '<div class="cart-item__bottom">' + qtyHtml(it)
      + '<p class="cart-item__prices"><span class="cart-item__total">' + money(it.price * it.qty) + '</span>'
      + (it.listed > it.price ? '<br><span class="cart-item__listed">' + money(it.listed * it.qty) + '</span>' : '') + '</p></div></div></li>';
  }
  function emptyHtml() {
    var href = document.getElementById('collections') ? '#collections' : pageUrl('trang-chu-theo-doi-tuong/trang-chu.html#collections');
    return '<div class="cart__empty"><span class="cart__empty-icon" aria-hidden="true">' + ic('cart') + '</span>'
      + '<p class="cart__empty-title">Giỏ hàng đang trống</p>'
      + '<p class="cart__empty-text">Chọn một món Cháo Sâm hợp với bạn rồi bấm biểu tượng giỏ hàng để thêm vào đây.</p>'
      + '<a class="cart__btn cart__btn--primary" href="' + href + '" data-cart-close>Xem sản phẩm</a></div>';
  }
  function toastHtml() {
    return undo ? '<div class="cart__toast" role="status"><span>Đã xóa “' + esc(undo.item.name) + '” khỏi giỏ.</span><button type="button" data-cart="undo">Hoàn tác</button></div>' : '';
  }
  /* Gợi ý mua kèm (mock): hai món đầu trên trang chưa nằm trong giỏ. Bản thật lấy từ dữ liệu "thường mua cùng". */
  function suggestHtml() {
    var picks = [], cards = document.querySelectorAll('.card[data-sku]');
    for (var i = 0; i < cards.length && picks.length < 2; i++) {
      var d = fromCard(cards[i]);
      if (!find(d.sku) && d.price && !picks.some(function (p) { return p.sku === d.sku; })) picks.push(d);
    }
    if (!picks.length) return '';
    sugBySku = {}; picks.forEach(function (p) { sugBySku[p.sku] = p; });
    return '<section class="cart-sug" aria-labelledby="cartSugH"><p class="cart-sec" id="cartSugH">Thường được mua cùng</p><ul class="cart-sug__list">'
      + picks.map(function (p) {
        return '<li class="cart-sug__c"><img src="' + esc(showImg(p.img)) + '" alt="" width="150" height="84" loading="lazy" decoding="async"><div class="cart-sug__b"><p class="cart-sug__n">' + esc(p.name) + '</p><span class="cart-sug__p">' + money(p.price) + '</span>'
          + '<button type="button" class="cart__btn cart__btn--outline cart__btn--sm" data-cart="addsug" data-sku="' + esc(p.sku) + '" aria-label="Thêm ' + esc(p.name) + ' vào giỏ">' + ic('plus') + ' Thêm</button></div></li>';
      }).join('') + '</ul></section>';
  }
  function bodyHtml() {
    if (!items.length) return emptyHtml() + toastHtml();
    var hero = heroSku ? find(heroSku) : null, rest = items.filter(function (x) { return x !== hero; });
    return (hero ? '<div class="cart-hero"><p class="cart-hero__ok">' + ic('check') + ' Đã thêm vào giỏ</p><ul>' + rowHtml(hero, true) + '</ul></div>' : '')
      + (rest.length ? '<p class="cart-sec">' + (hero ? 'Trong giỏ của bạn' : 'Sản phẩm trong giỏ') + '</p><ul class="cart__list">' + rest.map(function (x) { return rowHtml(x); }).join('') + '</ul>' : '')
      + suggestHtml() + toastHtml();
  }
  function footHtml(t) {
    return '<div class="cart__row"><span>Tạm tính</span><b>' + money(t.sub) + '</b></div>'
      + (t.saved > 0 ? '<div class="cart__row cart__row--save"><span>Tiết kiệm so với giá niêm yết</span><span>−' + money(t.saved) + '</span></div>' : '')
      + '<p class="cart__note">Phí vận chuyển và quyền lợi thành viên được tính ở bước thanh toán.</p>'
      + '<div class="cart__actions"><a class="cart__btn cart__btn--primary cart__btn--block" href="' + pageUrl('gio-hang.html') + '" data-cart-go>Đến trang giỏ hàng ' + ic('arrow') + '</a>'
      + '<button type="button" class="cart__btn cart__btn--outline cart__btn--block" data-cart-close>Tiếp tục mua sắm</button></div>';
  }
  function render() {
    var t = totals(), a = document.activeElement, key = null, st = body.scrollTop;
    if (a && drawer.contains(a) && a.getAttribute('data-cart')) { var li = a.closest('.cart-item'); key = { act: a.getAttribute('data-cart'), sku: li ? li.getAttribute('data-sku') : null }; }
    body.innerHTML = bodyHtml();
    foot.innerHTML = items.length ? footHtml(t) : ''; foot.hidden = !items.length;
    body.scrollTop = st;
    countEl.textContent = t.qty;
    var badge, hc = document.querySelectorAll('.header__cart');
    for (var i = 0; i < hc.length; i++) {
      badge = hc[i].querySelector('.badge'); if (badge) { badge.textContent = t.qty; badge.hidden = t.qty === 0; }
      hc[i].setAttribute('aria-label', 'Giỏ hàng, ' + t.qty + ' sản phẩm');
    }
    if (key && key.sku) {
      var sel = '.cart-item[data-sku="' + CSS.escape(key.sku) + '"]';
      var again = body.querySelector(sel + ' [data-cart="' + key.act + '"]:not(:disabled)') || body.querySelector(sel + ' .cart-qty button:not(:disabled)');
      if (again) again.focus({ preventScroll: true });
    }
  }

  /* ---------- mở / đóng ---------- */
  function isOpen() { return drawer.classList.contains('is-open'); }
  function focusClose() {
    requestAnimationFrame(function () { requestAnimationFrame(function () {
      closeBtn.focus({ preventScroll: true });
      if (document.activeElement !== closeBtn) setTimeout(function () { closeBtn.focus({ preventScroll: true }); }, 80);
    }); });
  }
  function open(trigger) {
    if (isOpen()) return;
    lastTrigger = trigger || document.activeElement;
    /* Khoá cuộn ở cấp <html> (body overflow:hidden không đủ khi trang giữ thanh cuộn/scrollbar-gutter): bỏ thanh cuộn để drawer sát mép phải,
       rồi bù đúng bề rộng đó bằng padding để trang nền không giật. */
    var root = document.documentElement, sbw = window.innerWidth - root.clientWidth;
    root.style.overflow = 'hidden'; root.style.scrollbarGutter = 'auto'; root.style.paddingRight = sbw + 'px';
    drawer.classList.add('is-open'); scrim.classList.add('is-on');
    drawer.setAttribute('aria-hidden', 'false'); drawer.inert = false;
    document.body.classList.add('is-cart-open');
    var hc = document.querySelectorAll('.header__cart'); for (var i = 0; i < hc.length; i++) hc[i].setAttribute('aria-expanded', 'true');
    focusClose();
  }
  function close() {
    if (!isOpen()) return;
    clearTimeout(openTimer);
    drawer.classList.remove('is-open'); scrim.classList.remove('is-on');
    drawer.setAttribute('aria-hidden', 'true'); drawer.inert = true;
    document.body.classList.remove('is-cart-open'); document.documentElement.style.overflow = ''; document.documentElement.style.scrollbarGutter = ''; document.documentElement.style.paddingRight = '';
    var hc = document.querySelectorAll('.header__cart'); for (var i = 0; i < hc.length; i++) hc[i].setAttribute('aria-expanded', 'false');
    heroSku = null; clearUndo();
    if (lastTrigger && document.contains(lastTrigger)) lastTrigger.focus({ preventScroll: true });
  }
  function clearUndo() { undo = null; clearTimeout(undoTimer); var t = body.querySelector('.cart__toast'); if (t) t.remove(); }

  /* ---------- thêm món ---------- */
  function addProduct(prod, qty, trigger, viaMorph) {
    qty = Math.max(1, qty | 0);
    var hit = find(prod.sku);
    if (hit) hit.qty = Math.min(MAX_QTY, hit.qty + qty); else { prod.qty = Math.min(MAX_QTY, qty); items.unshift(prod); }
    heroSku = prod.sku; flashSku = prod.sku; clearUndo();
    render(); body.scrollTop = 0; flashSku = null;
    announce('Đã thêm ' + prod.name + ' vào giỏ. Giỏ hiện có ' + totals().lines + ' sản phẩm.');
    if (viaMorph) {
      trigger.setAttribute('state', 'added'); clearTimeout(trigger._gfT);
      trigger._gfT = setTimeout(function () { trigger.setAttribute('state', 'empty'); }, 1400);
      clearTimeout(openTimer); openTimer = setTimeout(function () { open(trigger.querySelector('button') || trigger); }, RM.matches ? 0 : 380);
    } else {
      var use = trigger && trigger.querySelector('use'), canSwap = !!document.getElementById('i-check');
      if (trigger) { trigger.classList.add('is-added'); if (use && canSwap) use.setAttribute('href', '#i-check'); }
      setTimeout(function () { if (!trigger) return; trigger.classList.remove('is-added'); if (use && canSwap) use.setAttribute('href', '#i-cart'); }, 1400);
      open(trigger);
    }
  }

  function toStorage() { return items.map(function (it) { return { sku: it.sku, name: it.name, img: it.img, price: it.price, listed: it.listed, pack: it.pack, qty: it.qty }; }); }

  function onClick(e) {
    var addBtn = e.target.closest('.card .card__actions .iconbtn');
    if (addBtn) { addProduct(fromCard(addBtn.closest('.card')), 1, addBtn, false); return; }
    var morph = e.target.closest('ui-cart-morph[data-cart-sku]');
    if (morph && e.target.closest('button')) {
      var from = morph.getAttribute('data-cart-qty-from'), q = from ? parseInt((document.querySelector(from) || {}).textContent, 10) : 1;
      addProduct(fromMorph(morph), q > 0 ? q : 1, morph, true); return;
    }
    if (e.target.closest('.header__cart')) { e.preventDefault(); heroSku = null; render(); open(e.target.closest('.header__cart')); return; }
    if (e.target.closest('#cartDrawer [data-cart-close]')) { close(); return; }
    if (e.target.closest('#cartDrawer [data-cart-go]')) { try { sessionStorage.setItem(KEY, JSON.stringify(toStorage())); } catch (_) {} return; }
    var ctl = e.target.closest('#cartDrawer [data-cart]');
    if (!ctl) return;
    var act = ctl.getAttribute('data-cart');
    if (act === 'undo') { if (undo) { var back = undo.item; items.splice(undo.index, 0, back); announce('Đã hoàn tác, ' + back.name + ' đã về giỏ.'); clearUndo(); flashSku = back.sku; render(); flashSku = null; } return; }
    if (act === 'addsug') { var p = sugBySku[ctl.getAttribute('data-sku')]; if (p && !find(p.sku)) { p.qty = 1; items.push(p); announce('Đã thêm ' + p.name + ' vào giỏ.'); flashSku = p.sku; render(); flashSku = null; var nw = body.querySelector('.is-new'); if (nw) nw.scrollIntoView({ block: 'nearest' }); } return; }
    var row = ctl.closest('.cart-item'), sku = row && row.getAttribute('data-sku'), it = sku && find(sku);
    if (!it) return;
    if (act === 'inc') it.qty = Math.min(MAX_QTY, it.qty + 1);
    if (act === 'dec') it.qty = Math.max(1, it.qty - 1);
    if (act === 'remove') {
      undo = { item: it, index: items.indexOf(it) }; clearTimeout(undoTimer); undoTimer = setTimeout(clearUndo, 6000);
      items = items.filter(function (x) { return x !== it; }); if (heroSku === sku) heroSku = null;
      announce('Đã xóa ' + it.name + ' khỏi giỏ.');
    } else announce('Số lượng ' + it.name + ' là ' + it.qty + '.');
    render();
    if (act === 'remove') closeBtn.focus();
  }
  function onKey(e) {
    if (!isOpen()) return;
    if (e.key === 'Escape') { e.preventDefault(); close(); return; }
    if (e.key !== 'Tab') return;
    var f = Array.prototype.slice.call(drawer.querySelectorAll('a[href], button:not(:disabled)')).filter(function (el) { return el.offsetParent !== null; });
    if (!f.length) return;
    var first = f[0], last = f[f.length - 1], inside = drawer.contains(document.activeElement);
    if (!inside) { e.preventDefault(); (e.shiftKey ? last : first).focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function init() {
    if (document.getElementById('cartDrawer')) return; /* trang còn drawer cũ: không dựng thêm */
    scrim = document.createElement('div'); scrim.className = 'cart-scrim'; scrim.id = 'cartScrim';
    drawer = document.createElement('aside'); drawer.className = 'cart'; drawer.id = 'cartDrawer';
    drawer.setAttribute('role', 'dialog'); drawer.setAttribute('aria-modal', 'true'); drawer.setAttribute('aria-labelledby', 'cartTitle'); drawer.setAttribute('aria-hidden', 'true'); drawer.inert = true;
    drawer.innerHTML = '<div class="cart__head"><h2 class="cart__title" id="cartTitle">Giỏ hàng <span class="cart__count" id="cartCount">0</span></h2>'
      + '<button type="button" class="cart__close" id="cartClose" aria-label="Đóng giỏ hàng" title="Đóng">' + ic('close') + '</button></div>'
      + '<div class="cart__body" id="cartBody"></div><div class="cart__foot" id="cartFoot"></div>';
    live = document.createElement('output'); live.className = 'cart__live'; live.setAttribute('role', 'status');
    document.body.appendChild(scrim); document.body.appendChild(drawer); document.body.appendChild(live);
    body = drawer.querySelector('#cartBody'); foot = drawer.querySelector('#cartFoot'); countEl = drawer.querySelector('#cartCount'); closeBtn = drawer.querySelector('#cartClose');
    closeBtn.addEventListener('click', close); scrim.addEventListener('click', close);
    document.addEventListener('click', onClick); document.addEventListener('keydown', onKey);
    var hc = document.querySelectorAll('.header__cart'); for (var i = 0; i < hc.length; i++) hc[i].setAttribute('aria-controls', 'cartDrawer');
    /* Giỏ mẫu 2 món, khớp số 2 trên icon giỏ lúc tải trang; ở trang chi tiết thì bỏ qua chính món đang xem để bấm thêm không thành "2 hộp" ngay. */
    var own = document.querySelector('ui-cart-morph[data-cart-sku]'), ownSku = own ? own.getAttribute('data-cart-sku') : '';
    ['#col-seasonal .card', '#col-nourishing .card'].forEach(function (sel) {
      var list = document.querySelectorAll(sel);
      for (var i = 0; i < list.length; i++) { if (list[i].getAttribute('data-sku') !== ownSku) { items.push(fromCard(list[i])); break; } }
    });
    render();
  }
  window.GfCart = { add: addProduct, open: function (t) { heroSku = null; render(); open(t); }, close: close, items: function () { return items.slice(); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();