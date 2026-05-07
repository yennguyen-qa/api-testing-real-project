# Requirement Analysis - Restful Booker Platform Web

## Mục Tiêu
Phân tích yêu cầu kiểm thử web cho Restful Booker Platform trước khi viết test scenarios và manual test cases.

## Application
- Name: Restful Booker Platform
- Web URL: https://automationintesting.online/
- Domain: Hotel / Room Booking

## Module: Home Page
### Business Rules Dự Kiến
- User có thể truy cập home page thành công.
- Page cần hiển thị thông tin cơ bản về phòng/booking/contact nếu hệ thống hỗ trợ.
- Navigation chính cần hoạt động đúng.

### Risks
- Page load lỗi hoặc hiển thị thiếu nội dung chính.
- Navigation dẫn sai section/page.
- Nội dung web không nhất quán với dữ liệu API.

## Module: Room Listing
### Business Rules Dự Kiến
- User có thể xem danh sách phòng.
- Room card/list cần hiển thị thông tin quan trọng như room type, price, availability nếu có.
- User có thể chọn phòng để bắt đầu booking nếu hệ thống hỗ trợ.

### Risks
- Danh sách phòng không hiển thị.
- Room information thiếu hoặc sai.
- Nút booking không hoạt động.

## Module: Room Booking
### Business Rules Dự Kiến
- User có thể tạo booking với dữ liệu hợp lệ.
- Required fields cần được validate.
- Date range cần hợp lệ.
- Confirmation hoặc feedback cần rõ ràng sau khi submit.

### Risks
- Booking được tạo dù thiếu required fields.
- Booking chấp nhận date range không hợp lệ.
- User không nhận được confirmation rõ ràng.

## Module: Contact/Message
### Business Rules Dự Kiến
- User có thể gửi message/contact với dữ liệu hợp lệ.
- Required fields cần được validate.
- Email format cần được xử lý đúng nếu hệ thống yêu cầu.

### Risks
- Form chấp nhận dữ liệu không hợp lệ.
- Error message không rõ ràng.
- Message không được gửi/lưu đúng.

## Trạng Thái
Planned - Chưa xác nhận bằng execution. Nội dung này sẽ được cập nhật sau khi test thực tế trên web.
