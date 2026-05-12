# Jira API Bug Workflow - YURIHAN

## Mục tiêu

Chuẩn hóa cách log bug API testing vào Jira project `YURIHAN` (`API-TESTING-PROJECT`) theo mô hình Scrum.

## Cấu hình Jira hiện tại

| Hạng mục | Giá trị |
|---|---|
| Jira site | `https://tunpham411999.atlassian.net` |
| Project key | `YURIHAN` |
| Board | `34` |
| Sprint | `API Testing Sprint 1` |
| Issue type dùng để log lỗi | `Bug` |
| Workflow | `To Do` -> `In Progress` -> `Done` |

## Component chuẩn

| Component | Khi dùng |
|---|---|
| `API` | Lỗi endpoint, status code, response body, contract |
| `Auth` | Lỗi login, token, permission, authorization |
| `Test Data` | Lỗi dữ liệu test, fixture, payload, môi trường |
| `Automation` | Lỗi liên quan script automation, regression, smoke |
| `Defect Triage` | Lỗi cần xác minh, phân loại severity/priority, retest |

## Nhãn chuẩn

| Label | Khi dùng |
|---|---|
| `api-testing` | Tất cả bug API |
| `manual-api` | Bug phát hiện bằng Postman/manual execution |
| `automation-candidate` | Bug có thể chuyển thành automated regression test |
| `regression` | Bug cần đưa vào regression suite |
| `smoke` | Bug ảnh hưởng smoke flow |
| `negative-test` | Bug từ negative/validation testing |

## Template log Bug

### Summary

```text
[API][<Module>] <Short actual problem>
```

Ví dụ:

```text
[API][Booking] Create booking accepts invalid checkout date
```

### Description

```text
Test Case:
- TC ID:
- Scenario:
- Suite: Smoke / Regression / Negative / Integration

Environment:
- Base URL:
- Method:
- Endpoint:
- Auth:
- Test data:

Request:
- Headers:
- Body:

Steps To Reproduce:
1. 
2. 
3. 

Expected Result:
- 

Actual Result:
- Status code:
- Response body:

Impact:
- 

Evidence:
- Postman screenshot:
- Response JSON:
- Console/log:

Retest Notes:
- 
```

## Quy ước severity và priority

| Severity | Ý nghĩa |
|---|---|
| `Critical` | Không thể dùng API chính, mất dữ liệu, lỗi bảo mật nghiêm trọng |
| `High` | Luồng chính lỗi, ảnh hưởng nhiều test case hoặc người dùng |
| `Medium` | Lỗi chức năng có workaround |
| `Low` | Lỗi nhỏ, message, format, edge case ít ảnh hưởng |

| Priority | Ý nghĩa |
|---|---|
| `Highest` | Cần xử lý ngay trong sprint |
| `High` | Nên xử lý sớm |
| `Medium` | Xử lý theo kế hoạch sprint |
| `Low` | Có thể xử lý sau |

## Traceability

Mỗi bug cần liên kết tối thiểu:

| Trường | Ví dụ |
|---|---|
| Jira Key | `YURIHAN-10` |
| Test Case | `TC-BOOKING-003` |
| Evidence | `evidence/api-responses/YURIHAN-10-response.json` |
| Automation | `Candidate`, `Automated`, `Later`, `Not Suitable` |

Sau khi tạo bug trên Jira, cập nhật lại file:

```text
projects/02-api-manual-testing-postman/docs/jira-traceability.md
```

## Backlog Scrum đã tạo

| Jira Key | Type | Summary |
|---|---|---|
| `YURIHAN-1` | Epic | `[API Testing] Foundation and Bug Workflow` |
| `YURIHAN-2` | Story | `[API Testing] Prepare Jira bug logging workflow` |
| `YURIHAN-3` | Story | `[API Testing] Define API coverage and test data` |
| `YURIHAN-4` | Task | `[API Testing] Create reusable bug report template` |

