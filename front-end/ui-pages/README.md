# Các trang UI HTML của Ginsengfood

Ngày rà soát và gom thư mục: **21/09/2026**.

Thư mục này chứa đúng 17 trang HTML được yêu cầu. Mở các liên kết bên dưới
hoặc mở trực tiếp file HTML bằng trình duyệt. Đường dẫn cũ tại `front-end/`
đã chuyển sang `front-end/ui-pages/`; tên file, query và fragment được giữ nguyên.
Tên đúng của trang Platinum là `trang-chu-platinum-v2.html`, không phải `platium`.

| Trang | File / điểm mở |
|---|---|
| Đăng ký | [dang-ky.html](dang-ky.html) |
| Đăng nhập | [dang-nhap.html](dang-nhap.html) |
| Trang chủ khách — quyền lợi | [trang-chu.html](trang-chu-theo-doi-tuong/trang-chu.html#quyen-loi) |
| Trang chủ khi mua qua link giới thiệu — khối quyền lợi từ link (cùng khu bốn hạng) | [trang-chu-link-gioi-thieu.html](trang-chu-theo-doi-tuong/trang-chu-link-gioi-thieu.html#qua-link) |
| Trang chủ Gold — sản phẩm | [trang-chu-gold-v2.html](trang-chu-theo-doi-tuong/trang-chu-gold-v2.html#collections) |
| Trang chủ Silver — quyền lợi | [trang-chu-silver-v2.html](trang-chu-theo-doi-tuong/trang-chu-silver-v2.html#quyen-loi) |
| Trang chủ Platinum | [trang-chu-platinum-v2.html](trang-chu-theo-doi-tuong/trang-chu-platinum-v2.html) |
| Trang chủ Diamond | [trang-chu-diamond-v2.html](trang-chu-theo-doi-tuong/trang-chu-diamond-v2.html) |
| Sản phẩm | [chi-tiet-san-pham.html](chi-tiet-san-pham.html#noi-dung) |
| Sản phẩm dành cho Silver | [chi-tiet-san-pham-silver.html](chi-tiet-san-pham-silver.html#noi-dung) |
| Tin tức | [tin-tuc.html](tin-tuc.html#noi-dung) |
| Chi tiết tin tức (bài viết; đang tải, lỗi tải, không tìm thấy; thử tiêu đề dài, ảnh chưa sẵn sàng, thiếu nội dung, khung xem trước admin, số ảnh thư viện) | [chi-tiet-tin-tuc.html](chi-tiet-tin-tuc.html) — chọn ở thanh "Bản mẫu" hoặc dùng tham số địa chỉ, xem mục "Chi tiết tin tức: đối chiếu với CMS bài viết" ở cuối tệp này |
| Giới thiệu | [ve-chung-toi.html](ve-chung-toi.html) |
| Thanh toán | [thanh-toan.html](thanh-toan.html) |
| Chi tiết đơn của thành viên (đã trả tiền, chờ thanh toán, thất bại, hết hạn, đang giao, đã giao + yêu cầu trả hàng) | [chi-tiet-don-hang-thanh-vien.html](chi-tiet-don-hang-thanh-vien.html) — chọn trạng thái ở thanh "Bản mẫu" hoặc `?trang-thai=xac-nhan\|dang-cho\|that-bai\|het-han\|dang-giao\|da-giao` |
| Kết quả thanh toán (thành công / đang chờ / chưa thành công / hết hạn) | [ket-qua-thanh-toan.html](ket-qua-thanh-toan.html) — chọn trạng thái ở thanh "Bản mẫu" hoặc `?trang-thai=thanh-cong\|dang-cho\|dang-kiem-tra\|that-bai\|het-han\|khong-co-don&ly-do=huy\|ngan-hang&canh-bao=chu-ky\|so-tien\|khong-thay\|chua-xac-nhan` |
| Tài khoản — thông báo | [tai-khoan.html](tai-khoan.html#thong-bao) |
| Tra cứu đơn hàng | [tra-cuu-don-hang.html](tra-cuu-don-hang.html) |
| Chi tiết đơn mẫu | [chi-tiet-don-hang-khach.html](chi-tiet-don-hang-khach.html?ma=GF-260912-4821) |
| Điều khoản cộng tác viên — xác nhận | [dieu-khoan-cong-tac-vien.html](trang-chu-theo-doi-tuong/dieu-khoan-cong-tac-vien.html#xac-nhan) |
| Hợp tác doanh nghiệp | [dai-ly-nha-phan-phoi.html](trang-chu-theo-doi-tuong/dai-ly-nha-phan-phoi.html) |

## Bảng đổi tên tệp (01/10/2026)

Thư mục hiện có 25 trang HTML, đã đổi sang tên tiếng Việt không dấu. Mọi liên kết giữa các trang, các script
đọc trang chủ và `DESIGN.md` đã được cập nhật theo tên mới. Chú thích trong mã nguồn, test và các bản ghi tài liệu cũ
vẫn có thể nhắc tên cũ: dùng bảng này để tra.

| Tên cũ | Tên mới | Nội dung |
|---|---|---|
| `home-page.html` | `trang-chu.html` | Trang chủ của khách (New) |
| `home-page-silver-v2.html` | `trang-chu-silver-v2.html` | Trang chủ hạng Silver |
| `home-page-gold-v2.html` | `trang-chu-gold-v2.html` | Trang chủ hạng Gold |
| `home-page-platinum-v2.html` | `trang-chu-platinum-v2.html` | Trang chủ hạng Platinum |
| `home-page-diamond-v2.html` | `trang-chu-diamond-v2.html` | Trang chủ hạng Diamond |
| `home-page-collaborator.html` | `trang-chu-cong-tac-vien.html` | Trang chủ của cộng tác viên, **bản cũ** (có thanh "Hướng dẫn kinh doanh", thiết kế đang hoãn) |
| (mới) | `trang-chu-cong-tac-vien-v2.html` | Trang chủ của cộng tác viên, **bản hiện hành** (Trung tâm cộng tác viên trỏ về trang này) |
| `home-page-referral.html` | `trang-chu-link-gioi-thieu.html` | Trang chủ khi khách mua qua link giới thiệu |
| `about-page.html` | `ve-chung-toi.html` | Về chúng tôi |
| `business-page.html` | `dai-ly-nha-phan-phoi.html` | Đại lý nhà phân phối (hợp tác doanh nghiệp) |
| `news-page.html` | `tin-tuc.html` | Tin tức |
| `product-page.html` | `chi-tiet-san-pham.html` | Chi tiết sản phẩm |
| `product-page-silver.html` | `chi-tiet-san-pham-silver.html` | Chi tiết sản phẩm dành cho hội viên Silver |
| `collection-page.html` | `nhom-san-pham.html` | Trang nhóm sản phẩm |
| `cart-page.html` | `gio-hang.html` | Giỏ hàng |
| `checkout-page.html` | `thanh-toan.html` | Thanh toán |
| `payment-result-page.html` | `ket-qua-thanh-toan.html` | Kết quả thanh toán |
| `order-lookup-page.html` | `tra-cuu-don-hang.html` | Tra cứu đơn hàng (khách chưa đăng nhập) |
| `order-detail-page.html` | `chi-tiet-don-hang-khach.html` | Chi tiết đơn của khách (mở từ trang tra cứu) |
| `account-order-detail-page.html` | `chi-tiet-don-hang-thanh-vien.html` | Chi tiết đơn của thành viên |
| `account-page.html` | `tai-khoan.html` | Tài khoản |
| `login-page.html` | `dang-nhap.html` | Đăng nhập |
| `register-page.html` | `dang-ky.html` | Đăng ký |
| `logout-page.html` | `dang-xuat.html` | Đăng xuất |
| `collaborator-center-page.html` | `trung-tam-cong-tac-vien.html` | Trung tâm cộng tác viên |
| `collaborator-terms-page.html` | `dieu-khoan-cong-tac-vien.html` | Điều khoản cộng tác viên |

## Phạm vi thay đổi

- Giữ nguyên bố cục, CSS và nội dung. Đã đối chiếu cả 17 trang với bản Git trước
  khi di chuyển, sau khi loại các thay đổi đường dẫn và guard ảnh checkout đã chủ đích sửa.
- Ảnh dùng chung ở `../public/`; trang giới thiệu dùng thêm `../about-us-assets/`.
  Không sao chép hoặc di chuyển tài nguyên ảnh.
- `nhom-san-pham.html` và `dang-xuat.html` nằm ngay trong thư mục này (bản README cũ ghi nhầm là ở ngoài).
  Các liên kết dạng `../…html` và `ui-pages/…html` từng trỏ ra ngoài thư mục nên đã hỏng từ trước; khi đổi tên,
  chúng được sửa để trỏ thẳng tới tên mới trong cùng thư mục.
- Checkout chấp nhận ảnh giỏ hàng theo đường dẫn mới `../public/` và chuyển
  đường dẫn `public/` trong phiên cũ sang vị trí mới.
- Cập nhật `../scripts/optimize-home-images.py`, `home-images.test.mjs` và
  `test_optimize_home_images.py` để đọc trang chủ ở vị trí mới.
  Manifest ảnh vẫn lưu đường dẫn chuẩn tính từ `front-end/`.
- Các trang là bản mẫu HTML dùng dữ liệu cục bộ. Không thay đổi ứng dụng React,
  API, DTO, dữ liệu backend hoặc quy tắc nghiệp vụ.

## Kết quả rà soát UI cần xử lý riêng

| Mức | Vấn đề có sẵn | Bằng chứng và hướng xử lý |
|---|---|---|
| P2 | Nút nhắc Giờ Vàng tiếp tục bị khóa khi phiên bắt đầu. | `trang-chu.html:4156–4182`: đăng ký nhắc đặt `disabled`, nhưng chuyển sang LIVE không bỏ trạng thái này. Đã tái hiện trên Chromium từ 12:14 sang 12:15:01: vẫn “Đã đặt nhắc”, `disabled=true`. Cùng logic trong 4 trang chủ hạng. Nên tách trạng thái đăng ký nhắc khỏi khả năng mua khi phiên mở. |
| P2 | Sắp xếp tin tức không đổi thứ tự đọc bằng bàn phím/trình đọc màn hình. | `tin-tuc.html:1664–1667` dùng CSS `order`; thứ tự DOM giữ nguyên. Nên sắp lại node bài viết trong DOM. |
| P3 | Form chưa biểu đạt trạng thái nhập sai bằng `aria-invalid`. | `dang-ky.html:339`, `dang-nhap.html:314`, `tai-khoan.html:641` chỉ đổi class. Nên đồng bộ thuộc tính với validation hiện có. |
| P3 | Còn nội dung cần Việt hóa hoặc chỉ dành cho bản mẫu. | “Quota phiên” ở 5 trang chủ và 2 trang sản phẩm; “Chat” ở `tra-cuu-don-hang.html:173`; “Link” ở điều khoản; “Bản mockup/Trang thật” ở `dang-nhap.html:321`, `dang-ky.html:347`. Đề xuất “Số lượng mỗi phiên”, “Nhắn tin”, “Đường dẫn”; thay thông báo bản mẫu khi triển khai chức năng thật. |

CSS mobile của danh sách đơn trong `tai-khoan.html:310` đặt thuộc tính grid lên
phần tử không phải con trực tiếp của grid. Kiểm tra thực tế ở 390 px chưa thấy
tràn hoặc chồng chữ; đây là điểm nên dọn khi sửa layout, chưa phải lỗi hiển thị đã xác nhận.

Nhiều liên kết `href="#"`, tìm kiếm, đọc bài, quên mật khẩu và các nút hỗ trợ
chỉ là chỗ giữ trong bản mẫu. Đăng nhập/đăng ký không xác thực thật; thanh toán
không tạo đơn backend. Mã đơn sinh tại checkout không được thêm vào 3 đơn mẫu
của trang tra cứu. Các hạn chế này có trước khi gom thư mục.

## Kiểm tra đã thực hiện

| Kiểm tra | Kết quả |
|---|---|
| Đối chiếu 17 HTML, đường dẫn và cú pháp JS bằng Node + JSDOM | PASS: 1.057 URL nội bộ, 26 inline script, 81 tham chiếu từ các HTML bên ngoài; không phát sinh thay đổi ngoài phạm vi. |
| Chromium mở đúng 17 URL được yêu cầu, ở 1440 × 1000 và 390 × 844 | PASS 34/34: không có lỗi JavaScript, ảnh thiếu, thiếu ID fragment được yêu cầu hoặc tràn ngang toàn trang. |
| Trang chủ → giỏ → checkout bằng `file://` | PASS: giữ 2 loại sản phẩm, tổng 3 đơn vị sau khi thêm món; ảnh ở vị trí mới tải được. |
| Checkout với ảnh `public/` của phiên cũ | PASS: chuẩn hóa thành `../public/`. |
| Đăng nhập ↔ đăng ký; tra cứu → chi tiết đơn | PASS: giữ tên file và query `ma=GF-260912-4821`. |
| `npm run build` từ `front-end/` | PASS, gồm kiểm tra TypeScript và 108 trang được sinh. |
| `npm run lint` từ `front-end/` | PASS: 0 lỗi, 51 cảnh báo trong các file ngoài phạm vi sửa. |
| Bundled Python `-B -m unittest scripts/test_optimize_home_images.py` | PASS 13/13; kiểm tra thêm URL tương đối, containment và patch ảnh ở thư mục mới cũng đạt. |
| `node --test scripts/home-images.test.mjs` | 6 PASS / 2 FAIL; hai lỗi đã được xác nhận trước khi di chuyển: ảnh được đánh dấu retired vẫn được dùng và ảnh `home-webp-v1/9.webp` thiếu trong inventory hoạt động. |
| Python `scripts/optimize-home-images.py --verify` | FAIL `Non-image markup changed`; nội dung tại Git HEAD trước task cũng đã lệch baseline của manifest. Không thay checksum để che lỗi. |
| `git diff --check` | PASS. |

Python có Pillow đã dùng:
`C:/Users/PCPV/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe`.

Ảnh và JSON kiểm tra trình duyệt lưu tạm tại
`C:/Users/PCPV/AppData/Local/Temp/ginsengfood-ui-pages-audit-20260921/`.
Đây là smoke test bản mẫu HTML, không phải bằng chứng tích hợp backend thật.
Chưa kiểm thử toàn bộ thao tác hoặc toàn bộ thiết bị/trình duyệt.

## Shared UI check và Vietnamese UI check

- **Shared UI check: N/A cho việc tái sử dụng React trong HTML độc lập.**
  COMPONENT_MAP checked; Shared candidates found: `FormField`, `ImageFrame`,
  `EmptyState`, nhóm feedback; Used imports: none; Custom component exceptions:
  giữ nguyên HTML prototype hiện hữu, không tạo component mới;
  Forbidden import check: không dùng `@/shared/components/admin`.
- **Vietnamese UI check:** đã rà soát; còn các vấn đề nội dung ghi phía trên.
  Không thay copy trong lượt di chuyển file. Desktop/mobile đã kiểm tra ở hai kích thước trên.
- **English exceptions:** Ginsengfood và tên thương hiệu/dịch vụ; tên hạng
  Silver/Gold/Platinum/Diamond; SKU; các tên chuẩn/viết tắt QR, ATM, Visa/Mastercard.
  “Quota”, “Chat”, “Link”, “mockup” là mục cần xử lý, không tính là ngoại lệ được chấp thuận.

## Ghi chú bảo trì

GitNexus được index ngày 05/09/2026, khác HEAD hiện tại. Các truy vấn impact cho
HTML và symbol tooling đã sửa trả UNKNOWN vì không có trong index; phạm vi được
kiểm chứng thêm bằng tìm kiếm tham chiếu, diff và kiểm tra thực tế. Không tự re-index.

Git status hiện thể hiện 17 file cũ bị chuyển đi và thư mục mới chưa được stage;
8 HTML bên ngoài cùng 3 script có sửa đường dẫn. Không add/commit/push.
Submodule `ginsengfood-contracts` và báo cáo tuần có thay đổi từ trước, được giữ nguyên.

Nếu cần hoàn tác riêng lượt gom: di chuyển đúng 17 file trở lại `front-end/`,
đảo các prefix đường dẫn đã ghi ở trên và phục hồi riêng diff của 8 HTML/3 script
liên quan. Không reset toàn repo hoặc ghi đè thay đổi của người khác.

## Chi tiết tin tức: đối chiếu với CMS bài viết (10/10/2026)

`chi-tiet-tin-tuc.html` được chỉnh theo cách trang quản trị (`/admin/content/posts`) tạo, giới hạn và kiểm bài,
không chỉ theo ý đồ hình thức. Nguồn đã đọc: `front-end/src/features/content/` (`types.ts`, `components/ContentArticleRenderer.tsx`,
`admin/components/ContentPostBlockComposer.tsx`, `contentPostEditorModel.ts`, `ContentPostMediaSourcePicker.tsx`,
`ContentPostWorkflowDialog.tsx`, `ContentPostPreviewShell.tsx`, `storefront/contentStorefrontCopy.ts`),
route `app/(storefront)/news/[slug]/` (`page.tsx`, `not-found.tsx`), `shared/components/RichTextRenderer.tsx`, và các tài liệu
`to-do-list/content-cms-article-composer-owner-discussion-log.md` (DEC-AC-04…41), `workstreams/content-cms/SPEC.md` (CMS-08),
`to-do-list/storefront-news-v4-data-coverage.md`.

### 1. Mỗi phần của trang lấy dữ liệu từ đâu

| Phần trên trang | Dữ liệu (API `GET /api/v1/content/posts/{slug}`) | Ghi chú |
|---|---|---|
| Tiêu đề | `metadata.title`, tối đa 255 ký tự | Trên 100 ký tự thì hạ cỡ chữ (nút "Tiêu đề dài" để thử). Breadcrumb cắt bằng dấu "…". |
| Đoạn dẫn | `metadata.excerpt` | Form admin không đặt giới hạn ký tự. |
| Chip chuyên mục | `categoryName`; đúng một chuyên mục, bắt buộc từ lúc gửi duyệt | DTO công khai chưa có `categorySlug`: màu và liên kết chuyên mục phải suy ra từ tên. |
| Cờ "Nổi bật" | `featured` | Nhãn trong admin: "Ưu tiên tại các vị trí phù hợp". |
| Ngày đăng | `publishedAt` | Cùng kiểu ngày với trang danh sách. |
| Chủ đề (chân bài) | `tags[]`, tối đa 10 thẻ, mỗi thẻ 1–40 ký tự | Chip dẫn tới danh sách lọc theo `tag`. Thẻ 40 ký tự phải xuống dòng được. |
| Ảnh bìa | `cover` = `mediaId`, `alt`, `caption`, `credit`, `focalPoint` | Bắt buộc từ lúc gửi duyệt. Điểm lấy nét → `object-position`. Bộ dựng bài hiện tại chưa vẽ chú thích và nguồn ảnh của ảnh bìa. |
| "Đọc bản tiếng Anh" | `alternates[]` (`locale`, `slug`) | Chỉ hiện khi bài có bản ở ngôn ngữ kia. Không có bản thì trang 404, không dùng nội dung thay thế. |
| `<title>`, mô tả, hreflang | `seoTitle` rồi `title`; `seoDescription` rồi `excerpt`; canonical và `alternates` | Do `generateMetadata` của route lo, không hiện trên giao diện. |
| Thân bài | `blocks[]`, tám loại | Xem mục 2. |
| Mục lục "Trong bài này" | Suy ra từ tiêu đề cấp 2 trong khối Văn bản | Ẩn khi có dưới 3 mục. Không có API riêng. |
| Cột phụ "Bài viết nổi bật" | `GET /content/posts/featured` | Giống cột phụ của trang danh sách. |
| "Đọc tiếp" | `GET /content/posts` lọc cùng chuyên mục, bỏ bài đang đọc | Phải đối chiếu `categoryName` với `/categories` để có `categorySlug`. |

### 2. Tám loại khối nội dung

Bố cục: một cột đọc, chữ và ảnh cùng độ rộng, không đổi giữa các khối (DEC-AC-03). Mọi khối đáp ứng theo độ rộng của khung bài
(container query), không theo độ rộng màn hình, vì trang quản trị xem trước cùng bộ dựng bài trong khung 1152, 768 và 390px.

| Khối | Biên tập nhập | Quy tắc | Cách trình bày trong bản mẫu |
|---|---|---|---|
| Văn bản `text` | Đoạn, tiêu đề cấp 2 và 3, danh sách số và chấm; đậm, nghiêng, gạch chân; liên kết; màu chữ; căn lề | Liên kết chỉ nhận `http` hoặc `https`. Tiêu đề không có căn đều hai bên. Màu: năm màu có tên hoặc mã hex tự chọn. | Chữ 17px, dòng 1,85. Năm màu có tên đổi sang bảng màu mới (đỏ rượu, vàng chữ, xanh navy, xanh lá), đều ≥ 4,5:1. |
| Hình ảnh `image` | Ảnh, mô tả, chú thích, nguồn ảnh, điểm lấy nét | JPEG, PNG hoặc WebP, tối đa 5 MiB. API không trả kích thước ảnh. | Khung 3:2 cố định, crop lấp đầy theo điểm lấy nét. Chú thích giữa, dòng "Nguồn ảnh: …" bên dưới. |
| Thư viện ảnh `gallery` | 2–12 ảnh có thứ tự | Mosaic tối đa 5 ô (DEC-AC-23): 2 ảnh = hai ô bằng nhau; 3 = một ô lớn và hai ô nhỏ xếp dọc; 4 = lưới 2×2; từ 5 = một ô lớn và bốn ô nhỏ. 6–12 ảnh: ô thứ 5 có "+N" (N = số ảnh còn lại). | Có đủ các cỡ (nút "Số ảnh thư viện"). "+N" là nhãn trắng đặc, không làm tối ảnh. Bấm mở khung xem ảnh (DEC-AC-24): ảnh trước và sau, bộ đếm, chú thích và nguồn ảnh, tải ảnh, phóng to và kéo ảnh, phím mũi tên, Esc, +, −, 0, vuốt ngang, trả tiêu điểm về ô đã bấm. |
| Ảnh kèm nội dung `image_text` | Ảnh (trái hoặc phải) và phần chữ có cấu trúc | Phần chữ dùng cùng bộ định dạng như khối Văn bản. | Có cả hai bên. Khung hẹp thì xếp dọc, ảnh trước chữ. |
| Video `video` | Tệp MP4, tiêu đề, chú thích | Tối đa 100 MiB, tải lên hệ thống. Không YouTube, Vimeo, iframe. Tiêu đề bắt buộc từ lúc gửi duyệt. Có nút điều khiển, không tự phát. | Tiêu đề (h2) trên, khung 16:9, chú thích giữa bên dưới. Hợp đồng có `posterMediaId` nhưng form admin chưa có ô chọn, nên dùng khung hình đầu của video. |
| Trích dẫn `quote` | Nội dung, tên nguồn, thông tin nguồn | Chân trích nối "tên nguồn — thông tin nguồn". | Chữ serif nghiêng, vạch vàng bên trái. |
| Điểm nhấn `highlight` | Tiêu đề tùy chọn, 1–6 ý ngắn | Bộ dựng bài tự chọn biểu tượng, màu, nền; biên tập không chọn màu từng ý (DEC-AC-19). | Tấm kem có vạch vàng, mỗi ý một dấu tích navy. |
| Nội dung liên quan `related_content` | Một loại duy nhất (bài viết hoặc sản phẩm), 1–4 mục, tiêu đề tùy chọn | Mục không còn đủ điều kiện công khai thì bị bỏ. Không còn mục nào thì không vẽ khối (DEC-AC-20, 41). Mặc định gọi là "Nội dung liên quan". | Hai khối mẫu: một khối bài viết có tiêu đề riêng (2 mục), một khối sản phẩm dùng tiêu đề mặc định (3 mục). Bài viết dẫn tới `/news/{slug}`, sản phẩm tới `/product_detail/{skuCode}`. |

### 3. Giới hạn mà trang quản trị cho phép (bản mẫu đã thử)

Tiêu đề, đường dẫn và ba ô tìm kiếm tối đa 255 ký tự; tối đa 10 thẻ, mỗi thẻ 40 ký tự; điểm lấy nét 0–1; thư viện 2–12 ảnh;
điểm nhấn 1–6 ý; nội dung liên quan 1–4 mục. Trang quản trị cảnh báo khi màu chữ tự chọn có tương phản dưới 4,5:1 trên nền bài.

### 4. Phần chưa có dữ liệu hoặc chưa được chủ dự án duyệt

- **Tác giả:** admin có `authorDisplayName` và DEC-AC-04 liệt kê tác giả trong thông tin bài, nhưng API công khai không trả. Bản mẫu chưa hiện; cần chủ dự án quyết và thêm API.
- **Thời gian đọc, lượt đọc, bình luận:** không có nguồn dữ liệu, không đưa vào bản mẫu.
- **Bài trước và bài sau:** không có API, đã bỏ khỏi bản mẫu so với lượt trước.
- **Nút Facebook và Zalo:** đã bỏ. DEC-AC-24 ghi người đọc chia sẻ địa chỉ bài bằng chức năng của trình duyệt. Bản mẫu chỉ có một nút "Chia sẻ": dùng chia sẻ của trình duyệt khi có, nếu không thì chép liên kết.
- **Thẻ sản phẩm cố định ở cột phụ:** đã bỏ, vì sản phẩm chỉ xuất hiện qua khối "Nội dung liên quan" loại sản phẩm.
- **Ảnh hoặc video chưa sẵn sàng:** đường công khai chỉ phát tệp đã quét `CLEAN`, nên luôn có thể có ảnh chưa hiện được. Đã có khung báo thay thế (nút "Ảnh, video chưa sẵn sàng").
- **"Đọc bản tiếng Anh", "Trong bài này", "Đọc tiếp":** do thiết kế đề xuất từ dữ liệu có sẵn, chờ chủ dự án duyệt.

### 5. Việc cần làm khi port sang React (chưa làm trong lượt này)

1. Một bộ dựng bài dùng chung cho storefront và xem trước admin (DEC-AC-08, DEC-AC-31). CSS gắn vào một lớp bọc riêng, đáp ứng bằng container query như bản mẫu.
2. Đồng bộ `CONTENT_ARTICLE_BACKGROUND_COLOR` (đang `#FFFDF8`) với nền bài mới `#FBF8F1`. Màu có tên `ACCENT_GOLD` đang là `#FFD15A` (1,36:1 trên nền kem, gần như vô hình), nên đổi sang `--gf-gold-text` `#7B5614` (6,2:1).
3. Thêm mosaic và khung xem ảnh vào bộ dựng bài (hiện chỉ là lưới 2 cột). Nút tải ảnh cần liên kết tải an toàn do backend cấp (DEC-AC-35).
4. Vẽ chú thích và nguồn ảnh của ảnh bìa; dùng `focalPoint` cho `object-position` của ảnh.
5. Trang 404 (`not-found.tsx`) và trạng thái lỗi dùng giao diện mới, giữ nguyên chữ hiện có.
6. Thêm `categorySlug` vào DTO công khai (đề xuất đã ghi trong `storefront-news-v4-data-coverage.md`).
7. Theo quy trình dự án: lập Phase Requirement Review (Gate 0) và chờ chủ dự án duyệt trước khi tạo task.

### 6. Cách xem các tình huống

Thanh "Bản mẫu" trên đầu trang có bốn trạng thái (bài viết, đang tải, lỗi tải, không tìm thấy) và hàng "Thử độ bền":
tiêu đề dài, ảnh và video chưa sẵn sàng, chưa có nội dung ở ngôn ngữ này, khung đọc như xem trước trong admin (1152, 768, 390px),
số ảnh thư viện (2, 3, 4, 5, 7, 12). Cũng mở được bằng địa chỉ:
`?trang-thai=dang-tai|loi|khong-tim-thay`, `?tieu-de=dai`, `?anh=loi`, `?trong=1`, `?khung=1152|768|390`, `?so-anh=2…12`.

## Đồng bộ UI với storefront (13/10/2026)

Chủ dự án yêu cầu: **đồng bộ giao diện của bản thiết kế cho giống trang web chính (storefront), không làm logic.**
Nguồn chuẩn là storefront `/vi` đang chạy ở cả hai trạng thái **khách** và **đã đăng nhập**; mã React không bị sửa. Cả 26 file đã được
rà và đồng bộ phần giao diện (HTML, CSS, chữ hiển thị, thứ tự khối); dữ liệu mẫu của bản thiết kế (sản phẩm, giá, đơn, số mẫu…) giữ nguyên.

### Đã đồng bộ ở mọi file

- **Lớp vỏ** (agent riêng, khối đánh dấu `gf-shell:header|footer|float|css`): header đầy đủ hoặc gọn theo từng route, đổi ngôn ngữ, ô tìm kiếm,
  giỏ, nút Đăng ký của khách / menu tài khoản, menu mobile, footer navy 5 cột, nút lên đầu trang, khung chat tư vấn (CSS thuần). Bỏ "Mua ngay" và
  mục "Sản phẩm / Doanh nghiệp" ở header cũ.
- **Phông biểu tượng:** nhiều trang chuyển sang Material Symbols như storefront, nạp từ `../public/fonts/material-symbols/` (tham chiếu, không sao chép tệp).
- **Chỉ banner đầu trang chiếm trọn một khung hình** và có nút "Cuộn xuống"; các mục bên dưới trang chủ cao theo nội dung, không có nút cuộn xuống.
- **Thanh liên hệ nhanh của trang chủ** (Livestream, YouTube, Facebook, Zalo, Chat, Điện thoại), khối `gf-contact-rail:*` ở 7 file trang chủ:
  máy tính mở sẵn ở mép phải, ≤ 1024px thu gọn ở góc trái dưới; nút đóng/mở dùng ô chọn ẩn (không JS).

### Theo nhóm trang

| Nhóm | File | Điểm chính |
|---|---|---|
| Trang chủ | `trang-chu*.html` (7 file) | Thanh "Chủ đề:", thanh "Nhóm sản phẩm" (đáy khu Sản phẩm, dính khi cuộn, mỗi nhãn một màu), hero mới ("-5% trên tổng đơn hàng"), khu Sản phẩm có dòng kicker, card Giờ Vàng mới (tiêu đề + "-38% đến -42%" một hàng, ba dòng có icon, nút theo trạng thái, không còn dòng "Phiên hiện tại"), khu quyền lợi, khối CTV/đại lý. Hội viên: chip "Hạng của bạn", thẻ Giờ Vàng thu nhỏ, dòng "Hạng thành viên … vào sớm giờ vàng N phút". Trang link giới thiệu: khối "mua qua link" đã gỡ như storefront. |
| Sản phẩm | `chi-tiet-san-pham.html`, `chi-tiet-san-pham-silver.html`, `nhom-san-pham.html` | Khối mua hàng, thành phần, Giờ Vàng, nhóm sản phẩm (3 nhóm đang bán, dải trượt, bỏ "So sánh" và 4 nhóm "sắp ra mắt"), giá hội viên "áp dụng ở bước thanh toán". |
| Mua hàng | `gio-hang`, `thanh-toan`, `ket-qua-thanh-toan`, `chi-tiet-don-hang-khach`, `chi-tiet-don-hang-thanh-vien`, `tra-cuu-don-hang` | Tiền dạng `843.120 ₫`, khối giỏ/tóm tắt, thanh toán khách (không cần đăng nhập, mã giới thiệu), huy hiệu trạng thái, thêm trạng thái "Đã huỷ" cho đơn thành viên. |
| Tài khoản | `tai-khoan`, `dang-nhap`, `dang-ky`, `dang-xuat` | CSS chép từ storefront, hồ sơ/địa chỉ/đơn/hạng/mật khẩu/thông báo, form đăng ký theo storefront. |
| Nội dung | `tin-tuc`, `ve-chung-toi`, `dai-ly-nha-phan-phoi` | Khung 1280px, phông Manrope ở `/news` và `/about` như storefront, trang Về chúng tôi dựng lại theo bản mới, thẻ CTV ở trang đại lý. |
| Cộng tác viên | `trung-tam-cong-tac-vien`, `dieu-khoan-cong-tac-vien` | CSS và cấu trúc theo storefront; thêm xem trước các chế độ bằng tham số `?che-do=` (tạm ngưng, cần đồng ý lại, đã chấm dứt, khách, PDF). |

### Cố ý không đồng bộ

- `chi-tiet-tin-tuc.html`: storefront vẫn dùng giao diện cũ (đỏ rượu), còn bản thiết kế navy + kem là bản chủ dự án đã duyệt, chờ port (Gate 0 CMS-13). Giữ nguyên, trừ card Giờ Vàng đã đồng bộ với trang chủ ngày 14/10/2026 (xem mục "đợt chín").
- `tra-cuu-don-hang.html`: bản thiết kế tra cứu bằng mã đơn + số điện thoại; storefront dùng số điện thoại → mã OTP → danh sách đơn. Muốn khớp phải đổi biểu mẫu và script, nên chưa làm (chờ chủ dự án quyết).
- Hiệu ứng cần JS thật (hiện dần khi cuộn, thanh biểu đồ chạy tăng, tìm kiếm có kết quả sống, hộp thoại OTP), trạng thái đang tải/lỗi chỉ có ở storefront, dữ liệu động.
- Cụm hỗ trợ cũ (`.support`: Zalo, Messenger, TikTok…) được ẩn bằng `hidden`, DOM và script cũ giữ nguyên.

### Chạm vào `<script>` (cần chủ dự án xem lại, vì yêu cầu là không làm logic)

Số dòng script thay đổi so với bản trước đợt đồng bộ (`+thêm / −bớt`). Phần lớn chỉ đổi cách hiển thị; các mục đáng chú ý ghi riêng.

| File | Thay đổi | Ghi chú đáng chú ý |
|---|---|---|
| `tra-cuu-don-hang`, `dang-xuat`, `chi-tiet-tin-tuc`, `dai-ly-nha-phan-phoi` | 0 | Không đổi script. |
| `tin-tuc` | +1 / −1 | Một chuỗi chữ khi không có kết quả. |
| 7 file `trang-chu*` | +73 / −8 mỗi file | Null-guard cho phần tử đã bỏ, trừ chiều cao thanh nhóm khi cuộn tới mục, và một khối script mới cho thanh "Nhóm sản phẩm" (dính, mở bảng ở mobile, tô nhóm đang xem). |
| `thanh-toan`, `dang-nhap`, `ket-qua-thanh-toan`, `tai-khoan`, `dieu-khoan-cong-tac-vien` | 3 đến 16 dòng | Chữ, class icon, định dạng tiền, đọc `?che-do=`. |
| `chi-tiet-don-hang-khach`, `chi-tiet-don-hang-thanh-vien`, `gio-hang` | khoảng 30 dòng | Mẫu dựng dòng hiển thị; đơn thành viên thêm trạng thái "Đã huỷ" và thanh bước ít hơn 5 bước. |
| `chi-tiet-san-pham`, `chi-tiet-san-pham-silver` | khoảng +10 / −30 | **Gỡ các nút "Nhắc tôi / Đã đặt nhắc" của Giờ Vàng; giá Silver không còn tính sẵn khấu trừ** (đổi theo storefront). |
| `dang-ky` | +32 / −27 | **Đổi bộ ô nhập và quy tắc kiểm tra mẫu** (họ tên, email hoặc SĐT, mật khẩu ≥ 8, nhập lại) cho khớp form storefront. |
| `ve-chung-toi` | +46 / −0 | **Thêm script mới**: chồng ảnh tự chuyển, mũi tên, tab biểu đồ (phục vụ giao diện; xoá khối này thì trang vẫn đúng ở trạng thái đầu). |
| `trung-tam-cong-tac-vien` | +50 / −38 | **Bỏ nhánh "link cửa hàng" trong khối tạo link, QR đổi sang SVG, dựng lại bảng đơn, đọc `?che-do=`.** |
| `nhom-san-pham` | +120 / −27 | **Gỡ thanh "So sánh"**, thêm bản sao hàm dải trượt và điều khiển dải nhãn. |

### Kiểm tra đã chạy

- Mở cả 26 file bằng Chromium ở 1440 và 390px: **0 lỗi JavaScript, 0 tràn ngang** (52/52), không id trùng, liên kết nội bộ và neo đều còn.
- Ảnh chụp đối chiếu với storefront (dữ liệu giả, không phải backend thật) cho từng nhóm; mỗi agent bấm thử các điều khiển chính của bản mẫu.
- Chưa phải bằng chứng tích hợp backend thật. Chưa kiểm trên nhiều trình duyệt khác ngoài Chromium.

### Lệch còn lại, biết trước

- Phông: storefront tự host Inter, bản thiết kế nạp Inter từ Google Fonts nên vài dòng chữ có thể xuống dòng khác chỗ ở cỡ sát giới hạn.
- Số mẫu của bản thiết kế khác dữ liệu mock của storefront (số sản phẩm Giờ Vàng, số nhóm sản phẩm, tên hội viên, số giỏ…) là có chủ ý.
- Nút lên đầu trang CSS thuần dùng `animation-timeline: scroll()` (Chromium, Safari 26+); Firefox có thể không hiện nút ở trang không có script cũ.

## Đồng bộ bổ sung trang chủ (14/10/2026)

Sau đợt 13/10, storefront `/vi` thay đổi thêm ở khu quyền lợi, khối CTV, ba khu mới và card Giờ Vàng. Bản thiết kế được đồng bộ lại **chỉ phần giao diện** ở
7 file `trang-chu-theo-doi-tuong/trang-chu*.html` (khách: `trang-chu`, `trang-chu-link-gioi-thieu`; hội viên: `silver-v2`, `gold-v2`, `platinum-v2`, `diamond-v2`, `cong-tac-vien`).
Mã React không bị sửa; số liệu mẫu của bản thiết kế giữ nguyên.

### Đã đồng bộ

| Khu | Thay đổi |
|---|---|
| Card Giờ Vàng | Dựng lại theo khuôn card bán hàng của các nhóm sản phẩm: ảnh 4:3 kèm nhãn "−38%", tên, câu mô tả, khối giá (niêm yết gạch, "Giá Giờ Vàng" màu rượu vang), số suất, "Vì sao tôi có giá này?", **chỉ một nút "Mua ngay"** (khoá tới giờ vàng, kèm câu "Nút Mua ngay mở khi đến giờ vàng."). Bỏ nút "Giữ chỗ" và chip "Sắp mở" trên card. Câu mô tả lấy từ chính card cùng sản phẩm ở các nhóm bên dưới. |
| Quyền lợi (hội viên) | Câu mô tả mới "Quyền lợi của bạn đang được **-N% trên tổng đơn hàng** và được tham gia chương trình giờ vàng sớm **M phút** so với khách hàng mới. Chu kỳ hiện tại kết thúc ngày …"; bỏ khối nhận diện (Hạng hiện tại, được công nhận từ…, quyền lợi, mua sớm, trạng thái); dòng hành trình đậm hơn; thẻ hạng chỉ còn các hạng phía trước (Silver 3 thẻ, Gold 2, Platinum 1, Diamond không còn thẻ nào, CTV theo Gold); bỏ khung "Chu kỳ thành viên là 12 tháng…" và vệt màu tiến độ trên đường ray. Khách giữ nguyên bốn hạng. |
| Khối CTV | Tiêu đề "Chương trình đối tác khởi nghiệp làm giàu cùng Ssavigroup" ở mọi trạng thái; câu mời "Đăng ký để trở thành đối tác giới thiệu thương hiệu Ginsengfood; tăng thu nhập và tự chủ tài chính." (file CTV giữ câu hướng dẫn riêng). Mép phải nút "Đăng ký cộng tác viên" thẳng hàng với nút "Tìm hiểu hợp tác" (đo ở 1440, 1280, 1024, 768, 390px: lệch 0px). |
| Nguồn gốc → Được tin dùng | Bỏ đường kẻ ngăn phía trên dải "Được tin dùng ở nhiều quốc gia" (thay bằng khoảng trống 64px). |
| **Mới:** Đối tác nghiên cứu | Sáu thẻ dọc (logo trên, tên dưới) giữa dải quốc kỳ và khu Về chúng tôi; logo dùng chung `../../public/partners/`; 6 → 3 → 2 cột theo khổ rộng. |
| Về chúng tôi | Thẻ 1 thành "Tập đoàn SSAVIGROUP / Doanh nghiệp khoa học công nghệ Việt Nam"; bốn liên kết thẻ trỏ `../ve-chung-toi.html` (trước đây trỏ `../../about-us.html`, không tồn tại). |
| **Mới:** Địa chỉ công ty | Thẻ địa chỉ trụ sở chính bên trái (4 phần), bản đồ **nhúng Google Maps** bên phải (6 phần, hình chữ nhật góc vuông 16:10; điện thoại xếp dọc, 4:3). |
| Bản đồ trang (cột vạch bên trái) | Thêm ba mục: Đối tác nghiên cứu, Về chúng tôi, Địa chỉ công ty. |

### Chạm vào `<script>` (cần chủ dự án xem lại, vì yêu cầu là không làm logic)

- **7 file:** trong `applyState` (đồng bộ trạng thái phiên Giờ Vàng), khối cũ cập nhật thanh số suất và chữ nút "Giữ chỗ / Nhắc tôi" được thay bằng 3 dòng: nút "Mua ngay" của card chỉ mở khi phiên đang diễn ra, câu giải thích ẩn khi đó. Chỉ minh hoạ giao diện, bấm không đi đâu.
- **7 file:** mảng `items` của bản đồ trang thêm 3 mục (dữ liệu hiển thị).
- **`trang-chu-diamond-v2.html`:** đoạn khởi tạo "Quyền lợi thành viên" không còn đòi có `#tierList` (Diamond không có thẻ hạng nào) mà gắn mốc `is-in` (chạy thanh tiến độ) thẳng vào khu `#quyen-loi`.

### Lưu ý khi xem

- Khung bản đồ là iframe của Google, **cần có mạng**; không có mạng thì khung trống, địa chỉ và hai nút chỉ đường vẫn dùng được. Bản nhúng chủ dự án cung cấp ở chế độ vệ tinh.
- Bản đồ trang vẫn giữ mục "Trang chủ" và nhãn riêng của bản thiết kế ("Hạng của bạn…"), khác nhãn storefront; chỉ ba mục mới được thêm cho khớp.
- Đã chạy Chromium ở 1440 và 390px cho cả 7 file (cộng 1280, 1024, 768, 360px cho 4 file đại diện): 0 lỗi JavaScript, 0 tràn ngang, không id trùng, nút "Mua ngay" khoá ngoài giờ vàng và mở trong giờ vàng (giả lập đồng hồ 10:00 và 20:30). Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Đồng bộ chân trang và cụm sáu nút nổi (14/10/2026, đợt hai)

Theo yêu cầu của chủ dự án, chân trang dùng chung (khối `gf-shell:footer`, **26 file**) và cụm sáu nút liên hệ nổi (khối `gf-contact-rail:*`, **7 file trang chủ**) được đồng bộ lại với storefront. Chỉ giao diện.

| Phần | Thay đổi |
|---|---|
| Cột chân trang | Bốn cột: **Chính sách** (7 mục chỉ là chữ: Chính sách bảo mật, Tuyên bố miễn trừ, Hình thức thanh toán, Chính sách vận chuyển, Chính sách mua hàng, Chính sách đổi trả, Các điều khoản), **Niềm tin** (giữ nguyên), **Thành viên và quyền lợi** (Thành viên Ginsengfood, Giờ Vàng Tri Ân, Khởi nghiệp cùng Ginsengfood → `dieu-khoan-cong-tac-vien.html`, Đại lý nhà phân phối → `dai-ly-nha-phan-phoi.html#hinh-thuc`), **Liên hệ** (ba logo YouTube, Facebook, Zalo thật, nền trắng, viền vàng 2px, chưa có link nên là thẻ `<span>` không bấm được). Bỏ cột Sản phẩm, "Tra cứu đơn hàng", "Đăng nhập" và cột "Nhận thông tin". Lưới cột chia lại như storefront. |
| Cột thương hiệu | "Tổng đài: 1900 xxxx" → "Điện thoại: 0888 098 686" (bấm gọi được). |
| Đáy chân trang | Bỏ hàng chip "Chứng nhận và kiểm soát", hàng bốn chính sách cũ và dòng bản quyền; thay bằng "CÔNG TY CỔ PHẦN TẬP ĐOÀN SSAVIGROUP" và "Số giấy phép kinh doanh: 1301015435 · Ngày cấp: 06/09/2016". **Ngày cấp mới là ngày tạm**, chưa đối chiếu giấy chứng nhận. |
| Sáu nút nổi | YouTube, Facebook, Zalo dùng logo thật (SVG, màu chính thức) thay cho "f", "Za" và biểu tượng play. Ba nút này giữ nền kem khi rê chuột, focus hay bấm (chỉ đổi viền vàng); ba nút còn lại vẫn đổi navy. |

Liên kết của chân trang tự điều chỉnh theo vị trí từng file (trang chủ dùng neo `#quyen-loi`, `#gio-vang`…, trang khác trỏ về `trang-chu.html` hoặc biến thể tương ứng); đã kiểm mọi liên kết `.html` đều trỏ tới tệp có thật.

**Chạm vào `<script>` (cần chủ dự án xem lại):** ở 13 file có đoạn đăng ký nhận tin (`chi-tiet-san-pham`, `chi-tiet-san-pham-silver`, `nhom-san-pham`, `tra-cuu-don-hang`, `ve-chung-toi`, `gio-hang` và 7 file trang chủ), dòng gắn sự kiện cho biểu mẫu nhận tin được thêm điều kiện `if (…)` vì biểu mẫu đã gỡ khỏi chân trang; không thêm thì lỗi JS làm dừng các đoạn script phía sau.

Đã mở cả 26 file bằng Chromium ở 1440 và 390px: 0 lỗi JavaScript, 0 tràn ngang, bốn cột đúng thứ tự và độ rộng khớp storefront; bảy file trang chủ có đủ sáu nút với ba logo SVG.

### Đồng bộ chữ gợi ý ô tìm kiếm và căn giữa thông tin pháp nhân (14/10/2026, đợt ba)

Theo yêu cầu của chủ dự án, hai thay đổi nhỏ của storefront được đồng bộ tiếp. Chỉ giao diện, không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Chữ gợi ý ô tìm kiếm trên header | "Tìm sản phẩm nhân sâm, quà tặng, Giờ Vàng" → "Tìm kiếm sản phẩm..." ở **16 file** có ô tìm kiếm header (`#searchPanelInput`). Ô "Nhập tên sản phẩm" của `trung-tam-cong-tac-vien.html` là ô chọn sản phẩm của CTV, không phải ô tìm kiếm header nên giữ nguyên. Hiệu ứng chạy chữ khi rê chuột đã thử rồi bỏ ở storefront, không có ở ui-pages. |
| Thông tin pháp nhân ở đáy chân trang | Tên công ty và dòng số giấy phép · ngày cấp căn giữa (thêm `align-items: center` và `text-align: center` vào `.gf-site-footer .home-footer__legal` trong `gf-shell-css`), **26 file**. |

Đã mở cả 26 file bằng Chromium ở 1440 và 390px: 0 lỗi JavaScript, 0 tràn ngang, hai dòng pháp nhân cách tâm khung chân trang dưới 1px (dòng số giấy phép xuống hai dòng ở 390px vẫn nằm giữa), chữ gợi ý đúng ở cả 16 file.

### Đồng bộ căn giữa hai thanh và nhãn card Giờ Vàng (14/10/2026, đợt bốn)

Theo yêu cầu của chủ dự án, nốt hai mục còn lệch với storefront. Chỉ giao diện; chạm `<script>` một chỗ nhỏ (xem dưới).

| Phần | Thay đổi |
|---|---|
| Thanh "Chủ đề" (`.catbar`) và thanh "Nhóm sản phẩm" (`.groupbar`), **7 file trang chủ** | Từ 768px nhãn đầu thanh và dãy badge căn giữa theo chiều ngang (khối `@media (min-width: 768px)` đặt trước phần "Khu SẢN PHẨM"): dãy badge không còn giãn hết thanh, hàng xuống dòng cũng căn giữa, nhãn bỏ phần lùi 24px. Dưới 768px giữ nguyên nút gập. Khi dãy badge xuống dòng thì nhãn nằm bên trái và các hàng badge căn giữa trong phần còn lại, giống storefront. `nhom-san-pham.html` và hai trang chi tiết sản phẩm có `.catbar` riêng, không thuộc thanh đã sửa ở storefront nên giữ nguyên. |
| Nhãn đồng hồ card Giờ Vàng | Khi phiên đang diễn ra: "Kết thúc sau" → "Thời gian đếm ngược" (chữ in hoa nhờ CSS sẵn có). "Mở phiên sau" giữ nguyên. Ở **8 file** có card Giờ Vàng kiểu trang chủ (7 file trang chủ và `chi-tiet-tin-tuc.html`). Hai trang chi tiết sản phẩm giữ "Kết thúc sau" vì storefront cũng giữ nguyên ở trang đó. |

**Chạm vào `<script>` (cần chủ dự án xem lại):** ở 8 file nói trên, hàm `sessionInfo` trả thêm trường `srLabel: 'Kết thúc sau'` cho phiên đang diễn ra, và câu thông báo cho trình đọc màn hình (`#countdownLive`) đọc `srLabel` nếu có, nhờ vậy người dùng trình đọc vẫn nghe "Kết thúc sau …" như ở storefront.

Đã mở bằng Chromium: 7 file trang chủ ở 1440, 1280, 1024, 768 và 390px (cả lúc thanh Nhóm sản phẩm chưa gắn và đã gắn dưới thanh Chủ đề): 0 lỗi JavaScript, 0 tràn ngang, cụm nhãn + badge cách đều hai bên thanh, mỗi hàng badge nằm giữa dãy; 8 file có card Giờ Vàng ở 1440 và 390px với đồng hồ giả lập trong phiên (12:30) và ngoài phiên (10:00): nhãn hiện đúng, câu đọc màn hình đúng, nhãn không tràn khung.

### Nút "Trở thành thành viên Ginsengfood ngay hôm nay" nền vàng và sửa lỗi nhãn đồng hồ (14/10/2026, đợt năm)

Theo yêu cầu của chủ dự án (chọn phương án nền vàng, chữ đỏ rượu vang). Chỉ giao diện, không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Nút mời trở thành thành viên trong card Giờ Vàng (`.golden__btn--member`) | Nền vàng `#F8E3A0 → #E8C979 → #D2A43C` (cùng dải màu chữ "-38% đến -42%"), chữ đỏ rượu vang `#6E110C`, viền và quầng kem; rê chuột sáng hơn, chữ `#5A0D09`; viền focus trắng 3px (viền focus chung của trang là quầng xanh 28% không thấy được trên nền đỏ và vàng, lại ép góc về vuông). Đo từ ảnh: nền nút / nền card 5,2:1, chữ / nền nút 7,7:1. CSS có ở **7 file trang chủ**; nút chỉ có trong HTML ở bản dành cho khách (`trang-chu.html`, `trang-chu-link-gioi-thieu.html`), năm bản hội viên dùng nút "Gửi thông báo cho tôi" và **giữ kiểu tối** để còn trông như đang khoá. |
| **Sửa lỗi của đợt bốn:** nhãn đồng hồ | Nhãn "Thời gian đếm ngược" dài hơn "Kết thúc sau" nên khi phiên đang diễn ra, từ 1024 tới 1279px cột đồng hồ phình ra 38px và nút "Gửi thông báo cho tôi" tràn 14px sang ô đồng hồ (đợt bốn chỉ kiểm nhãn không tràn khung nên bỏ sót). Nay nhãn lấy đúng bề rộng cột (`width: 0; min-width: 100%`), hai vạch hai bên nhãn tự co (7px ở 1024px, 23px từ 1280px). Sửa ở **8 file** đã đổi nhãn. |

Đã mở bằng Chromium: 8 file ở 12 khổ màn từ 360 tới 1440px với đồng hồ giả lập trong phiên: 0 lỗi JavaScript, 0 tràn ngang, nút nằm gọn trong cột nút, chữ nằm trong nhãn; nút vàng ở các tệp có nút: màu, rê chuột, focus và độ tương phản đúng.

### Cụm 6 nút nổi có ở mọi trang (14/10/2026, đợt sáu)

Theo yêu cầu của chủ dự án ("cụm 6 nút lúc nào cũng có ở tất cả các trang"): trước đây chỉ 7 trang chủ có cụm nút; nay **cả 26 file**. Chỉ giao diện, không đụng `<script>` (cụm nút là CSS thuần, nút đóng/mở dùng ô tích ẩn).

| Phần | Thay đổi |
|---|---|
| 19 file còn thiếu | Chép khối CSS (`gf-contact-rail:css`) và HTML (`gf-contact-rail`) từ `trang-chu.html`. Các neo (Livestream, YouTube, Facebook, Zalo, Chat, Điện thoại) đổi thành đường dẫn tương đối về trang chủ, lấy theo chính liên kết "Nguồn gốc" ở chân trang của từng file (bản hội viên trỏ `trang-chu-silver-v2.html`). |
| Dạng gọn ở 19 trang đó, từ 1025px tới 1415px | Nội dung còn chạm sát mép phải (nút giỏ, ô tìm kiếm, nút "Áp dụng"…) nên cụm nút dùng dạng gọn như điện thoại: vòng tròn ở góc trái dưới, bấm để mở. Từ 1416px mới ở mép phải dạng đầy đủ. Bảy trang chủ giữ dạng đầy đủ từ 1025px (chừa chỗ riêng từng khối). Đúng như storefront. |
| Điện thoại có thanh dính đáy | `body:has(.sticky-bar:not([hidden]))` nâng cụm nút 94px lên trên thanh (chi tiết sản phẩm, giỏ hàng, nhóm sản phẩm). Có ở cả 26 file. |

Đã mở bằng Chromium: 26 file ở 1440, 1366, 1280, 1024 và 390px: 0 lỗi JavaScript, 0 tràn ngang, đủ 6 nút, `id` không trùng, vị trí và kích thước đúng quy tắc trên.

### Đồng bộ trang chi tiết sản phẩm và giỏ hàng (14/10/2026, đợt bảy)

Theo yêu cầu của chủ dự án ("rà soát và đồng bộ vào các trang ui-pages"). Ngày 14/10 storefront đổi hai chỗ: trang chi tiết sản phẩm có **thêm hai thanh dưới header** như trang chủ, và trang chi tiết sản phẩm cùng giỏ hàng **dùng lại các khu của trang chủ** (một nguồn) thay cho bản dựng riêng. Bản thiết kế được đồng bộ lại **chỉ phần giao diện** ở 3 file: `chi-tiet-san-pham.html` (khách), `chi-tiet-san-pham-silver.html` (hội viên Silver) và `gio-hang.html`. Nguồn chép là bản mẫu trang chủ tương ứng (`trang-chu.html` cho khách và giỏ hàng, `trang-chu-silver-v2.html` cho Silver); số liệu mẫu của bản thiết kế (món, giá, số suất, tên nhóm…) giữ nguyên.

| Khu | Thay đổi |
|---|---|
| Thanh "Chủ đề" và thanh "Nhóm sản phẩm" (2 trang chi tiết) | Dưới header có thêm thanh "Chủ đề:" (sáu badge dẫn tới `tin-tuc.html?categorySlug=…`) như trang chủ, rồi thanh "Nhóm sản phẩm:" dính ngay dưới nó, thay `.catbar` cũ (căn trái, badge trắng). Ruột hai thanh giống trang chủ: nhãn đầu thanh, badge mỗi nhóm một màu theo thứ tự (`data-hue`), căn giữa từ 768px, điện thoại thu thành nút "Chủ đề: Chọn chủ đề" / "Nhóm sản phẩm: <nhóm đang xem>". Thanh nhóm luôn ở dạng đã gắn của thanh nhóm trang chủ (khối `.groupbar--sticky`). Mọi neo trong trang (hộp mua, thông tin, cách dùng, thành phần, quyền lợi, Giờ Vàng, nhóm, từng khu nhóm) đậu dưới cả ba phần dính (header và hai thanh) cộng 14–16px, đúng như storefront. |
| Quyền lợi thành viên (2 trang chi tiết và giỏ hàng) | Thay bằng khu của trang chủ: tiêu đề, bốn thẻ hạng (Silver: thẻ hành trình lên Gold và ba thẻ phía trước), lời mời tham gia, khung "Chương trình đối tác khởi nghiệp làm giàu cùng Ssavigroup" và khung "Trở thành đại lý, nhà phân phối cùng Ssavigroup". Giỏ hàng bỏ thẻ hạng riêng, khung Cộng tác viên cũ và nút cuộn xuống. Ở trang chi tiết khu lấy nền của trang (kem) và bỏ đường kẻ dưới (đường kẻ đó là đường phân cách đứng trước khu Giờ Vàng), cách phần Thành phần 24px như storefront. |
| Giờ Vàng Tri Ân (2 trang chi tiết) | Thay bằng khu của trang chủ: tiêu đề "Giờ Vàng Tri Ân -38% đến -42%" có sóng sáng chạy chữ (chỉ chép phần CSS của `home-motion.css`, **không** nạp `home-motion.js`), ba dòng có icon, đồng hồ ("Mở phiên sau", trong phiên là "Thời gian đếm ngược"), nút mời trở thành thành viên (khách) hoặc "Gửi thông báo cho tôi · Sắp mở" (Silver), card sản phẩm có khối giá, "Vì sao tôi có giá này?" và **một nút "Mua ngay"** (khoá tới giờ vàng, kèm câu giải thích). Popup Giờ Vàng nhỏ cạnh badge (`#gio-vang`) giữ nguyên; mã phần tử của khu lớn vẫn mang tiền tố `gv…`. |
| Card nhóm sản phẩm (2 trang chi tiết) | CSS dải card nhóm là của trang chủ; **mô tả nhóm hiện cả ở điện thoại** (trước đây ẩn). Nội dung mẫu giữ nguyên. |
| Thẻ sản phẩm trong ba nhóm (2 trang chi tiết) | CSS thẻ là của trang chủ (dòng giá, "Vì sao tôi có giá này?", nút). Dòng giá hội viên "Thành viên Silver chỉ trả …", bảng cấu thành giá và nút giỏ lấy theo thẻ cùng SKU của trang chủ. Luật giá và nút giỏ chỉ áp trong `.card`, `.gh-card` và `.collection__nav` nên hộp mua hàng không bị đụng. |

Cách làm: ở mỗi file, các luật CSS cũ cùng họ (`catbar`, `groupbar`, `tiers`/`tier`/`mycard`/`collab`/`home-partner`, `golden`/`gh-card`/`fb-arrow`, `card`/`eco`/`collection`) được gỡ và thay bằng khối đánh dấu "ĐỒNG BỘ VỚI STOREFRONT (14/10/2026)" ở cuối khối `<style>` chính, chép từ bản mẫu trang chủ; phần riêng của trang chi tiết (nền kem của khu Quyền lợi, bóng đổ thanh nhóm, khoảng chừa neo) nằm cuối khối đó. Biểu tượng vương miện và cửa hàng được chép thêm vào bộ biểu tượng (`i-crown`, `i-store`).

**Chạm vào `<script>` (cần chủ dự án xem lại, vì yêu cầu là không làm logic):**

- `chi-tiet-san-pham.html` và `chi-tiet-san-pham-silver.html`, mỗi file +46 / −42 dòng: (1) khối theo dõi dải nhãn nhóm cũ (`#catNav`) thay bằng khối mới: mở/đóng bảng nhãn ở điện thoại cho hai thanh, đo chiều cao ghi vào `--catbar-h` và `--groupbar-h`, tô badge của nhóm đang xem (cùng cách với trang chủ); (2) trong `applyState` của khối Giờ Vàng, nút "Mua ngay" và câu giải thích của card thay cho dòng đổi chữ nút "Xem phiên ưu đãi", và nhãn đồng hồ của khu lớn là "Thời gian đếm ngược" khi phiên đang diễn ra (câu đọc màn hình vẫn nói "Kết thúc sau").
- `gio-hang.html`: không đổi script (đoạn khởi tạo khu Quyền lợi dùng chung mã phần tử `tierList`).

**Chưa đồng bộ:** `nhom-san-pham.html` (trang nhóm sản phẩm; storefront đã bỏ trang `/products` nên không còn trang tương ứng) vẫn giữ `.catbar` riêng; các khu cuối giỏ hàng (dải nhóm, "Khám phá sản phẩm") là phần riêng của giỏ và không đổi.

**Đã kiểm:** so kiểu tính ra từng phần tử bằng Chromium (1440, 1024, 390px) với khu tương ứng của bản mẫu trang chủ: Giờ Vàng 394 (khách) và 402 (Silver) phần tử, Quyền lợi 128 và 113 phần tử, thẻ nhóm và thẻ sản phẩm 40 phần tử mỗi thẻ: không còn khác biệt nào ngoài nền kem và đường kẻ dưới của khu Quyền lợi ở trang chi tiết (chủ ý). Giỏ hàng: Quyền lợi khớp bản trang chủ, trừ màu chữ do bộ màu riêng của giỏ. Không đổi gì ở hộp mua hàng, popup Giờ Vàng, thanh mua dính, các khối Thông tin / Cách dùng / Thành phần, chân trang và header (0 khác biệt trên 164 và 176 phần tử hộp mua). Hành vi: hai thanh dính nối liền khi cuộn, badge nhóm đang xem, bảng nhãn mở/đóng và Esc ở 390px, nhóm đậu dưới hai thanh, nút "Mua ngay" khoá lúc 10:00 và mở lúc 12:30 (giả lập đồng hồ), không lỗi JavaScript, không tràn ngang ở 1440, 1024, 768, 390 và 360px, không mã phần tử trùng, mọi liên kết và ảnh cục bộ còn đủ. Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Banner khách chỉ còn phần chữ: bỏ bốn card hạng và nút đăng ký (14/10/2026, đợt tám)

Theo yêu cầu của chủ dự án: ở trang chủ chế độ khách (chưa đăng nhập), banner không còn các card "Quyền lợi thành viên" và nút "Đăng ký thành viên Ginsengfood ngay hôm nay"; xong thì đồng bộ vào `ui-pages`. Storefront đã đổi trước; bản thiết kế được đồng bộ lại ở **7 file trang chủ** và **2 file chuyển động dùng chung** (`home-motion.css`, `home-motion.js`). Chỉ giao diện; chạm `<script>` (xem dưới).

| Phần | Thay đổi |
|---|---|
| Banner của khách (`trang-chu.html`, `trang-chu-link-gioi-thieu.html`) | Gỡ cả khối dưới phần chữ: tiêu đề "Quyền lợi thành viên", liên kết "Xem chi tiết", bốn dòng hạng (Silver, Gold, Platinum, Diamond) và nút "Đăng ký thành viên Ginsengfood ngay hôm nay". Banner chỉ còn nhãn nhỏ, tiêu đề, hai câu khẩu hiệu, đoạn mô tả và nút "Cuộn xuống"; khối chữ nằm giữa theo chiều dọc ở khung nhìn rộng, như storefront. Giá trị bốn hạng vẫn có ở khu "Quyền lợi" bên dưới. |
| CSS (7 file trang chủ) | Gỡ họ `.hero-tier*` và `.hero-tiers*` (79 luật, gồm các luật theo khổ rộng, rê chuột và giảm chuyển động) cùng hai khung `@keyframes` `heroTierRing`, `heroJoinSheen`. Ở 5 bản hội viên đây là CSS thừa từ trước (khối này không có trong HTML của họ). Gỡ luôn hiệu ứng làm sáng thẻ hạng `.tier.is-picked` và `@keyframes tierPicked`: hiệu ứng chỉ chạy khi người xem tới từ một dòng hạng ở banner, nay không còn lối vào. |
| `home-motion.css` | Bỏ `.hero-tiers`, `.hero-tier`, `.hero-tiers__cta` khỏi nhịp hiện dần của banner và khỏi danh sách giảm chuyển động. Chip hạng, card Giờ Vàng và nút "Cuộn xuống" giữ nguyên. |
| Chú thích | Các chú thích nhắc tới bốn card hạng hay nút đăng ký của banner được viết lại cho khớp ("bản khách chỉ có phần chữ"). |

**Chạm vào `<script>` (cần chủ dự án xem lại, vì yêu cầu là không làm logic):**

- **7 file trang chủ:** gỡ một đoạn khởi tạo 53 dòng ("Dòng hạng ở hero → cuộn xuống mục Quyền lợi và làm sáng đúng thẻ hạng vừa bấm"). Đoạn này chỉ gắn sự kiện bấm cho các dòng hạng ở banner; ở 5 bản hội viên các dòng đó vốn không có nên đoạn này chưa từng chạy. Không đoạn nào khác dùng tới nó.
- **`home-motion.js`:** một chỗ: danh sách khối "dừng luân phiên ảnh khi rê chuột lên khối chữ" bỏ mục `.hero-tiers` (không còn phần tử nào khớp).

**Lệch còn lại, biết trước:** nút "Cuộn xuống" ở bản thiết kế vẫn là liên kết (cuộn tới `#san-pham`), còn ở storefront là phần tử trang trí không bấm được. Lệch này có từ trước, không thuộc đợt này.

**Đã kiểm:** mở bằng Chromium ở 1440, 1024, 768 và 390px cả 7 file. So kiểu tính ra toàn trang giữa bản gốc (bỏ khối bằng JS cho khớp cây) và bản mới: 0 khác biệt trên 2.691 tới 2.961 phần tử mỗi khổ. 0 lỗi JavaScript, 0 tràn ngang, không id trùng, mọi liên kết và ảnh cục bộ còn đủ. Banner khách: khối chữ cao 295px, rộng 560px (520px từ dưới 1280px), nằm giữa theo chiều dọc ở 1440px, đúng số đo của storefront. Luân phiên bốn ảnh mùa vẫn chạy và dừng khi rê chuột lên khối chữ. Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Câu "mua sớm" của card Giờ Vàng và card Giờ Vàng ở trang tin tức (14/10/2026, đợt chín)

Theo yêu cầu của chủ dự án: câu mua sớm của khách trong card Giờ Vàng đổi thành **"Thành viên Ginsengfood có đặc quyền mua sớm 10 – 25 phút so với khách mới"** (trước đó: "có thể mua sớm … đối với khách mới"); xong thì rà các trang có card này. Storefront đổi trước (trang chủ và trang chi tiết sản phẩm dùng chung một thành phần); bản thiết kế được đồng bộ lại **chỉ phần giao diện**.

| Phần | Thay đổi |
|---|---|
| Câu mua sớm (3 file) | `trang-chu.html`, `trang-chu-link-gioi-thieu.html` và `chi-tiet-san-pham.html` (bản khách): đổi câu. Năm bản hội viên và `chi-tiet-san-pham-silver.html` có câu riêng theo hạng ("Hạng thành viên … của bạn được vào sớm giờ vàng N phút") nên giữ nguyên. |
| Bề rộng card (7 file trang chủ) | Câu mới dài hơn câu cũ khoảng 7% nên từ 1320px (card đạt 1240px) chia lại ba cột (chữ 2,1fr, nút 1fr), thu đệm phải cột chữ 26 → 10px và đệm hai bên cột đồng hồ 28 → 18px: câu nằm trọn một dòng, card vẫn cao 180px, cột nút còn khoảng 270px, đủ cho nút "Gửi thông báo cho tôi" + chip "Sắp mở" và nút mời trở thành thành viên. Từ 1280px tới 1319px câu xuống dòng, chia đều hai dòng (như câu cũ ở 1280px). Trang chi tiết sản phẩm giữ tỉ lệ cột cũ (storefront dùng lại card trong khung 1160px nên câu luôn hai dòng). |
| Card Giờ Vàng ở `chi-tiet-tin-tuc.html` | Trang này đang dùng card **kiểu cũ** (tiêu đề "Tri ân đến 42%…", hai ý "Số lượng có hạn" và "Khung giờ đặc quyền cho thành viên", thẻ sản phẩm có thanh số suất và nút "Nhắc tôi") nên không có câu trên; trang tin tức của web chính thì không có card Giờ Vàng. Theo lựa chọn của chủ dự án, **đồng bộ cả card**: thẻ `.golden` và dải `.gh-slider` thay bằng bản của trang chủ (bản khách): tiêu đề và mức ưu đãi một hàng, ba dòng có icon (kèm câu mới), đồng hồ, nút "Trở thành thành viên Ginsengfood ngay hôm nay", thẻ bán hàng với nút "Mua ngay" khoá tới giờ vàng. Họ CSS golden, countdown, gh-slider, gh-cards, gh-card, fb-arrow thay bằng của trang chủ, gồm cả khung màn Giờ Vàng (cao theo nội dung, không còn ép cao một khung nhìn). Giữ khung màn, tiêu đề nhỏ "Giờ Vàng Tri Ân" và nút cuộn xuống riêng của trang. Chép thêm biểu tượng vương miện; hai luật `.gh-card` khoanh riêng và giãn dòng 1,5 cho màn này để thẻ nhóm sản phẩm bên dưới không đổi và card cao đúng như ở trang chủ. |

**Chạm vào `<script>` (cần chủ dự án xem lại):** chỉ `chi-tiet-tin-tuc.html`, +7 / −8 dòng: khối trạng thái phiên Giờ Vàng thay bằng bản của trang chủ (nút "Mua ngay" của card mở theo phiên thay cho thanh số suất và nút "Nhắc tôi"; các phần tử đã bỏ như `#remindBtn`, `#goldenState` được kiểm null). Các file khác chỉ đổi chữ và CSS.

**Đã kiểm:** mở bằng Chromium. 7 trang chủ ở 1440, 1280, 1024 và 390px: so kiểu tính ra toàn trang giữa bản gốc và bản mới, ngoài khu Giờ Vàng 0 khác biệt; trong khu chỉ khác ở 1440px đúng các luật `min-width: 1320px`. Đo card ở 1280, 1300, 1319, 1320, 1366, 1440, 1920, 1100, 768, 390px (cả bản khách lẫn hội viên): từ 1320px câu khách một dòng, card 180px; nút không ra khỏi cột nút. Trang tin tức: 394 phần tử của khu Giờ Vàng khớp kiểu tính ra với khu của trang chủ (khác duy nhất ở chiều cao khung do nút cuộn xuống được giữ); phần còn lại của trang không đổi (chỉ chiều cao khung chứa). Giả lập đồng hồ 10:00 và 12:30: trạng thái UPCOMING/LIVE, nhãn "Mở phiên sau" / "Thời gian đếm ngược", nút "Mua ngay" khoá/mở, câu đọc màn hình đúng; mũi tên dải thẻ chạy. 0 lỗi JavaScript, 0 tràn ngang, không id trùng, mọi liên kết và ảnh cục bộ còn đủ. Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Nút mời của khách ở card Giờ Vàng đọc "Đăng ký trở thành thành viên Ginsengfood ngay hôm nay" (14/10/2026, đợt mười)

Theo yêu cầu của chủ dự án: chữ nút mời của khách trong card Giờ Vàng đổi từ "Trở thành thành viên Ginsengfood ngay hôm nay" (nút nền vàng ở đợt năm) thành **"Đăng ký trở thành thành viên Ginsengfood ngay hôm nay"**. Storefront đổi trước (trang chủ và trang chi tiết sản phẩm dùng chung một thành phần); bản thiết kế được đồng bộ lại **chỉ phần giao diện** ở **4 file có nút của khách**. Không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Chữ nút | `trang-chu.html`, `trang-chu-link-gioi-thieu.html`, `chi-tiet-san-pham.html` (bản khách) và `chi-tiet-tin-tuc.html` (card đã đồng bộ ở đợt chín). Các bản hội viên không có nút này (họ có "Gửi thông báo cho tôi") nên giữ nguyên. Chú thích HTML cạnh nút bỏ ý "cùng đích với nút đăng ký ở banner đầu trang" vì banner của khách đã bỏ nút đăng ký từ đợt tám. |
| Bố cục điện thoại rất hẹp | Câu dài hơn 9 ký tự: ở 320px chữ rớt ba dòng và nút cao 60px. Thêm khối `@media (max-width: 359px)` (đặt sau khối 767px) thu đệm ngang của nút mời 16 → 10px nên nút vẫn hai dòng, cao 46px như nút thông báo. Từ 1024px trở lên và ở 390px, 360px nút vẫn hai dòng (cao 44px từ 1280px, 42px từ 1024px tới 1279px, 46px ở điện thoại); ở 768px một dòng. |
| Khác với storefront | Trang chi tiết sản phẩm của storefront dùng card trong khung 1160px nên được chia cột 1,84fr / 1fr từ 1320px để nút hai dòng; bản thiết kế của trang này có khung 1240px nên không cần. |

**Đã kiểm:** mở bằng Chromium 4 file ở 1920, 1440, 1320, 1280, 1024, 768, 390, 360 và 320px: nút hai dòng (một dòng ở 768px), không ra khỏi cột nút, không tràn ngang, 0 lỗi JavaScript, không id trùng. So kiểu tính ra toàn trang với bản trước đợt này: ngoài khu Giờ Vàng 0 khác biệt, trong khu chỉ khác ở 320px đúng hai thuộc tính đệm của nút. Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Nút tài khoản của khách ở header đọc "Đăng ký" (14/10/2026, đợt mười một)

Theo yêu cầu của chủ dự án: chữ trên nút tài khoản của khách ở **header** đổi từ "Đăng nhập" thành **"Đăng ký"**. Storefront đổi trước (một nguồn `StorefrontHeader`, dùng cho mọi trang có header đầy đủ); bản thiết kế được đồng bộ lại **chỉ phần giao diện**, không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Chữ nút | 10 file có header đầy đủ cho khách: `trang-chu.html`, `trang-chu-link-gioi-thieu.html`, `dai-ly-nha-phan-phoi.html` (trong `trang-chu-theo-doi-tuong/`), `chi-tiet-san-pham.html`, `chi-tiet-tin-tuc.html`, `gio-hang.html`, `nhom-san-pham.html`, `tin-tuc.html`, `tra-cuu-don-hang.html`, `ve-chung-toi.html`. Mỗi file có hai nút (header và menu di động); chữ hiển thị, `aria-label` và `title` đều đổi. |
| Đích nút | Giữ nguyên `dang-nhap.html`. Storefront cũng vẫn mở `/login`: trang mở ở chế độ đăng nhập và chuyển sang đăng ký ngay tại chỗ (`/register` không tồn tại); bản mẫu tách thành `dang-ky.html`, nối từ dòng cuối của `dang-nhap.html`. Nút chưa mở thẳng chế độ đăng ký. |
| Chú thích CSS | 6 bản không có nút của khách (`trang-chu-silver-v2`, `trang-chu-gold-v2`, `trang-chu-platinum-v2`, `trang-chu-diamond-v2`, `trang-chu-cong-tac-vien`, `chi-tiet-san-pham-silver`) chỉ sửa chú thích "tên + hạng thay cho nút Đăng nhập" thành "nút Đăng ký". Dòng mô tả lớp vỏ ở phần "Đã đồng bộ ở mọi file" cũng đổi theo. |
| Không đổi | Các chữ "Đăng nhập" khác không thuộc nút của header: tiêu đề và nút gửi của `dang-nhap.html`, link "Đăng nhập" ở `dang-ky.html` và `dieu-khoan-cong-tac-vien.html`, nút "Đăng nhập lại" ở `dang-xuat.html`, lời mời "Đăng nhập / Đăng ký" ở `tra-cuu-don-hang.html`, `chi-tiet-don-hang-khach.html` và `thanh-toan.html`. |

**Đã kiểm:** mở bằng Chromium 10 file ở 1920, 1440, 1280, 1024, 768, 390, 360 và 320px (từ 1280px trở lên nút nằm ở header, dưới đó nằm trong menu di động đã mở): đúng một nút khách hiện ra, chữ, `aria-label` và `title` cùng là "Đăng ký", đích `dang-nhap.html`, không tràn ngang, 0 lỗi JavaScript, không id trùng, header không đổi chiều cao. Nút hẹp hơn chữ cũ 18–21px (110 → 92px ở header, 153 → 132px trong menu di động) nên khoảng cách tới thanh điều hướng rộng thêm. So từng dòng với bản trước đợt này: chỉ 26 dòng khác nhau (20 nút + 6 chú thích). Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Khu "Quyền lợi thành viên" bỏ nền ngà vàng (14/10/2026, đợt mười hai)

Theo yêu cầu của chủ dự án: khu **"Quyền lợi thành viên"** không còn nền ngà vàng (`--gf-ivory`, #FFF8EA, kèm quầng trắng ở giữa) mà dùng **nền kem của trang** (`--gf-cream`, #FBF8F1), đúng như trang chi tiết sản phẩm đã làm từ trước. Storefront đổi trước (một quy tắc gốc `.home-tiers` nên trang chủ, giỏ hàng và trang chi tiết đều theo); bản thiết kế được đồng bộ lại **chỉ phần CSS**, không đụng HTML hay `<script>`.

| Phần | Thay đổi |
|---|---|
| Nền khu | 10 file có khu `.tiers` (id `quyen-loi`): 7 trang chủ trong `trang-chu-theo-doi-tuong/` (khách, link giới thiệu, Silver, Gold, Platinum, Diamond, cộng tác viên), `gio-hang.html`, `chi-tiet-san-pham.html` và `chi-tiet-san-pham-silver.html`. Quy tắc gốc `.tiers` đổi `background` từ "quầng trắng + `--gf-ivory`" thành `var(--gf-cream)`; bản khách và bản hội viên cùng đổi. |
| Trang chi tiết | Hai trang chi tiết đã có ghi đè nền kem từ 14/10 nên chỉ còn bỏ đường kẻ dưới: `.tiers { border-bottom: 0; }`; chú thích đi kèm sửa theo. |
| Giữ nguyên | Đường kẻ dưới của khu (trừ trang chi tiết), hộp mời "Tham gia ngay…" (nền ngà vàng, viền vàng bên trái), chip "Mua sớm Giờ Vàng" theo hạng, khối cộng tác viên và khối đại lý (nền xanh navy). Nền ngà của các khu khác (banner đầu trang, khu Sản phẩm) cũng không đổi vì yêu cầu chỉ nói tới khu này. |

**Đã kiểm:** mở bằng Chromium 10 file ở 1440, 1024, 768, 390 và 320px: nền `.tiers` là `rgb(251, 248, 241)` (kem), không còn ảnh nền, đường kẻ dưới 1px (0 ở hai trang chi tiết như trước), không tràn ngang, 0 lỗi JavaScript, không id trùng; chiều cao khu khớp storefront (trang chủ khách 949px ở 1440px). So từng dòng với bản trước đợt này: 14 dòng khác nhau (8 file × 1 dòng, 2 trang chi tiết × 3 dòng). Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Bỏ đường kẻ trên khu "Quyền lợi thành viên" và trên khu "Nhóm sản phẩm" (14/10/2026, đợt mười ba)

Theo yêu cầu của chủ dự án: bỏ **đường phân cách nằm trên khu "Quyền lợi thành viên"** và **trên khu "Nhóm sản phẩm"**. Storefront đổi trước (viền dưới khu Giờ Vàng, viền dưới khu Quyền lợi và viền trên khối bao quanh ở giỏ hàng đều thuộc thành phần dùng chung nên trang chủ, trang chi tiết và giỏ hàng cùng theo); bản thiết kế được đồng bộ lại **chỉ phần CSS**, không đụng HTML hay `<script>`.

| Phần | Thay đổi |
|---|---|
| Đường trên "Quyền lợi thành viên" | Trang chủ: bỏ `border-bottom` của `.golden-section` (7 trang chủ trong `trang-chu-theo-doi-tuong/`). Giỏ hàng: bỏ `border-top` của `.shop` ở `gio-hang.html`. |
| Đường trên "Nhóm sản phẩm" | Trang chủ và giỏ hàng: bỏ `border-bottom` của `.tiers` (8 file). Trang chi tiết: bỏ `border-bottom` của `.golden-section` (`chi-tiet-san-pham.html`, `chi-tiet-san-pham-silver.html`); hai trang này còn xoá ghi đè `.tiers { border-bottom: 0; }` vì không còn cần. |
| Đệm dưới khu Quyền lợi | `.tiers` đệm dưới 18px → **40px** (điện thoại 26px → 40px) ở cả 10 file. Bóng của thẻ đại lý (`0 14px 30px`) kéo dài khoảng 44px dưới thẻ; với 18px nó bị cắt thẳng ở mép khu và để lại một vạch ngang trông như đường kẻ, còn 40px thì bóng gần như tắt hẳn trước mép. |
| Giữ nguyên | Đường kẻ dưới khu "Sản phẩm" (đứng trên khu Giờ Vàng). `chi-tiet-tin-tuc.html` vẫn giữ `border-bottom` của khu Giờ Vàng vì trang đó không có khu Quyền lợi hay Nhóm sản phẩm. |

**Đã kiểm:** mở bằng Chromium 10 file ở 1440, 1024, 768, 390 và 320px: viền dưới khu Giờ Vàng 0 (9 file), viền dưới khu Quyền lợi 0 và đệm dưới 40px (10 file), viền trên `.shop` 0 (giỏ hàng), nền khu vẫn là kem, không tràn ngang, 0 lỗi JavaScript, không id trùng. Quét lại các ranh giới Giờ Vàng | Quyền lợi | Nhóm sản phẩm ở 1440px thì không còn viền hay dải mảnh nào; lấy mẫu điểm ảnh dưới thẻ đại lý thấy bóng mờ dần tới mép khu (lệch khoảng 2 mức xám so với nền, không còn bậc). So từng dòng với bản trước đợt này: +40 −54 dòng trên 10 file (mỗi trang chủ và giỏ hàng +4 −5, mỗi trang chi tiết +4 −7). Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Khu "Về chúng tôi" ở trang chủ đổi từ bốn thẻ sang năm thẻ (15/10/2026, đợt mười bốn)

Theo yêu cầu của chủ dự án: các thẻ của khu **"Về chúng tôi"** ở trang chủ đổi thành năm thẻ theo thứ tự: SSAVIGROUP – Doanh nghiệp khoa học công nghệ Việt Nam; Viện Nghiên cứu Dược liệu Vùng cát biển; Bảo tàng Dược liệu vùng cát biển; Trung tâm Nghiên cứu các sản phẩm từ Sâm; Ginsengfood – Nền tảng cộng đồng tri thức y dược học và thương mại. Storefront đổi trước (`HomeAboutUsSection`); bản thiết kế được đồng bộ lại ở **7 trang chủ** trong `trang-chu-theo-doi-tuong/` (HTML của khu và CSS của khu). Không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Thẻ | Năm thẻ đúng thứ tự trên. Chủ dự án gõ tên bằng chữ hoa; bản mẫu viết như các tên riêng khác ("SSAVIGROUP" giữ chữ hoa, còn lại hoa chữ cái đầu như tên cũ). Chỉ thẻ SSAVIGROUP và thẻ Ginsengfood có mô tả; ba thẻ còn lại chỉ có tên và chữ nằm giữa thẻ theo chiều dọc. Đã bỏ chữ "Tập đoàn", "– iCHM", "Thương hiệu" và các mô tả cũ. Lời dẫn thành "Năm cái tên đứng sau mỗi tô Cháo Sâm…". |
| Liên kết | Thẻ SSAVIGROUP giữ `ve-chung-toi.html#story`; các thẻ còn lại giữ `ve-chung-toi.html` như bản cũ (bản mẫu chưa có neo riêng cho từng khối). Ở storefront thẻ Trung tâm về đầu `/about` vì trang đó chưa có mục riêng cho Trung tâm. |
| Quỹ đạo | Năm thẻ cách đều 72° trên elip, bán trục 296×176 (cũ 272×172), thẻ 248×112 (cũ 264×116), sân khấu 844×464 (cũ 808×454), lề trên sân khấu 32px (cũ 20px). Vị trí đứng yên (khi xin giảm chuyển động): trên giữa, phải trên, phải dưới, trái dưới, trái trên. Hở nhỏ nhất giữa hai thẻ khoảng 20px, giữa thẻ và logo khoảng 27px. |
| Điện thoại | Lưới 2 cột như cũ; thẻ thứ năm đứng một mình ở hàng cuối nên nằm giữa, rộng bằng một cột (lề trên sân khấu giữ 20px). |
| Không đổi | Mô tả "Tập đoàn, viện, thương hiệu và bảo tàng" của mục "Về chúng tôi" trong thanh mục lục bên trái (nằm trong `<script>`, chủ dự án chưa yêu cầu đổi). Trang `ve-chung-toi.html` giữ bốn khối như cũ. |

**Đã kiểm:** mở bằng Chromium 7 file; quét 25 góc quay ở 900, 1280, 1440 và 1920px (quỹ đạo), rồi 768, 390 và 320px (lưới 2 cột): hở nhỏ nhất giữa hai thẻ 22,4px, giữa thẻ và logo 26,9px, thẻ luôn nằm trong màn hình (ở 900px chạy từ 30 đến 870px), không tràn ngang, không thẻ nào bị cắt chữ, 0 lỗi JavaScript; số đo trùng khít với storefront. So từng dòng với bản trước đợt này: +24 −20 dòng ở mỗi file. Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Chân trang: bỏ cột Niềm tin, đổi hai cột, thêm WhatsApp và logo Bộ Công Thương (15/10/2026, đợt mười lăm)

Theo yêu cầu của chủ dự án, chân trang dùng chung đổi như sau; storefront đổi trước (`HomeFooter`), rồi đồng bộ sang **26 file** có khối `gf-shell:footer` (19 trang khác và 7 trang chủ). Chỉ giao diện, không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Cột Chính sách | Còn ba mục, chỉ là chữ vì chưa có trang chính sách công khai: Chính sách bảo mật, Chính sách thu thập thông tin, Tuyên bố miễn trừ. Năm mục cũ (Hình thức thanh toán, Chính sách vận chuyển, Chính sách mua hàng, Chính sách đổi trả, Các điều khoản) bỏ khỏi chân trang. "Chính sách thu thập thông tin" là tên mới: bộ bản nháp chính sách chưa có trang riêng cho tên này (nội dung thu thập dữ liệu đang là một mục trong chính sách bảo mật). |
| Cột Niềm tin | **Bỏ cả cột** cùng các mục (Nguồn gốc và truy xuất, Hợp tác nhà phân phối và ba dòng chữ). Lối vào `dai-ly-nha-phan-phoi.html` nay là mục cuối của cột Thành viên và quyền lợi. |
| Cột Thành viên và quyền lợi | Tiêu đề giữ nguyên, còn ba mục: Chương trình thành viên (`#quyen-loi`), Chương trình khởi nghiệp (`dieu-khoan-cong-tac-vien.html`), Hệ thống Đại lý nhà phân phối (`dai-ly-nha-phan-phoi.html#hinh-thuc`). Mục "Giờ Vàng Tri Ân" bỏ. Liên kết vẫn theo thư mục của từng trang như đợt hai. |
| Cột Liên hệ | Thêm biểu tượng **WhatsApp** (ô vuông bo góc xanh `#25D366`, hình bong bóng thoại trắng, cùng dạng với ô Zalo) cuối hàng; bốn biểu tượng nằm cùng một hàng, chưa có link nên vẫn là thẻ `<span>` không bấm được. Ngay dưới là logo **"Đã thông báo Bộ Công Thương"**: logo chính thức chủ dự án gửi, đã **bỏ đĩa trắng nền** theo yêu cầu (đĩa trắng được khử thành trong suốt, dấu tích và chữ trắng bên trong giữ nguyên), nén thành WebP `420x129` (31 KB) ở `public/home-webp-v1/logo-bo-cong-thuong-da-thong-bao.w420.webp`; trang mẫu trỏ tới ảnh này bằng đường dẫn tương đối (`../public/…` hoặc `../../public/…`) nên không chép thêm ảnh. Logo cao 50px, đặt thẳng lên nền navy, không thẻ không viền. |
| Bố cục | Lưới bốn cột từ 1280px (cột Liên hệ rộng `clamp(258px, 21vw, 300px)`); 768 đến 1279px: thương hiệu chiếm cả hàng, Chính sách và Thành viên chung một hàng, Liên hệ chiếm cả hàng dưới; dưới 768px một cột. Riêng **7 trang chủ** chừa thêm lề phải cho lưới chân trang ở khổ 1280 đến 1431px (tối đa 56px) để cụm sáu nút nổi bên phải không đè lên biểu tượng thứ tư và logo; trang khác dùng cụm nút dạng gọn ở góc trái dưới trong dải này nên không cần. |
| Không đổi | Cụm sáu nút liên hệ nổi (chưa thêm WhatsApp). Cột thương hiệu, đáy chân trang (tên pháp nhân, số giấy phép) giữ nguyên. |

**Cần biết:** logo là **hình**; website chưa thông báo với cơ quan nhà nước (QĐ-CH-06), nên bản mẫu để logo không bấm được. Khi có xác nhận, logo phải trỏ về trang xác nhận của chính website (storefront đã có biến `NEXT_PUBLIC_MOIT_NOTIFICATION_URL` cho việc này); bản mẫu tĩnh không có biến môi trường nên giữ dạng hình.

**Đã kiểm:** mở bằng Chromium 26 file ở 1920, 1440, 1280, 1100, 768, 390 và 320px (182 lượt): 0 lỗi JavaScript, 0 tràn ngang, đúng hai cột liên kết với đúng ba mục mỗi cột, bốn biểu tượng 48px cùng một hàng, logo nằm ngay dưới và trong cột, ảnh logo nạp được và không méo (420:129, cao 50px), mọi liên kết `.html` trong chân trang đều trỏ tới tệp có thật. Với 7 trang chủ đo thêm khoảng hở giữa cụm nút nổi và biểu tượng/logo ở 1280, 1320, 1366, 1400, 1431, 1440 và 1920px: từ 18px trở lên (số đo trùng storefront). So từng dòng với bản trước đợt này: +14 −20 dòng ở mỗi trang khác, +15 −20 ở mỗi trang chủ. Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.

### Header đổi từ nền trắng sang navy đậm + viền vàng (17/10/2026, đợt mười sáu)

Theo yêu cầu của chủ dự án (sếp chê header trắng quá; chủ dự án chốt **phương án A**: navy đậm + viền vàng): header dùng chung đổi từ nền trắng sang **navy đậm của chân trang**. Storefront đổi trước (`StorefrontHeader` và header gọn `StorefrontFocusHeader`), rồi đồng bộ sang **26 file**: 16 trang có header đầy đủ (gồm 7 trang chủ) và 10 trang dùng header gọn (đăng nhập, đăng ký, đăng xuất, thanh toán, kết quả thanh toán, tài khoản, hai trang chi tiết đơn hàng, điều khoản và trung tâm cộng tác viên). Chỉ CSS và ảnh logo, không đụng `<script>`.

| Phần | Thay đổi |
|---|---|
| Nền và viền | Nền `--gf-navy-dark` `#072A4E` (đúng màu chân trang), viền dưới 1px vàng `--gf-gold` `#C69A2B`, bóng `0 10px 30px` navy 30%. Chiều cao header giữ nguyên (83px ở 1440px, 65px ở điện thoại; header gọn 74px và 64px). |
| Chữ và menu | Chữ và icon màu ngà `#FFF8EA` (tương phản 13,7:1); mục đang chọn hoặc rê chuột vàng nhạt `#E8C979` (9,0:1) kèm gạch chân vàng mọc từ giữa. |
| Nút tròn (menu, tìm kiếm, ngôn ngữ) và ô tìm | Nền ngà 6% trong mờ, viền vàng 65%, icon ngà; rê chuột, tiêu điểm bàn phím hoặc đang mở thì tô vàng đặc với icon navy. Ô tìm: nền ngà 8%, viền vàng 55%, chữ và gợi ý màu ngà. Ngăn kéo tìm kiếm dưới 1440px nền navy. |
| Giỏ hàng và nút khách | Icon giỏ màu ngà (rê chuột vàng nhạt), huy hiệu số vàng chữ navy. Nút "Đăng ký" ở thanh header chữ ngà, còn trong bảng menu điện thoại (bảng sáng) vẫn chữ navy. |
| Vòng tiêu điểm | Vàng nhạt thay cho xanh (xanh chỉ đạt 3,1:1 trên navy). |
| Logo | Thẻ logo của khối `gf-shell:header` đổi từ `logo-header-light` (chữ navy) sang `logo-header-v2` (chữ ngà và sâm vàng, cùng bản với chân trang), srcset 120/240/360w; không chép thêm ảnh vì các tệp đã có trong `public/home-webp-v1/`. Logo `logo-header-light` ở nơi khác trong trang (nền sáng) giữ nguyên. |
| Header gọn (10 trang) | Cùng nền, viền và nút ngôn ngữ; link "Về trang chủ" / "Tiếp tục mua sắm" chữ ngà (rê chuột vàng nhạt). Chip tài khoản in tên màu ngà và dòng hạng bằng kim loại của hạng, chỉ đặt được trên nền tối (Silver `#B9BFC7`, Gold `#D4AF37`, Platinum `#E5EAF0`, Diamond `#EAF6FF`). |
| Giữ nguyên | Các bảng nổi (menu ngôn ngữ, menu tài khoản, gợi ý tìm kiếm, menu điện thoại) vẫn nền sáng chữ navy; ô đại diện theo hạng (chip sáng có viền riêng); thanh "Chủ đề" màu kem dưới header trang chủ; kích thước và khoảng cách của header. |

**Cách làm:** thêm một khối CSS ở cuối `<style id="gf-shell-css">` của mỗi trang, cùng văn bản với khối cuối của `StorefrontHeader` (header đầy đủ) hoặc khối ghi đè `.focus-header` (header gọn); riêng bản mẫu có thêm luật `.locale-dropdown:focus-within .locale-pill` vì bản mẫu mở menu ngôn ngữ bằng `:focus-within` (storefront dùng `aria-expanded`).

**Đã kiểm:** mở bằng Chromium 26 file ở 1920, 1440, 1280, 1100, 768, 390 và 320px (182 lượt): nền header `rgb(7, 42, 78)`, viền dưới 1px `rgb(198, 154, 43)`, logo bản chữ ngà nạp được, màu nút tròn, menu, giỏ, nút khách và link "về trang chủ" đúng như trên, 0 tràn ngang, 0 lỗi JavaScript, 0 tệp cục bộ lỗi. Chụp thêm các trạng thái: menu ngôn ngữ đang mở (nút vàng đặc), menu điện thoại mở (nút menu vàng đặc, bảng sáng chữ navy), ngăn kéo tìm kiếm ở 1100px, chip hạng Silver ở trang chủ hạng, header gọn ở trang tài khoản (tên và dòng hạng đọc được) và trang thanh toán. So từng dòng với bản trước đợt này: +145 −1 dòng ở mỗi trang có header đầy đủ, +93 −1 ở mỗi trang có header gọn (dòng bị thay là thẻ logo). Chưa phải bằng chứng tích hợp backend thật; chưa kiểm trên trình duyệt khác ngoài Chromium.
