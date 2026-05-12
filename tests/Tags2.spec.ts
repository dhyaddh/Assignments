import { expect, Locator, test } from '@playwright/test'

test('@smoke Test 1', async ({ page }) => {
    await page.goto('https://google.com')
})

test('@regression Test 2', async ({ page }) => {
    await page.goto('https://facebook.com')
})