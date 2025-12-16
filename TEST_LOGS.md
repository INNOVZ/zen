# Test Logs & Results Management

Complete guide for managing test logs and results.

## Overview

Test logs and results are automatically organized in the `test-results/` directory with the following structure:

```
test-results/
├── html-report/              # Interactive HTML test report
├── artifacts/                # Screenshots, videos, traces
├── results-*.json            # JSON test results (timestamped)
├── junit-*.xml               # JUnit XML results (for CI/CD)
└── README.md                 # Results directory documentation
```

## NPM Scripts for Test Results

### View Results

#### View HTML Report
```bash
npm run test:e2e:report
# or
npx playwright show-report
```

#### Check Results Status
```bash
npm run test:results:status
```
Shows:
- Number of result files
- Number of JUnit files
- Number of artifacts
- Size of HTML report

#### View Test Summary
```bash
npm run test:results:summary
```
Shows:
- Total tests run
- Passed/Failed counts
- Skipped count
- Duration

### Manage Results

#### Clean Old Results (Keep Latest 5)
```bash
npm run test:results:clean-old
```

#### Clean All Results
```bash
npm run test:results:clean
```

## Test Execution Logs

### During Test Run
When you run:
```bash
npm run test:e2e
```

You'll see:
1. **Real-time console output** - Tests being executed
2. **Progress indicator** - Number of tests passed/failed
3. **Error messages** - Any test failures with stack traces
4. **Summary** - Final statistics

### Captured Artifacts

Tests automatically capture:

#### Screenshots (on failure)
- Location: `test-results/artifacts/`
- Triggered: When a test assertion fails
- Usage: Visual debugging of failures

#### Videos (on failure)
- Location: `test-results/artifacts/`
- Triggered: When a test fails
- Usage: See what happened during test execution

#### Traces (on first retry)
- Location: `test-results/artifacts/`
- Format: `.zip` files containing trace data
- Usage: Deep debugging with Playwright Inspector

Open traces:
```bash
npx playwright show-trace test-results/artifacts/trace.zip
```

## Test Result Files

### JSON Results (`results-*.json`)
Machine-readable format for analysis and CI/CD integration.

Structure:
```json
{
  "config": { /* playwright config */ },
  "suites": [ /* test suites */ ],
  "stats": {
    "expected": 15,
    "unexpected": 2,
    "flaky": 0,
    "skipped": 0,
    "duration": 45000
  }
}
```

Analyze with jq:
```bash
# View stats only
cat test-results/results-*.json | jq '.stats'

# List all tests
cat test-results/results-*.json | jq '.suites[].tests[]'

# Find failed tests
cat test-results/results-*.json | jq '.suites[] | select(.tests[]?.status == "failed")'
```

### JUnit XML (`junit-*.xml`)
Standard format for CI/CD systems like GitHub Actions, Jenkins, GitLab CI.

Usage:
- Automatically parsed by CI/CD platforms
- Generates test reports in GitHub, GitLab, etc.
- Used for failure notifications and badges

## Configuration

Test logging is configured in `playwright.config.ts`:

```typescript
reporter: [
  ['html', { outputFolder: 'test-results/html-report' }],
  ['json', { outputFile: `test-results/results-${timestamp}.json` }],
  ['junit', { outputFile: `test-results/junit-${timestamp}.xml` }],
  ['list'],
],
outputDir: 'test-results/artifacts',
use: {
  trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
}
```

## Workflow Examples

### After Each Test Run
```bash
# View results
npm run test:results:status

# Check summary
npm run test:results:summary

# View detailed report
npm run test:e2e:report
```

### Debugging a Failed Test
1. View artifacts in HTML report: `npm run test:e2e:report`
2. Check screenshots: Look in `test-results/artifacts/`
3. View video: Play video from artifacts folder
4. Examine trace: `npx playwright show-trace <trace.zip>`

### Cleanup Before New Test Run
```bash
# Keep last 5 runs
npm run test:results:clean-old

# Or start fresh
npm run test:results:clean
```

### CI/CD Integration
- JSON results are processed by dashboards
- JUnit XML is parsed by GitHub Actions, Jenkins, etc.
- HTML report can be published as an artifact

## Troubleshooting

### Test results not being generated
1. Check write permissions: `ls -l test-results/`
2. Ensure disk space: `df -h`
3. Verify config: `cat playwright.config.ts | grep reporter`
4. Check console output for errors

### Can't view HTML report
```bash
# Ensure report exists
ls -la test-results/html-report/

# Rebuild report (run tests first)
npm run test:e2e

# Then view
npm run test:e2e:report
```

### jq not installed (for JSON analysis)
```bash
# macOS
brew install jq

# Linux
sudo apt-get install jq

# Windows (via chocolatey)
choco install jq
```

## Git Configuration

Test results are automatically excluded from git:
```
# .gitignore includes:
test-results/
playwright-report/
.test-logs/
```

This prevents committing large test artifacts while keeping test configuration files.

## Related Documentation

- [Playwright Config](../playwright.config.ts) - Full configuration
- [Test Structure](../tests/README.md) - How tests are organized
- [Test Files](../tests/) - All test code
- [Playwright Documentation](https://playwright.dev/docs/intro)
