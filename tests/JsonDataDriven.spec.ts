import {test , expect} from "@playwright/test"
import fs from 'fs'

// Reading Data from Json data file which is Test Data folder in Playwright Folder
const jsonPath = "Test-Data/data.json"
const data :any = JSON.parse(fs.readFileSync(jsonPath , "utf-8"))

for (const user of data) {

  test(`Login Test - ${user.username}`, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/login");

    await page.locator("#Email").fill(user.username);
    await page.locator("#Password").fill(user.password);
    await page.locator("input[value='Log in']").click();

    if (user.valid) {
      // ✅ Successful login assertions
      await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

      await expect(
        page.getByRole('link', { name: user.username })
      ).toBeVisible();

      await expect(page.locator("a[href='/logout']")).toBeVisible();

    } else {
      // ❌ Failed login assertions
      await expect(page).toHaveURL(/login/);

      await expect(
        page.locator(".validation-summary-errors")
      ).toBeVisible();
    }

  });

}





