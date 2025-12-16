/**
 * Authentication E2E Tests
 * Tests login, signup, and auth flows
 */

import { test, expect } from '@playwright/test';

test.describe('Authentication', () => {
  test('should load login page', async ({ page }) => {
    await page.goto('/auth/login');
    await page.waitForLoadState('networkidle');
    
    expect(page.url()).toContain('/auth/login');
  });

  test('should have login form elements', async ({ page }) => {
    await page.goto('/auth/login');
    await page.waitForLoadState('networkidle');
    
    // Check for common form elements
    const emailInput = page.locator('input[type="email"], input[name*="email"]');
    const passwordInput = page.locator('input[type="password"]');
    
    // At least one of these should exist
    const hasEmail = await emailInput.isVisible().catch(() => false);
    const hasPassword = await passwordInput.isVisible().catch(() => false);
    
    expect(hasEmail || hasPassword).toBeTruthy();
  });
});
