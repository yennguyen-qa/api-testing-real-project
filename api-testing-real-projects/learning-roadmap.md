# Lộ Trình Học Tập

Tài liệu này mô tả kế hoạch phát triển portfolio QA theo từng giai đoạn.

## Giai Đoạn 1: Nền Tảng Manual Testing
Mục tiêu:
- Xây dựng nền tảng kiểm thử phần mềm vững chắc.

Trọng tâm:
- SDLC/STLC
- Functional và non-functional testing
- Severity và priority
- Bug life cycle

Kết quả đầu ra:
- Ghi chú học tập và checklist cá nhân
- Mẫu tài liệu kiểm thử cơ bản

Dấu hiệu hoàn thành:
- Có thể viết test scenario và test case rõ ràng cho module đơn giản.

## Giai Đoạn 2: Dự Án Web Manual Testing
Mục tiêu:
- Thực hiện đầy đủ vòng đời manual testing cho một ứng dụng web.

Trọng tâm:
- Requirement analysis
- Test plan
- Test scenarios
- Test cases
- Bug reports
- Test summary report

Kết quả đầu ra:
- Tài liệu trong `projects/01-ecommerce-web-manual-testing/docs/`
- Bằng chứng trong `evidence/`

Dấu hiệu hoàn thành:
- Có bộ tài liệu kiểm thử manual đầy đủ, có thể review độc lập.

## Giai Đoạn 3: API Manual Testing Với Postman
Mục tiêu:
- Thiết kế và thực thi kiểm thử API manual chuyên nghiệp.

Trọng tâm:
- Phân tích endpoint
- Validate request/response
- Negative test
- Tổ chức Postman collection và environment

Kết quả đầu ra:
- Tài liệu trong `projects/02-api-manual-testing-postman/docs/`
- Tài nguyên Postman trong `postman/`
- Evidence response trong `evidence/`

Dấu hiệu hoàn thành:
- Bao phủ API nhất quán, có thể tái sử dụng qua collection.

## Giai Đoạn 4: API Automation Với Playwright + TypeScript
Mục tiêu:
- Xây dựng nền tảng automation API có thể mở rộng.

Trọng tâm:
- Thiết lập Playwright cho API testing
- Cấu trúc API client tái sử dụng
- Quản lý test data
- Schema validation cơ bản
- Báo cáo và lệnh chạy test

Kết quả đầu ra:
- Test tự động đầu tiên tại `projects/03-api-automation-playwright-typescript/tests/api/`
- Cấu trúc `src/` cho client, data, schema, util

Dấu hiệu hoàn thành:
- Chạy được bộ API smoke test ổn định, có báo cáo rõ ràng.

## Giai Đoạn 5: UI Automation Với Playwright + TypeScript
Mục tiêu:
- Tự động hóa các luồng UI chính bằng cấu trúc dễ bảo trì.

Trọng tâm:
- Chiến lược locator
- Page Object Model
- Quản lý test data
- Assertion ổn định và retry hợp lý

Kết quả đầu ra:
- Bộ test UI đầu tiên tại `projects/04-ui-automation-playwright-typescript/tests/ui/`
- Page object tái sử dụng trong `pages/`

Dấu hiệu hoàn thành:
- Các luồng UI quan trọng chạy ổn định qua nhiều lần chạy test.

## Giai Đoạn 6: Tích Hợp CI/CD
Mục tiêu:
- Đưa test tự động vào pipeline CI/CD.

Trọng tâm:
- Thiết kế workflow GitHub Actions
- Cấu trúc pipeline Azure DevOps
- Chiến lược trigger (push, PR, nightly)
- Publish test artifacts

Kết quả đầu ra:
- File cấu hình trong `projects/05-ci-cd-integration/`
- Workflow liên kết trong `.github/workflows/`

Dấu hiệu hoàn thành:
- Test tự động chạy được trên pipeline, có artifact để review.

## Giai Đoạn 7: Hoàn Thiện Portfolio
Mục tiêu:
- Tối ưu repository để sẵn sàng cho recruiter/interviewer.

Trọng tâm:
- Chất lượng README và khả năng điều hướng
- Chuẩn hóa format tài liệu
- Báo cáo tiến độ trung thực
- Lịch sử commit rõ ràng

Kết quả đầu ra:
- Tài liệu được rà soát và hoàn thiện xuyên suốt các project
- Tổng kết kỹ năng và bài học rút ra

Dấu hiệu hoàn thành:
- Portfolio dễ review, có chiều sâu kỹ thuật và sẵn sàng phỏng vấn.
