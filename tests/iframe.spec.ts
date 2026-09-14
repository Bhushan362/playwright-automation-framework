import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/default.asp');
  await page.getByRole('link', { name: 'HTML Iframes' }).click();
  await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('link', { name: 'Learn HTML Now »' }).click();
  
});