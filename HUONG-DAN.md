# Bộ thiết kế giao diện Ginsengfood (bản HTML)

Gói này chứa toàn bộ các trang thiết kế HTML của Ginsengfood kèm đủ ảnh và font biểu tượng,
để mở và chỉnh sửa trên bất kỳ máy nào mà không cần cài thêm gì.

## 1. Cách mở

1. Giải nén tệp `.zip` ra một thư mục (ví dụ `ginsengfood-ui-pages`).
2. Vào `front-end/ui-pages/` và bấm đúp một tệp `.html` để mở bằng trình duyệt
   (khuyên dùng Chrome hoặc Edge). Không cần chạy máy chủ, không cần cài Node hay Java.

Các điểm vào chính:

| Trang | Tệp |
|---|---|
| Trang chủ khách | `front-end/ui-pages/trang-chu-theo-doi-tuong/trang-chu.html` |
| Trang chủ theo hạng (Silver / Gold / Platinum / Diamond) | `front-end/ui-pages/trang-chu-theo-doi-tuong/trang-chu-<hạng>-v2.html` |
| Trang chủ cộng tác viên | `front-end/ui-pages/trang-chu-theo-doi-tuong/trang-chu-cong-tac-vien.html` |
| Chi tiết sản phẩm | `front-end/ui-pages/chi-tiet-san-pham.html` |
| Giỏ hàng, thanh toán, kết quả thanh toán | `gio-hang.html`, `thanh-toan.html`, `ket-qua-thanh-toan.html` |
| Tài khoản, đăng nhập, đăng ký | `tai-khoan.html`, `dang-nhap.html`, `dang-ky.html` |
| Tin tức, Về chúng tôi, Đại lý | `tin-tuc.html`, `ve-chung-toi.html`, `trang-chu-theo-doi-tuong/dai-ly-nha-phan-phoi.html` |

Danh sách đầy đủ và ghi chú từng trang nằm trong `front-end/ui-pages/README.md`.

## 2. Cấu trúc thư mục (quan trọng: đừng đổi)

```
ginsengfood-ui-pages/
├─ front-end/
│  ├─ ui-pages/   ← CÁC TRANG THIẾT KẾ (chỉnh sửa ở đây)
│  └─ public/     ← ảnh, logo, font biểu tượng mà các trang dùng
└─ back-end/src/main/resources/seed/…   ← 6 ảnh tài liệu của trang chi tiết sản phẩm
```

Các trang gọi ảnh bằng đường dẫn tương đối như `../public/...`. Vì vậy:

- Giữ nguyên vị trí của `ui-pages`, `public` và `back-end` so với nhau; không di chuyển hay đổi tên riêng lẻ.
- Muốn đổi ảnh: thay tệp trong `front-end/public/...` (giữ nguyên tên và đuôi tệp) hoặc đổi đường dẫn trong HTML.
- Muốn gửi lại bản đã sửa: nén lại cả thư mục gốc, không chỉ riêng `ui-pages`.

## 3. Cần Internet cho một số phần

- Font chữ **Inter, Manrope, Noto Serif, Great Vibes** được nạp từ Google Fonts. Khi không có mạng,
  trình duyệt dùng font hệ thống thay thế nên chữ có thể xuống dòng khác một chút.
- Trang `trung-tam-cong-tac-vien.html` nạp thư viện mã QR từ cdnjs; 7 trang chủ (thư mục `trang-chu-theo-doi-tuong/`) nhúng bản đồ Google Maps.
- Mọi thứ khác (ảnh, font biểu tượng, CSS, JS) đã nằm sẵn trong gói và chạy được khi offline.

## 4. Dùng cùng Claude để chỉnh sửa

Mở terminal tại thư mục gốc của gói (thư mục chứa `front-end` và `HUONG-DAN.md`), chạy `claude`,
rồi mô tả việc cần làm. Tệp `CLAUDE.md` ở thư mục gốc đã cho Claude biết cấu trúc và quy tắc. Ví dụ:

- "Mở `front-end/ui-pages/chi-tiet-san-pham.html`, đổi màu nút Mua ngay sang xanh navy."
- "Ở trang chủ khách, đổi tiêu đề banner thành …"

Để xem kết quả: lưu tệp rồi tải lại (F5) trang đang mở trong trình duyệt.

## 5. Lưu ý

- Đây là **bản mẫu giao diện**: dữ liệu (sản phẩm, giá, đơn hàng, số liệu) là số mẫu cục bộ,
  nút bấm không gọi máy chủ thật; đăng nhập, thanh toán chỉ mô phỏng.
- Nên chỉnh theo từng trang một và xem lại ngay trên trình duyệt sau mỗi thay đổi; các trang
  trang chủ khá dài (khoảng 400 KB mỗi trang) nên hãy nêu rõ khu vực cần sửa khi nhờ Claude.
