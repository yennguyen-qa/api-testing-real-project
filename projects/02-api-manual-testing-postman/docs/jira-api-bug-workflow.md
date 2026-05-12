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

## Chuẩn GitHub khi log bug từ Jira

Khi một bug đã được tạo trên Jira, mọi branch, commit và pull request trên GitHub phải có Jira key để Jira tự liên kết phần Development.

### Branch name

Format:

```text
<type>/<jira-key-lowercase>-<short-description>
```

Ví dụ:

```text
docs/yurihan-5-api-bug-report
bugfix/yurihan-6-invalid-booking-date
test/yurihan-7-auth-token-regression
```

### Commit message

Format:

```text
<JIRA-KEY> <type>: <short action>
```

Ví dụ:

```text
YURIHAN-5 docs: add sample API bug report
YURIHAN-6 test: add booking date validation API test
YURIHAN-7 docs: add Postman evidence for auth bug
```

### Pull request title

PR title dùng cùng format với commit message:

```text
YURIHAN-5 docs: add sample API bug report
```

### Pull request description

Format:

```markdown
## Summary
- Add sample API bug report for YURIHAN-5
- Add Jira API bug workflow documentation

## Jira
- YURIHAN-5
```

### Quy tắc làm việc

1. Tạo bug trên Jira trước.
2. Tạo branch GitHub có Jira key.
3. Commit code/docs/evidence với Jira key trong commit message.
4. Tạo pull request có Jira key trong title và description.
5. Merge PR sau khi kiểm tra file thay đổi.
6. Kiểm tra lại Jira tab Development để xác nhận branch/commit/PR đã link.

## Backlog Scrum đã tạo

| Jira Key | Type | Summary |
|---|---|---|
| `YURIHAN-1` | Epic | `[API Testing] Foundation and Bug Workflow` |
| `YURIHAN-2` | Story | `[API Testing] Prepare Jira bug logging workflow` |
| `YURIHAN-3` | Story | `[API Testing] Define API coverage and test data` |
| `YURIHAN-4` | Task | `[API Testing] Create reusable bug report template` |
