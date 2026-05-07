# API Requirement Analysis - Restful Booker Platform

## Mục Tiêu
Phân tích yêu cầu kiểm thử API cho Restful Booker Platform trước khi viết test scenarios và manual test cases.

## Application
- Name: Restful Booker Platform
- Web URL: https://automationintesting.online/
- Domain: Hotel / Room Booking

## Module: Booking
### Business Rules Dự Kiến
- User có thể tạo booking với thông tin hợp lệ.
- Booking cần có thông tin khách hàng và ngày đặt phòng.
- Required fields không được để trống.
- API cần trả status code và response body phù hợp cho dữ liệu hợp lệ hoặc không hợp lệ.

### Risks
- API tạo booking dù dữ liệu bắt buộc bị thiếu.
- API chấp nhận date range không hợp lệ.
- Response body không khớp với request body.
- Status code không phản ánh đúng kết quả xử lý.

## Module: Room
### Business Rules Dự Kiến
- User có thể lấy danh sách phòng.
- Room data cần có thông tin cơ bản như room number/type/price nếu API hỗ trợ.
- Room detail cần nhất quán với dữ liệu hiển thị trên web nếu có thể đối chiếu.

### Risks
- Danh sách phòng trả thiếu dữ liệu quan trọng.
- Dữ liệu room giữa API và web không nhất quán.
- API trả thành công nhưng response body sai format.

## Module: Auth
### Business Rules Dự Kiến
- Admin/user hợp lệ có thể đăng nhập nếu API hỗ trợ auth.
- Credential không hợp lệ không được cấp quyền truy cập.
- Token/session cần được xử lý đúng cho endpoint yêu cầu quyền.

### Risks
- API cấp quyền với credential sai.
- Error message hoặc status code không rõ ràng.
- Endpoint cần auth vẫn truy cập được khi chưa đăng nhập.

## Module: Message/Contact
### Business Rules Dự Kiến
- User có thể gửi message/contact với dữ liệu hợp lệ.
- Required fields cần được validate.
- Email/phone/message cần có định dạng hoặc độ dài hợp lệ nếu hệ thống yêu cầu.

### Risks
- Form/API chấp nhận dữ liệu thiếu required fields.
- API không trả lỗi rõ ràng cho dữ liệu không hợp lệ.
- Message gửi qua API không hiển thị hoặc lưu đúng trên hệ thống.

## Trạng Thái
Planned - Chưa xác nhận bằng execution. Nội dung này sẽ được cập nhật sau khi test thực tế bằng Postman.
