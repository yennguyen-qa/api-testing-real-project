# API Manual Test Cases - Restful Booker Platform

## TC-BOOKING-001 - Create booking with valid data
- Scenario ID: TS-BOOKING-001
- Module: Booking
- Endpoint: TBD after Postman collection review
- Priority: High
- Type: Positive
- Automation Candidate: Yes
- Execution Status: Not Run

### Preconditions
- API server is available.
- Valid room/test data is available.

### Test Data
```json
{
  "firstname": "Yuri",
  "lastname": "Han",
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-06-01",
    "checkout": "2026-06-03"
  }
}
```

### Steps
1. Open Postman.
2. Send booking creation request with valid body.
3. Check status code.
4. Check response body.
5. Save response JSON and screenshot as evidence.

### Expected Result
- API returns success status.
- Booking ID or booking reference is generated.
- Response body contains submitted booking data.

### Evidence
- To be updated after execution.

## TC-BOOKING-002 - Create booking with missing required guest field
- Scenario ID: TS-BOOKING-002
- Module: Booking
- Endpoint: TBD after Postman collection review
- Priority: High
- Type: Negative
- Automation Candidate: Yes
- Execution Status: Not Run

### Preconditions
- API server is available.

### Test Data
```json
{
  "lastname": "Han",
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-06-01",
    "checkout": "2026-06-03"
  }
}
```

### Steps
1. Open Postman.
2. Send booking creation request with missing `firstname`.
3. Check status code.
4. Check error response.
5. Save response JSON and screenshot as evidence.

### Expected Result
- API rejects the request.
- API returns proper validation status code.
- Response body explains the missing required field.

### Evidence
- To be updated after execution.

## TC-BOOKING-003 - Create booking with invalid date range
- Scenario ID: TS-BOOKING-003
- Module: Booking
- Endpoint: TBD after Postman collection review
- Priority: High
- Type: Negative
- Automation Candidate: Yes
- Execution Status: Not Run

### Preconditions
- API server is available.

### Test Data
```json
{
  "firstname": "Yuri",
  "lastname": "Han",
  "depositpaid": true,
  "bookingdates": {
    "checkin": "2026-06-05",
    "checkout": "2026-06-01"
  }
}
```

### Steps
1. Open Postman.
2. Send booking creation request with checkout date earlier than checkin date.
3. Check status code.
4. Check error response.
5. Save response JSON and screenshot as evidence.

### Expected Result
- API rejects invalid date range.
- API returns proper validation status code and message.

### Evidence
- To be updated after execution.

## Ghi Chú
Endpoint và expected status code sẽ được cập nhật chính xác sau khi anh review Postman collection/API docs và thực thi test thật.
