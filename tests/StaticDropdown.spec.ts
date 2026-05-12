import { expect, test } from '@playwright/test'

test('Single select dropdown', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    //select tag
    await page.locator('#country').scrollIntoViewIfNeeded()
    await page.locator('#country').selectOption('Canada')
    await page.locator('#country').selectOption('Germany')

    await page.locator('#country').selectOption({label: 'France'})
    await page.locator('#country').selectOption({value: 'japan'})

    await expect(page.locator('#country option')).toHaveCount(10)

    const optionsText= (await page.locator('#country option').allInnerTexts()).map(text => text.trim())

    console.log(optionsText)

    await page.pause()    
})

//Assignment - Automate the colors dropdown


test.only('Sorted dropdown', async ({ page }) => {
    await page.goto('http://127.0.0.1:5500/practice-websites/automationpy.html')

    const dropdownOptions = page.locator('#animals option')

    const optionsText: string[] = (await dropdownOptions.allInnerTexts()).map(text => text.trim())

    //Algorithm
    //Fetch all the animals into an array.
    //If there is no bug in the application, this array is already sorted.
    //Apply the sort() function on the array.
    //Compare this new array with old array. If they are same, the list is really sorted.
    //If they are NOT same, there is a bug in the application.

    const originalList = [...optionsText]
    const sortedList = [...originalList].sort()

    expect(originalList).toEqual(sortedList)        //toBe() for primitives.

    //... means create copy of an array
    //  ...[1, 2, 3]. 777    -> 1, 2, 3 -> [1, 2, 3]    888
})




