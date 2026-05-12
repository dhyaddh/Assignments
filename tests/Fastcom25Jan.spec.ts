import { test, expect } from '@playwright/test';

test('Check internet speed on Fast.com', async ({ page }) => {

  await page.goto('https://fast.com');

  await page.waitForTimeout(10000);

  const speed = await page.locator('#speed-value').textContent();

  console.log("Internet Speed is:", speed, "Mbps");

  await expect(page.locator('#speed-value')).toBeVisible();
  await page.pause()

})



test('Fast.com speed test1', async ({ page }) => {

  await page.goto('https://fast.com');

  await expect(page.locator('#speed-value')).toBeVisible();

  const speed = await page.locator('#speed-value').textContent();

  console.log("Speed:", speed);

});