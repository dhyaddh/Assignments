import { test, expect } from '@playwright/test'

test('Static table', async ({ page }) => {

    // The below code is to capture and verify the Rows count under Static table

    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    let TableLocator = page.locator("table[name='BookTable'] tbody")
    await expect(TableLocator).toBeVisible()

    let RowLocator = TableLocator.locator('tr')
    await expect(RowLocator).toHaveCount(7)

    let RowCount = await RowLocator.count()
    expect(RowCount).toBe(7)
    console.log(RowCount)

    // The below code will capture and verify the count Columns under Static table 

    let ColumnLocator = RowLocator.locator('th')
    await expect(ColumnLocator).toHaveCount(4)

    let ColumnCount = await ColumnLocator.count()
    expect(ColumnCount).toBe(4)
    console.log(ColumnCount)

    // Reading Second Row data and Print the same in Console

    let SecondRow = RowLocator.nth(2).locator('td')

    let SecondRawData = await SecondRow.allInnerTexts()
    console.log(SecondRawData)
    await expect (SecondRow).toHaveText([ 'Learn Java', 'Mukesh', 'Java', '500' ])
    
    


})



