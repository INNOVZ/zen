/**
 * Performance E2E Tests
 * Tests page load times and performance metrics
 */

import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should load homepage within 5 seconds', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have minimal console errors on homepage', async ({ page }) => {
    const errors: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Filter out known/acceptable errors
    const criticalErrors = errors.filter(err => 
      !err.includes('favicon') && 
      !err.includes('hydration') &&
      !err.toLowerCase().includes('warning') &&
      !err.includes('404')
    );
    
    console.log('Critical errors found:', criticalErrors);
    expect(criticalErrors.length).toBeLessThan(5);
  });

  test('should not have unhandled rejections', async ({ page }) => {
    const rejections: string[] = [];
    
    page.on('pageerror', (err) => {
      rejections.push(err.message);
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    expect(rejections.length).toBe(0);
  });
});
