import { test, expect } from '@playwright/test';

test('Authenticate Pop-Up', async ({ browser }) => {

  const context = await browser.newContext({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });

  const page = await context.newPage();

  await page.goto('https://the-internet.herokuapp.com/basic_auth');

  await expect(page.locator('p'))
    .toContainText('Congratulations');

});