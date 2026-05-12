import { test, expect, chromium } from '@playwright/test'

test.describe("Group1", async() => {

    test('Test Multiple Tab', async () => {

        const browser = await chromium.launch()
        const context = await browser.newContext()

        const Parentpage1 = await context.newPage()
        const Parentpage2 = await context.newPage()

        await Parentpage1.goto('https://playwright.dev/')
        expect(Parentpage1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")

        await Parentpage2.goto('https://www.google.com/')
        expect(Parentpage2).toHaveTitle('Google')

        await Parentpage1.waitForTimeout(2000)
        await Parentpage2.waitForTimeout(2000)

    })
});


    test.only('Handle New Tab' , async({})=> {

        const browser = await chromium.launch()
        const context = await browser.newContext()
        const Parentpage= await context.newPage()



        await Parentpage.goto("https://www.leafground.com/window.xhtml")

        // const pagePromise = context.waitForEvent('page');
        // await Parentpage.locator("button[id='j_idt88:new']").click()

        const [ChildPage]= await Promise.all([context.waitForEvent('page') , Parentpage.locator("button[id='j_idt88:new']").click()])

        // Approach 1 ( Capture the Page title)

        console.log("Parent Page to Have title" , await Parentpage.title())
        console.log("Child Page to Have title" , await ChildPage.title())


        // Approach 2 ( Using Context.pages() Method which will return Array)

        const pages = context.pages()
        console.log("No. of Pages" ,  pages.length)
        console.log("Parent Page to Have title" , await pages[0].title())
        console.log("Child Page to Have title" , await pages[1].title())

    })


    test('Handle PopUp', async ({ }) => {

        const browser = await chromium.launch()
        const context = await browser.newContext()
        const page = await context.newPage()

        await page.goto("https://www.leafground.com/window.xhtml")

        // page.waitForEvent("popup")
        // await page.locator("//span[contains(text(),'Open with delay')]").click();

        const [childPage] = await Promise.all([page.waitForEvent("popup"),
        await page.locator("//span[contains(text(),'Open with delay')]").click()])

        const PopupWindows = context.pages()
        console.log("No. of Pages Opened: ", PopupWindows.length)
        console.log(await PopupWindows[0].title())
        console.log(await PopupWindows[1].title())
        console.log(await PopupWindows[2].title())


        await page.pause()







    })


