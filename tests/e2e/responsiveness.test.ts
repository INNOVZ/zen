/**
 * Responsiveness E2E Tests
 * Tests responsive design across different viewports
 */

import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 375, height: 667 },
];

test.describe('Responsiveness', () => {
  viewports.forEach(({ name, width, height }) => {
    test(`should work on ${name} (${width}x${height})`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      
      expect(page.url()).toContain('localhost:3000');
      
      // Check that page is not showing horizontal scroll
      const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
      const viewportWidth = width;
      
      expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 1); // +1 for rounding
    });
  });

  test('should be readable on small screens', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check that text is visible and not too small
    const bodyText = await page.evaluate(() => {
      const allElements = document.querySelectorAll('*');
      let smallElements = 0;
      allElements.forEach(el => {
        const fontSize = window.getComputedStyle(el).fontSize;
        const size = parseFloat(fontSize);
        if (size < 12) smallElements++;
      });
      return smallElements;
    });
    
    // Some small elements are okay, but not too many
    expect(bodyText).toBeLessThan(50);
  });
});
