 import { expect, test } from '@playwright/test'

// test.beforeEach(async ({ page }) => {
//     await page.goto('https://playground.bondaracademy.com')
//     await page.getByText('Forms').click()
// })

test('Assertions', async ({ page }) => {
    await page.goto('https://playground.bondaracademy.com')
    await page.getByText('Forms').click()
    await page.getByText('Form Layouts').click()

    const basicFormButton = page.locator('nb-card', {hasText: 'Basic form'}).getByRole('button')
    const text = await basicFormButton.textContent()
    expect(text).toBe('Submit')

    //1. General/Generic Assertion
    //There is no timeout for generic assertions/
    const value: number = 5
    expect(value).toEqual(5)

    //2. Locator Assertions(we provide a locator)
    //The default timeout is 5 seconds.

    await expect(basicFormButton).toHaveText('Submit1')

    //Hard Assertions
    //Soft Assertions
})

/*
Use the "not" to invert any assertion
Locator Assertions(By default they are HARD)
1. expect(page).toHaveURL()        -> Page has a particular URL
2. expect(page).toHaveTitle()       -> Page has a specific title
3. expect(locator).toBeVisible()    -> Element is visible
4. expect(locator).toBeEnabled()    -> Element is enabled
5. expect(locator).toBeDisabled()    -> Element is disabled
6. expect(locator).toBeChecked()    -> Element(checkboxes/radio buttons) is checked
7. expect(locator).toHaveAttribute()    -> Element has a specific attribute
8. expect(locator).toHaveText()    -> Element text exact match(HTML text)
9. expect(locator).toContainText()    -> Element contains text, partial match(HTML text)
10. expect(locator).toHaveValue()    -> value attribute. inputValue()
11. expect(locator).toHaveCount()    -> List of elements has a given length

To convert any hard assertion to a soft assertion, just use expect.soft(). 
For every hard assertion, there is an equivalent soft assertion. 
*/

test('Assertions1', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')

    await expect.soft(page).toHaveURL('https://demo.nopcommerce.com/register1')
    //await expect(page).toHaveURL('/register')       //Does not work

    await expect(page).toHaveURL(/\/register/)      //Partial match

    await expect(page).not.toHaveURL('https://google.com')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    await expect(page).toHaveTitle(/Register/)

    const registerButton = page.locator('#register-button')
    await expect(registerButton).toHaveAttribute('type', 'submit')

})




