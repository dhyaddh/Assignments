import { expect, Locator, test } from '@playwright/test'

test('Mouse right click', async ({ page }) => {
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')

    //Normal click
    await page.getByText('right click me', {exact: true}).click()

    //Right click
    await page.getByText('right click me', {exact: true}).click({button: 'right'})

    //await page.pause()
})

test('Mouse double click', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')
    
    await expect(page.locator('#field2')).toBeEmpty()

    await page.getByRole('button', {name: 'Copy Text'}).dblclick()

    //inputValue(), innerText()
    //await page.locator('#field2').inputValue()
    await expect(page.locator('#field2')).toHaveValue('Hello World!', {timeout: 7_000})

    // await page.pause()
})

test('Mouse drag and drop', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const drag = page.locator('#draggable')
    const drop = page.locator('#droppable')

    await drag.dragTo(drop)

    // await page.pause()
})

//Video resolution: 1280 X 720  -> HD
//parameterization - same code, different inputs.
//In testing, parameterization means running the same test scenario with multiple sets of data.
//shorter, cleaner, and easier to maintain.

/*
1. Data directly inside the test

Best for small, simple tests.
Example: you just need 2–3 usernames and passwords to check login.
Advantage: quick, everything is in one place.
Disadvantage: if data changes, you have to edit the test file itself.




*/