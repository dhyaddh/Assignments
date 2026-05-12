import { test , expect } from '@playwright/test';

test('Fast.com Internet Speed Test', async ({ page }) => {

  // Open Fast.com
  await page.goto('https://fast.com') 

  const speedValue = page.locator('#speed-value');
  const speedUnit = page.locator('#speed-units');

  // Wait until speed text is visible and not empty
  await speedValue.waitFor({ state: 'visible', timeout: 60000 });
  await page.waitForTimeout(20000); // wait for final speed to stabilize

  const speed = await speedValue.innerText();
  const unit = await speedUnit.innerText();

  console.log(`✅ Final Internet Speed: ${speed} ${unit}`);
});


