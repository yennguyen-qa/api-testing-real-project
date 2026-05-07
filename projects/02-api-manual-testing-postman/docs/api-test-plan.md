# API Test Plan - Restful Booker Platform

## Mục Tiêu
Xác định phạm vi, phương pháp và bằng chứng cần thu thập khi thực hiện manual API testing bằng Postman cho Restful Booker Platform.

## Application Under Test
- Application: Restful Booker Platform
- Web URL: https://automationintesting.online/
- Domain: Hotel / Room Booking
- Tool chính: Postman
- Bug tracking: Jira

## Phạm Vi Dự Kiến
| Module | Nội dung kiểm thử | Trạng thái |
|---|---|---|
| Auth | Đăng nhập, token, quyền truy cập | Planned |
| Room | Danh sách phòng, chi tiết phòng, dữ liệu phòng | Planned |
| Booking | Tạo booking, xem booking, validate dữ liệu booking | Planned |
| Message/Contact | Gửi message/contact và validate required fields | Planned |

## Loại Kiểm Thử
- Positive API testing
- Negative API testing
- Required field validation
- Status code validation
- Response body validation
- Basic data consistency giữa API và web nếu phù hợp

## Ngoài Phạm Vi Hiện Tại
- Performance testing
- Security testing chuyên sâu
- Automation test execution
- CI/CD execution

## Evidence Cần Lưu
- Postman collection và environment trong `postman/`
- API response JSON trong `evidence/api-responses/`
- Screenshot Postman trong `evidence/screenshots/`
- Bug report trong `docs/bug-reports.md`
- Jira traceability trong `docs/jira-traceability.md`

## Trạng Thái
In Progress - Chưa thực thi test. Tài liệu này là khung chuẩn bị trước khi test manual API.
