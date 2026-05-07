# API Test Scenarios - Restful Booker Platform

## Booking Module
| Scenario ID | Scenario | Priority | Type | Status |
|---|---|---|---|---|
| TS-BOOKING-001 | Verify booking can be created with valid data | High | Positive | Planned |
| TS-BOOKING-002 | Verify booking cannot be created with missing required guest field | High | Negative | Planned |
| TS-BOOKING-003 | Verify booking cannot be created with invalid date range | High | Negative | Planned |
| TS-BOOKING-004 | Verify booking details can be retrieved by booking ID | Medium | Positive | Planned |
| TS-BOOKING-005 | Verify response body matches submitted booking data | High | Integration | Planned |

## Room Module
| Scenario ID | Scenario | Priority | Type | Status |
|---|---|---|---|---|
| TS-ROOM-001 | Verify room list can be retrieved successfully | High | Positive | Planned |
| TS-ROOM-002 | Verify room detail contains required room information | Medium | Positive | Planned |
| TS-ROOM-003 | Verify room API data is consistent with web room listing | Medium | Integration | Planned |

## Auth Module
| Scenario ID | Scenario | Priority | Type | Status |
|---|---|---|---|---|
| TS-AUTH-001 | Verify login succeeds with valid credentials | High | Positive | Planned |
| TS-AUTH-002 | Verify login fails with invalid credentials | High | Negative | Planned |
| TS-AUTH-003 | Verify protected endpoint cannot be accessed without valid authentication | High | Security/Negative | Planned |

## Message/Contact Module
| Scenario ID | Scenario | Priority | Type | Status |
|---|---|---|---|---|
| TS-MESSAGE-001 | Verify message can be submitted with valid data | Medium | Positive | Planned |
| TS-MESSAGE-002 | Verify message cannot be submitted with missing required fields | High | Negative | Planned |
| TS-MESSAGE-003 | Verify invalid email format is handled correctly | Medium | Negative | Planned |

## Ghi Chú
Tất cả scenario hiện ở trạng thái Planned. Anh sẽ cập nhật trạng thái sau khi thực thi test bằng Postman.
