import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
 
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
  await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('ofdnsfds@fdsafdss.com');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('sdfsdfsdfdsfdsfds');
  await page.getByRole('button', { name: 'Login' }).click();
});