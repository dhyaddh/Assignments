// Dialog is handled by Javascript Event Listener Fixture provided by Playwright.
// It is not a web bases Element . It is being developed by Programming Language.
// Diaslog are comprised into 3 ways( Alert , Confirmation and Prompt)

import {test, expect} from "@playwright/test"

// test ("Handle Alert" , async({page}) =>{

// await page.goto("https://practice.expandtesting.com/js-dialogs?utm_source=chatgpt.com")

// // Register a Dialog event given by Playwright and verifying the same 
// page.on('dialog', async (dialog) => {
//     console.log("Dialog type is:" , dialog.type())
//     expect(dialog.type()).toContain("alert")
//     console.log("dialog message contains :", dialog.message())
//     expect(dialog.message()).toContain("I am a Js Alert");
//     await dialog.accept()
// });
// await page.locator("#js-alert").click()
// })

test("Handle Confirm" , async({page})=>{

    await page.goto("https://practice.expandtesting.com/js-dialogs?utm_source=chatgpt.com")

    page.on("dialog" , async(dialog)=>{
        console.log("dialog type is :" , dialog.type())
        expect(dialog.type()).toContain("confirm")
        console.log("dialog meassage is:" , dialog.message())
        expect(dialog.message()).toContain("I am a Js Confirm")
        await dialog.dismiss()
   })
    await page.locator("#js-confirm").click()

})
