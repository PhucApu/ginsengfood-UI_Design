# Ginsengfood – bộ thiết kế HTML tĩnh

Thư mục này là bản sao độc lập của các trang thiết kế UI Ginsengfood. Không có bước build, không có package manager.

## Cấu trúc

- `front-end/ui-pages/` – các trang HTML (mỗi trang tự chứa CSS và JS nội tuyến) cùng `home-motion.css`, `home-motion.js`, `mobile-account.css`.
  Trang chủ các đối tượng nằm ở `front-end/ui-pages/trang-chu-theo-doi-tuong/`.
- `front-end/public/` – ảnh, logo, font biểu tượng (`fonts/material-symbols/`). Chỉ là tài nguyên, không sửa mã ở đây.
- `back-end/src/main/resources/seed/detail-document/` – ảnh tài liệu mà trang chi tiết sản phẩm tham chiếu.
- `front-end/ui-pages/README.md` – ghi chú từng trang, bảng đổi tên tệp, các quyết định đã chốt.

## Quy tắc khi sửa

- Chỉ sửa trong `front-end/ui-pages/`, trừ khi người dùng yêu cầu thay ảnh.
- Giữ nguyên đường dẫn tương đối (`../public/...`, `../../public/...` ở thư mục con, `../../back-end/...`). Không di chuyển hay đổi tên `ui-pages`, `public`, `back-end`.
- Trang xem bằng cách mở tệp trực tiếp trong trình duyệt (`file://`); không cần máy chủ.
- Ảnh sản phẩm được ghép tên trong JS (ví dụ `IMG + tên + '.w480.q90.webp'`); khi đổi tên tệp ảnh phải tìm cả trong script, không chỉ trong thuộc tính `src`.
- Mỗi trang dài khoảng 100–450 KB: đọc theo khu vực cần sửa (tìm bằng id, class hoặc chú thích khối) thay vì đọc cả tệp.
- Chữ hiển thị cho người dùng viết tiếng Việt có dấu; tránh đổi sang tiếng Anh trừ tên thương hiệu, tên hạng (Silver/Gold/Platinum/Diamond), SKU, từ viết tắt.
- Màu và khoảng cách dùng các biến CSS `--gf-*` đã có trong từng tệp; không thêm màu mới nếu biến hiện có đáp ứng được.
- Dữ liệu trong trang là dữ liệu mẫu, không gọi API.
- Sau khi sửa, nhắc người dùng tải lại trang trong trình duyệt để xem kết quả.
