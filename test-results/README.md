# Test Results & Logs

This directory contains all test artifacts, results, and logs.

## Directory Structure

```
test-results/
├── html-report/              # HTML test report (latest)
├── artifacts/                # Test artifacts (screenshots, videos, traces)
├── results-*.json            # JSON test results (timestamped)
├── junit-*.xml               # JUnit XML results (timestamped, for CI/CD)
└── README.md                 # This file
```

## Test Output Files

### HTML Report
- **Location**: `test-results/html-report/`
- **Description**: Interactive HTML report with test details
- **View**: `npx playwright show-report`

### JSON Results
- **Location**: `test-results/results-YYYY-MM-DD-HH-mm-ss.json`
- **Description**: Machine-readable test results
- **Usage**: CI/CD systems, dashboards, analytics

### JUnit XML
- **Location**: `test-results/junit-YYYY-MM-DD-HH-mm-ss.xml`
- **Description**: Standard test result format for CI/CD
- **Usage**: GitHub Actions, Jenkins, GitLab CI

### Test Artifacts
- **Location**: `test-results/artifacts/`
- **Contents**:
  - Screenshots (on failure)
  - Video recordings (on failure)
  - Playwright traces (on first retry)

## Viewing Results

### View HTML Report
```bash
npx playwright show-report
```

### View Latest JSON Results
```bash
cat test-results/results-*.json | jq '.'
```

### Extract Test Summary
```bash
cat test-results/results-*.json | jq '.stats'
```

## Test Log Location

Test execution logs are generated during test runs:
- **Real-time output**: Visible in terminal during `npm run test:e2e`
- **Structured logs**: Available in JSON results files
- **Detailed traces**: In `test-results/artifacts/` directory

## Cleaning Up

### Remove old results (keep latest 5)
```bash
ls -t test-results/results-*.json | tail -n +6 | xargs rm
```

### Remove all test artifacts
```bash
rm -rf test-results/artifacts/*
```

### Remove all test results
```bash
rm -rf test-results/*
```

## CI/CD Integration

Test results are automatically:
- Generated with timestamp for tracking
- Stored in standard formats (JSON, JUnit XML)
- Available for CI/CD pipelines
- Suitable for test dashboards and analytics

## Analyzing Failures

### Find failed tests in JSON
```bash
cat test-results/results-*.json | jq '.suites[] | select(.tests[]?.status == "failed")'
```

### Count test results
```bash
cat test-results/results-*.json | jq '.stats'
```

### View specific test details
```bash
cat test-results/results-*.json | jq '.suites[].tests[] | {title, status, duration}'
```

## Retention Policy

- **HTML Reports**: Last 1 kept (overwritten)
- **JSON Results**: All timestamped (for historical tracking)
- **JUnit XML**: All timestamped (for CI/CD audit trails)
- **Artifacts**: Only on failure, last 30 days

## Troubleshooting

If test results are not being generated:
1. Check `playwright.config.ts` reporter configuration
2. Verify write permissions in `test-results/` directory
3. Ensure disk space is available
4. Check console output for reporter errors

## Related Files

- Playwright config: `playwright.config.ts`
- Test files: `tests/`
- Test documentation: `tests/README.md`
- Git ignore patterns: `.gitignore` (excludes test-results/)
