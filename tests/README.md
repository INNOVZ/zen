# Test Suite Structure

This directory contains all tests organized by type and purpose.

## Directory Structure

```
tests/
├── e2e/                          # End-to-End Tests (Playwright)
│   ├── smoke.test.ts             # Quick validation tests
│   ├── auth.test.ts              # Authentication flow tests
│   ├── navigation.test.ts         # Page routing tests
│   └── responsiveness.test.ts     # Responsive design tests
├── performance/                   # Performance Tests
│   └── load-time.test.ts          # Load time and error detection
├── unit/                          # Unit Tests (Jest) - for future use
└── integration/                   # Integration Tests - for future use
```

## Test Files

### E2E Tests (`tests/e2e/`)

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

### Performance Tests (`tests/performance/`)

#### `load-time.test.ts`
Performance and error detection tests.
- Page load time validation (< 5 seconds)
- Console error detection
- Unhandled rejection detection

Run: `npm run test:e2e -- tests/performance/load-time.test.ts`

## Running Tests

### Run all tests
```bash
npm run test:e2e
```

### Run specific test file
```bash
npm run test:e2e -- tests/e2e/auth.test.ts
```

### Run tests in specific directory
```bash
npm run test:e2e -- tests/e2e/
```

### Run tests for specific browser
```bash
npm run test:e2e -- --project=chromium
npm run test:e2e -- --project=firefox
npm run test:e2e -- --project=webkit
```

### Run tests in UI mode
```bash
npm run test:e2e -- --ui
```

### Run tests in debug mode
```bash
npm run test:e2e -- --debug
```

### Run tests in headed mode (see browser)
```bash
npm run test:e2e -- --headed
```

### View test report
```bash
npx playwright show-report
```

## Configuration

The tests are configured in `playwright.config.ts` with:
- **testDir**: `./tests` - Scans all test files recursively
- **Test pattern**: `**/*.test.ts` - Files matching this pattern are tests
- **Timeout**: 300 seconds (5 minutes) for server startup
- **Retries**: 2 retries in CI, 0 in local
- **Workers**: 1 in CI for stability, automatic locally
- **Browsers**: Chromium, Firefox, WebKit, Mobile Chrome, Mobile Safari

## Best Practices

1. **File naming**: Use `.test.ts` suffix for all test files
2. **Test organization**: Group related tests using `test.describe()`
3. **Async/await**: Always use async/await for test functions
4. **Waiting**: Use `waitForLoadState()` to wait for page loads
5. **Selectors**: Use semantic selectors (data-testid, role, etc.)
6. **Error handling**: Catch expected errors with `.catch()`
7. **Cleanup**: Tests should not depend on state from other tests

## Future Test Types

### Unit Tests (`tests/unit/`)
- Component tests with Jest and React Testing Library
- Utility function tests
- Mock external dependencies

### Integration Tests (`tests/integration/`)
- API integration tests
- Database integration tests
- Cross-component interaction tests

## CI/CD Integration

Tests run automatically on:
- Pull requests
- Commits to main branch
- Scheduled runs

See `.github/workflows/` for CI configuration.
