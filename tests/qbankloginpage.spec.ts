import { test, expect } from '@playwright/test';

test('qbank login page', async ({ page }) => {
  await page.goto('https://qbankloginpage.com/');
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Qbank Login Page/);
});