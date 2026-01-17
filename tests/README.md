# Test Suite Structure

This directory contains all tests organized by type and purpose in a unified location.

## Directory Structure

```
tests/
├── unit/                          # Unit Tests (Jest)
│   ├── components/               # Component unit tests
│   │   ├── ChatMessage.test.tsx
│   │   └── calendar/
│   │       └── AppointmentsCalendar.test.tsx
│   └── api/                      # API client unit tests
│       ├── api.simple.test.ts
│       └── calendar.test.ts
├── e2e/                          # End-to-End Tests (Playwright)
│   ├── smoke.test.ts             # Quick validation tests
│   ├── auth.test.ts              # Authentication flow tests
│   ├── navigation.test.ts         # Page routing tests
│   └── responsiveness.test.ts     # Responsive design tests
├── performance/                   # Performance Tests
│   └── load-time.test.ts          # Load time and error detection
├── load-test.ts                   # Load testing suite
├── utils/                         # Test utilities and helpers
│   ├── test-conversation.ts      # Conversation API test utility
│   └── api-test.ts               # Backend connection test utility
└── README.md                      # This file
```

## Test Categories

### Unit Tests (`unit/`)

Tests for individual components and API clients in isolation.

#### Component Tests (`unit/components/`)

- **ChatMessage.test.tsx**: Tests for the ChatMessage component
  - Rendering behavior
  - Memoization
  - Button interactions
  - Source display

- **calendar/AppointmentsCalendar.test.tsx**: Tests for the AppointmentsCalendar component
  - Loading states
  - Error handling
  - Event rendering
  - API integration

#### API Tests (`unit/api/`)

- **api.simple.test.ts**: Tests API module structure and basic functionality
  - Method validation
  - Response structure
  - Error handling

- **calendar.test.ts**: Tests calendar API client
  - Parameter handling
  - Error handling
  - Response structure

Run unit tests: `npm test` or `npm run test:unit`

### E2E Tests (`e2e/`)

End-to-end tests using Playwright that test complete user flows.

#### `smoke.test.ts`

Quick smoke tests to validate the app loads.

- Homepage loads successfully

Run: `npm run test:e2e -- tests/e2e/smoke.test.ts`

#### `auth.test.ts`

Authentication and login flow tests.

- Login page loads
- Login form elements present

Run: `npm run test:e2e -- tests/e2e/auth.test.ts`

#### `navigation.test.ts`

Page routing and navigation tests.

- Homepage loads
- Navigation works
- Dashboard page handling
- Invalid routes handled gracefully

Run: `npm run test:e2e -- tests/e2e/navigation.test.ts`

#### `responsiveness.test.ts`

Responsive design tests across devices.

- Desktop (1920x1080)
- Laptop (1366x768)
- Tablet (768x1024)
- Mobile (375x667)
- Text readability validation

Run: `npm run test:e2e -- tests/e2e/responsiveness.test.ts`

### Performance Tests (`performance/`)

#### `load-time.test.ts`

Performance and error detection tests.

- Page load time validation (< 5 seconds)
- Console error detection
- Unhandled rejection detection

Run: `npm run test:e2e -- tests/performance/load-time.test.ts`

### Load Tests

#### `load-test.ts`

Load testing suite with multiple scenarios.

- Concurrent user simulation
- Response time monitoring
- Error rate tracking

Run: `npm run test:load`

### Test Utilities (`utils/`)

Helper functions and utilities for testing.

- **test-conversation.ts**: Utility for testing conversation API
- **api-test.ts**: Utility for testing backend connection

## Running Tests

### Run all tests

```bash
# All unit tests
npm test

# All E2E tests
npm run test:e2e

# All tests
npm run test:all
```

### Run specific test category

```bash
# Unit tests only
npm test

# E2E tests only
npm run test:e2e

# Load tests
npm run test:load
```

### Run specific test file

```bash
# Unit test
npm test -- tests/unit/components/ChatMessage.test.tsx

# E2E test
npm run test:e2e -- tests/e2e/auth.test.ts
```

### Run tests in specific directory

```bash
npm run test:e2e -- tests/e2e/
npm test -- tests/unit/api/
```

### Run with coverage

```bash
npm test -- --coverage
```

### Run tests for specific browser (E2E)

```bash
npm run test:e2e -- --project=chromium
npm run test:e2e -- --project=firefox
npm run test:e2e -- --project=webkit
```

### Run tests in UI mode (E2E)

```bash
npm run test:e2e -- --ui
```

### Run tests in debug mode (E2E)

```bash
npm run test:e2e -- --debug
```

### Run tests in headed mode (E2E)

```bash
npm run test:e2e -- --headed
```

### View test report (E2E)

```bash
npx playwright show-report
```

## Configuration

### Jest Configuration

Unit tests are configured in `jest.config.js` with:

- **testMatch**: `**/tests/**/*.(test|spec).(js|jsx|ts|tsx)`
- **setupFilesAfterEnv**: `jest.setup.js`
- **testEnvironment**: `jest-environment-jsdom`
- **moduleNameMapper**: Maps `@/` to `src/`

### Playwright Configuration

E2E tests are configured in `playwright.config.ts` with:

- **testDir**: `./tests` - Scans all test files recursively
- **Test pattern**: `**/*.test.ts` - Files matching this pattern are tests
- **Timeout**: 300 seconds (5 minutes) for server startup
- **Retries**: 2 retries in CI, 0 in local
- **Workers**: 1 in CI for stability, automatic locally
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari

## Best Practices

1. **File naming**: Use `.test.ts` or `.test.tsx` suffix for all test files
2. **Test organization**: Group related tests using `describe()` blocks
3. **Async/await**: Always use async/await for test functions
4. **Waiting**: Use `waitForLoadState()` to wait for page loads (E2E)
5. **Selectors**: Use semantic selectors (data-testid, role, etc.)
6. **Error handling**: Catch expected errors appropriately
7. **Cleanup**: Tests should not depend on state from other tests
8. **Location**: All test files should be in the `tests/` directory

## Migration Notes

All test files have been consolidated from scattered locations:

- Component tests moved from `src/components/__tests__/` → `tests/unit/components/`
- API tests moved from `src/app/api/__tests__/` → `tests/unit/api/`
- Test utilities moved from `src/app/api/` → `tests/utils/`
- E2E tests already in `tests/e2e/` (no change)
- Performance tests already in `tests/performance/` (no change)

Import paths have been updated to use the `@/` alias for source files.

## CI/CD Integration

Tests run automatically on:

- Pull requests
- Commits to main branch
- Scheduled runs

See `.github/workflows/` for CI configuration.
