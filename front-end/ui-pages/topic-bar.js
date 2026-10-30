/* =====================================================================
   Thanh "Chủ đề" (.catbar) dùng chung: ở điện thoại (≤767px) thu thành nút, bấm mở/đóng bảng thả xuống (bấm mục, bấm ra ngoài hoặc Esc thì đóng),
   và ghi chiều cao thật của thanh vào biến --catbar-h trên <html> để các luật cuộn/neo của trang cộng đúng. Mã lấy từ hàm wire() của chi-tiet-san-pham.html.
   Script thường (không module) để mở được bằng file:///.
   ===================================================================== */
(function () {
  'use strict';
  var root = document.documentElement;
  var bar = document.querySelector('.catbar[data-topic-bar]');
  if (!bar) return;
  var toggle = document.getElementById('catToggle'), nav = document.getElementById('catNav');
  function setOpen(open) {
    bar.classList.toggle('is-open', open);
    if (!toggle) return;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  if (toggle && nav) {
    toggle.addEventListener('click', function () { setOpen(!bar.classList.contains('is-open')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('click', function (e) { if (bar.classList.contains('is-open') && !bar.contains(e.target)) setOpen(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && bar.classList.contains('is-open')) { setOpen(false); toggle.focus(); } });
    window.matchMedia('(max-width: 767px)').addEventListener('change', function (e) { if (!e.matches) setOpen(false); });
  }
  function measure() { root.style.setProperty('--catbar-h', Math.ceil(bar.getBoundingClientRect().height) + 'px'); }
  if ('ResizeObserver' in window) new ResizeObserver(measure).observe(bar); else window.addEventListener('resize', measure);
  measure();
}());
