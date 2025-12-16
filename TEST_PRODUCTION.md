# Production vs Development - Test Configuration

## Overview

Tests are configured to be **development-only** and will NOT be included in production builds or deployments.

## Package.json Configuration

### Test Dependencies (devDependencies only)
```json
"devDependencies": {
  "@playwright/test": "^1.40.0",
  "jest": "^29.7.0",
  "ts-node": "^10.9.2",
  "@testing-library/*": "...",
  "@types/*": "..."
}
```

All test-related packages are in `devDependencies`, which means they:
- ✅ Install locally for development: `npm install`
- ❌ NOT installed in production: `npm install --production`
- ❌ NOT included in production builds
- ❌ NOT bundled with the application

## Build Process

### Development
```bash
npm install              # Includes devDependencies
npm run dev             # Full dev environment with tests
npm run test:e2e        # Tests available
```

### Production
```bash
npm install --production # Only dependencies, no devDependencies
npm run build           # Builds without test code
npm start               # Runs production build only
```

## Git Configuration

### Committed to Git (needed for development)
- ✅ `tests/` - All test source code
- ✅ `playwright.config.ts` - Test configuration
- ✅ `jest.config.js` - Jest configuration
- ✅ `TEST_INFRASTRUCTURE.md` - Test documentation
- ✅ `TEST_LOGS.md` - Logging documentation
- ✅ `scripts/manage-tests.sh` - Test utility
- ✅ `package.json` - Includes test scripts

### Ignored by Git (temporary/generated)
- ❌ `test-results/artifacts/` - Screenshots, videos
- ❌ `playwright-report/` - Generated HTML reports
- ❌ `.test-logs/` - Temporary logs
- ❌ `e2e-*.log` - Test logs
- ❌ `coverage/` - Coverage reports

## NPM Ignore (.npmignore)

If the project is published to NPM registry, the `.npmignore` file ensures tests are excluded from the published package.

Prevents:
- Test files being downloaded
- Test dependencies being listed
- Unnecessary files in published version

## Docker/Container Deployment

### Development Image
```dockerfile
RUN npm install              # Includes tests
```

### Production Image
```dockerfile
RUN npm ci --production      # Excludes tests
```

## CI/CD Pipeline

Tests run at the **CI/CD stage**, not on production servers:

```
Development → Git Push → CI/CD Pipeline → Run Tests → Production Deploy
                            ↓
                      (Tests run here, not on prod)
```

## Summary

| Aspect | Development | Production | CI/CD |
|--------|-------------|-----------|-------|
| Test source code | ✅ Available | ❌ Not installed | ✅ Runs |
| Test dependencies | ✅ Installed | ❌ Not installed | ✅ Installed |
| Test artifacts | ✅ Generated | N/A | ✅ Generated |
| Test configuration | ✅ Used | ❌ Ignored | ✅ Used |
| Build size | Normal | Smaller | Normal |

## Best Practices Followed

✅ **Separated test dependencies** - Not in production
✅ **Version control** - Test code committed, artifacts ignored
✅ **NPM package safe** - Won't include tests if published
✅ **Docker-ready** - Can use `npm install --production`
✅ **CI/CD ready** - Tests run in pipeline, not on servers

Your test setup is production-safe! 🚀
