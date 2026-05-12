import { test, expect } from '@playwright/test'

// test.describe('Searching Multiple Items' , ()=>{})

const searchItems: string[] = ['Laptop', 'Gift Card', 'Smartphone', 'Books']

test.describe('Searching Multiple Items', () => {

    for (const items of searchItems) {
        test(`Search Items ${items}`, async ({ page }) => {

            await page.goto("https://demowebshop.tricentis.com/")
            await page.locator("input[id='small-searchterms']").fill(items)
            await page.locator("input[value='Search']").click()

        })
    }
})


// Now Using Parameterization for Login functionality with multiple Valid and Invalid Inputs


const testData = [
  { username: "Deepak.kumar@gmail.com", password: "123456", valid: true },
  { username: "Deepak.Singh@gmail.com", password: "123456", valid: true }, // ✅ FIXED
  { username: "Deepak.kumar1@gmail.com", password: "123456", valid: false }
];

for (const data of testData) {

  test(`Login Test - ${data.username}`, async ({ page }) => {

    await page.goto("https://demowebshop.tricentis.com/login");

    await page.locator("#Email").fill(data.username);
    await page.locator("#Password").fill(data.password);
    await page.locator("input[value='Log in']").click();

    if (data.valid) {
      // ✅ Successful login assertions
      await expect(page).toHaveURL("https://demowebshop.tricentis.com/");

      await expect(
        page.getByRole('link', { name: data.username })
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

