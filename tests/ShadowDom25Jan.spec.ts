
//JavaScriptExecutor
/*
It as a special isolated section inside the main DOM.
It’s used to encapsulate part of the webpage - meaning the elements inside it
are protected and cannot be accessed directly from outside.

The purpose of Shadow DOM is mainly security, styling isolation, and better component management
 - it’s heavily used in modern web frameworks like React, Angular, and Web Components.

div, form

Auto-piercing → Works for Shadow DOM
Auto-piercing → Doesn’t work for iframes

For iframes, we use the normal frameLocator() method
*/

import { expect, Locator, test } from '@playwright/test'

//page–->shadow DOM1 —> shadow DOM2 —> input element
test('Shadow DOM 1', async ({ page }) => {
    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/')

    await page.locator('#pizza').fill('Cream')
})

//page—> iframe —> shadow DOM —> input element

test.only('Shadow DOM 2', async ({ page }) => {
    await page.goto('https://selectorshub.com/shadow-dom-in-iframe/')

    await page.frameLocator('iframe#pact[src*="shadow-dom-closed-shadowdom/"]')
        .first()
        .locator('#tea').fill('Masala Tea')
})