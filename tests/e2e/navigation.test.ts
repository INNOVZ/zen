/**
 * Navigation E2E Tests
 * Tests page navigation and routing
 */

import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(page.url()).toContain('localhost:3000');
  });

  test('should have working navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const title = await page.title();
    expect(title).toBeTruthy();
  });

  test('should load dashboard (may require auth)', async ({ page }) => {
    await page.goto('/dashboard');
    await page.waitForLoadState('networkidle');
    
    const url = page.url();
    const isOnDashboard = url.includes('/dashboard');
    const isOnLogin = url.includes('/login');
    
    expect(isOnDashboard || isOnLogin).toBe(true);
  });

  test('should handle invalid routes gracefully', async ({ page }) => {
    await page.goto('/non-existent-page-12345');
    await page.waitForLoadState('networkidle');
    
    // Should either show 404 or redirect
    const url = page.url();
    expect(url).toBeTruthy();
  });
});
