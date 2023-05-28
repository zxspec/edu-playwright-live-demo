import { test, expect } from '@playwright/test';

test('credit card checkout', async ({ page }) => {
  await page.goto('https://production-sitegenesis-dw.demandware.net/s/RefArch/home');
  await page.getByRole('button', { name: 'Yes' }).click();
  // that is was missing 
  await page.locator('#newarrivals').hover();
  // 
  await page.locator('#newarrivals-mens').click();
  await page.getByRole('link', { name: 'Checked Silk Tie', exact: true }).first().click();
  await page.getByRole('button', { name: 'Select Color Cobalt' }).click();
  await page.getByRole('button', { name: ' Add to Cart' }).click();

  await (await page.waitForSelector('.minicart')).hover();

  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('link', { name: 'Checkout as Guest' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).click();
  await page.getByRole('textbox', { name: '* First Name' }).fill('test');
  await page.getByRole('textbox', { name: '* First Name' }).press('Tab');
  await page.getByRole('textbox', { name: '* Last Name' }).fill('testoff');
  await page.getByRole('textbox', { name: '* Last Name' }).press('Tab');
  await page.getByRole('textbox', { name: '* Address 1' }).fill('main str 1');
  await page.getByRole('combobox', { name: '* Country' }).selectOption('US');
  await page.getByRole('combobox', { name: '* State' }).selectOption('CA');
  await page.getByRole('textbox', { name: '* City' }).click();
  await page.getByRole('textbox', { name: '* City' }).fill('San Someething');
  await page.getByRole('textbox', { name: '* City' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: '* City' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: '* City' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: '* City' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: '* City' }).press('ArrowLeft');
  await page.getByRole('textbox', { name: '* City' }).fill('San Something');
  await page.getByRole('textbox', { name: '* ZIP Code' }).click();
  await page.getByRole('textbox', { name: '* ZIP Code' }).fill('90210');
  await page.getByRole('textbox', { name: '* Phone Number' }).click();
  await page.getByRole('textbox', { name: '* Phone Number' }).fill('1234567890');
  await page.getByRole('button', { name: 'Next: Payment' }).click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('guest@example.com');
  await page.getByLabel('Card Number').click();
  await page.getByLabel('Card Number').fill('4111 1111 1111 11111');
  await page.getByRole('combobox', { name: '*Expiration Month' }).selectOption('3');
  await page.getByRole('combobox', { name: '*Expiration Year' }).selectOption('2030');
  await page.getByLabel('Security Code').click();
  await page.getByLabel('Security Code').fill('777');
  await page.getByRole('button', { name: 'Next: Place Order' }).click();

  // wait for page to load
  await expect(page).toHaveURL(/.*stage=placeOrder/); 
  await page.getByRole('button', { name: 'Place Order' }).click();
  //  or
  // const button = await page.waitForSelector('button.place-order');
  // await button.scrollIntoViewIfNeeded();
  // await button.click();

  await page.getByRole('heading', { name: 'Thank You', exact: true }).click();
});
