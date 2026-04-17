import {test, expect} from '@playwright/test';

test('qbank login page', async ({page}) => {
    await page.goto('https://qbank.accelq.com/');
    await page.getByPlaceholder('Username').fill('qbankadmin');
    await page.getByPlaceholder('Password').fill('qbTrnPass1&');
    await page.getByRole('heading', {name: 'Login'}).click();
    //await expect(page.getByRole('heading', {name: 'Dashboard'})).toBeVisible(); 
    await expect(page.getByText('Account Summary')).toBeVisible();
});