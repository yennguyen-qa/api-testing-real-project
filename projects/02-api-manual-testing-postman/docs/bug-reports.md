# API Bug Reports - Restful Booker Platform

## Trạng thái

File này dùng để trình bày bug API đã log trên Jira. Khi đẩy repo lên GitHub, người xem vẫn hiểu được bug, test case liên quan, evidence và trạng thái xử lý mà không cần quyền truy cập Jira.

## BUG-001 - Create booking accepts invalid checkout date

- Jira Key: `YURIHAN-5`
- Jira Link: `https://tunpham411999.atlassian.net/browse/YURIHAN-5`
- Related Test Case: `TC-BOOKING-003`
- Module: Booking API
- Method: `POST`
- Endpoint: `/booking`
- Environment: Restful Booker Platform
- Severity: High
- Priority: Medium
- Status: To Do
- Sprint: API Testing Sprint 1
- Component: API
- Labels: `api-testing`, `manual-api`, `negative-test`, `automation-candidate`
- Automation Candidate: Yes

### Summary

Create booking API accepts an invalid date range when `checkout` is earlier than `checkin`.

### Preconditions

- API server is available.
- Tester has Postman or another API client.
- Request body contains booking dates where checkout date is earlier than checkin date.

### Test Data

```json
{
  "firstname": "Jim",
  "lastname": "Brown",
  "totalprice": 111,
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-05-20",
    "checkout": "2026-05-10"
  },
  "additionalneeds": "Breakfast"
}
```

### Steps To Reproduce

1. Open Postman.
2. Send `POST /booking` with the invalid date range above.
3. Observe the response status code and response body.

### Expected Result

- API should reject the request.
- Response status should be `400 Bad Request`.
- Response body should contain a clear validation message for invalid booking date range.

### Actual Result

- API returns `200 OK`.
- API creates a booking even though `checkout` is earlier than `checkin`.

### Impact

Invalid booking data can be saved, which may affect room availability, booking reports, and downstream validation.

### Evidence

- Response JSON: `evidence/api-responses/YURIHAN-5-response.json`
- Postman screenshot: `evidence/screenshots/YURIHAN-5-postman-result.png`

### Retest Notes

- Retest with valid date range.
- Retest with `checkout` earlier than `checkin`.
- Add this case to regression automation if confirmed as a real defect.

## Bug Report Template

### BUG-XXX - Short bug summary

- Jira Key: `YURIHAN-XXX`
- Jira Link: `https://tunpham411999.atlassian.net/browse/YURIHAN-XXX`
- Related Test Case: `TC-XXXX-XXX`
- Module: Booking/Auth/Room/Message API
- Method: `GET/POST/PUT/PATCH/DELETE`
- Endpoint: `/api/path`
- Environment: Restful Booker Platform
- Severity: Critical/High/Medium/Low
- Priority: Highest/High/Medium/Low
- Status: To Do/In Progress/Done
- Sprint: API Testing Sprint 1
- Component: API/Auth/Test Data/Automation/Defect Triage
- Labels: `api-testing`
- Automation Candidate: Yes/No/Later

### Summary

Short explanation of the defect.

### Preconditions

- API server is available.
- Required test data is prepared.

### Test Data

```json
{
  "sample": "payload"
}
```

### Steps To Reproduce

1. Open Postman.
2. Send request to the target endpoint.
3. Observe status code and response body.

### Expected Result

- Expected API behavior.

### Actual Result

- Actual API behavior.

### Impact

- Business or testing impact.

### Evidence

- Response JSON: `evidence/api-responses/YURIHAN-XXX-response.json`
- Postman screenshot: `evidence/screenshots/YURIHAN-XXX-postman-result.png`

### Retest Notes

- Retest scope after fix.

