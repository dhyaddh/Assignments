import { expect, Locator, test } from '@playwright/test'

// test('@smoke Test 1', async ({ page }) => {
//     await page.goto('https://google.com')
// })

// test("@smoke @regression Test 2", async ({ page }) => {
//     await page.goto('https://facebook.com')
// })


test("Getbytext", async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await page.getByText("Swag Labs").click()
    await page.pause()
})