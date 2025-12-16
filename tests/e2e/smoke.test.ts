/**
 * Smoke Tests - Quick validation that the app loads
 * Use this to quickly check if the basic app is working
 */

import { test, expect } from '@playwright/test';

test.describe('Smoke Tests', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(page.url()).toContain('localhost:3000');
  });
});
