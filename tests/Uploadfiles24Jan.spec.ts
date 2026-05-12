import { expect, test } from '@playwright/test'

test('Upload Single File', async ({ page }) => {
    await page.goto('https://recruiter.foundit.in/create-profile-page/')

    // await page.locator('#img-icon').click({force: true})
    await page.locator('#img-icon').click({timeout: 12000})

    await page.locator('#imgInp').setInputFiles('uploadFiles/JPG_100kB.jpg')

    await page.pause()
})

//Assignment - 
//https://davidwalsh.name/demo/multiple-file-upload.php
//Upload single file and then upload multiple files
//Solution - Provide an array of strings for multiple files.

//Auto-waiting functionality is applicable for Playwright actions(30)
//& assertions(5 sec)

//Timeouts


