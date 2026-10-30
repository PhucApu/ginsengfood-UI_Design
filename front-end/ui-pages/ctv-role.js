/* Vai trò cộng tác viên (bản mẫu), chủ dự án chọn phương án A, 2026-10-29.
   Cộng tác viên vừa kinh doanh vừa mua hàng: trang nhà khởi nghiệp (trang-chu-cong-tac-vien-v2.html) có menu "Trang mua hàng của bạn" dẫn sang trang mua hàng theo hạng;
   ở các trang hạng đó, mục menu "Khởi nghiệp cùng Ssavigroup" (mời đăng ký, dành cho người CHƯA là cộng tác viên) được thay bằng viên vàng "Trang nhà khởi nghiệp của bạn".
   Nhận biết vai trò: địa chỉ có ?vai-tro=cong-tac-vien (liên kết từ trang nhà khởi nghiệp gắn sẵn) hoặc sessionStorage.gfRole (trang nhà khởi nghiệp ghi khi mở, mất khi đóng tab).
   Mở thẳng trang hạng ở tab mới = thành viên thường, menu giữ nguyên. Bản thật sẽ lấy vai trò từ phiên đăng nhập.
   Nạp ở <head> (không defer) để đặt thuộc tính trước lần vẽ đầu, menu không bị nháy. */
(function () {
  'use strict';
  var ROLE = 'cong-tac-vien', KEY = 'gfRole', isCtv = false;
  try { isCtv = new URLSearchParams(window.location.search).get('vai-tro') === ROLE; } catch (e) {}
  try {
    if (isCtv) window.sessionStorage.setItem(KEY, ROLE);
    else isCtv = window.sessionStorage.getItem(KEY) === ROLE;
  } catch (e) {}
  if (isCtv) document.documentElement.setAttribute('data-role', 'ctv');
})();