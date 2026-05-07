# Jira Traceability Matrix - API Manual Testing

## Mục Tiêu
Theo dõi mối liên kết giữa test case, bug trên Jira, evidence và trạng thái automation candidate.

## Traceability Matrix
| Jira Key | Test Case | Module | Summary | Status | Automation |
|---|---|---|---|---|---|
| N/A | TC-BOOKING-001 | Booking | Create booking with valid data | Not Run | Candidate |
| N/A | TC-BOOKING-002 | Booking | Missing required guest field validation | Not Run | Candidate |
| N/A | TC-BOOKING-003 | Booking | Invalid booking date range validation | Not Run | Candidate |

## Cách Cập Nhật Khi Có Bug
Khi phát hiện bug và tạo issue trên Jira, cập nhật dòng liên quan theo format:

| Jira Key | Test Case | Module | Summary | Status | Automation |
|---|---|---|---|---|---|
| BUG-001 | TC-BOOKING-003 | Booking | Invalid date range accepted | Open | Candidate |

## Ghi Chú
- Chỉ thêm Jira key sau khi bug thật đã được tạo.
- Automation status có thể là `Candidate`, `Automated`, `Later`, hoặc `Not Suitable`.
- Evidence chi tiết lưu trong `evidence/api-responses/` và `evidence/screenshots/`.
