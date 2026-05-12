import { chromium, expect, firefox, test } from '@playwright/test'

//Browser -> Browser Context(Unique profile) -> One or more pages

test('Handle multiple pages', async () => {
    await firefox
    const browser = await chromium.launch()
    const context = await browser.newContext()

    //These are like two separate tabs open in an incognito window,
    //but within the same session. 
    const page1 = await context.newPage()
    const page2 = await context.newPage()

    //multi-tab scenario vs multi user scenario
    
    await page1.pause()
})

//Multi user
test('Handle multiple pages - chromium1', async () => {
    const browser = await chromium.launch()

    //User1
    const context1 = await browser.newContext()     //1st profile
    const page1 = await context1.newPage()
    await page1.goto('https://conduit.bondaracademy.com/login')
    await page1.getByPlaceholder('Email').fill('piyushtest@test.com')
    await page1.getByPlaceholder('Password').fill('123456')
    await page1.getByRole('button', {name: 'Sign in'}).click()

    //User2
    const context2 = await browser.newContext()     //2nd profile
    const page2 = await context2.newPage()
    await page2.goto('https://conduit.bondaracademy.com/login')
    
    await page1.pause()
})

//Multi tab scenario
test('Handle multiple pages - chromium2', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log(`Number of pages created: ${allPages.length}`)
    
    await page1.goto('https://conduit.bondaracademy.com/login')
    await page1.getByPlaceholder('Email').fill('piyushtest@test.com')
    await page1.getByPlaceholder('Password').fill('123456')
    await page1.getByRole('button', {name: 'Sign in'}).click()

    await page2.goto('https://conduit.bondaracademy.com/login')
    
    await page2.pause()
})

test('Handle OrangeHRML pages - NOT IDEAL', async () => {
    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log(`Number of pages created: ${allPages.length}`)
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    await page2.goto('https://www.orangehrm.com/')
    await expect(page2).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    
    await page2.pause()
})

test.only('Handle OrangeHRML pages', async ({browser}) => {
    const context = await browser.newContext()

    const page1 = await context.newPage()
    
    await page1.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await expect(page1).toHaveTitle('OrangeHRM')

    const pagePromise = context.waitForEvent('page');
    await page1.getByRole('link', {name: 'OrangeHRM, Inc'}).click()

    const newPage = await pagePromise;
    
    await expect(newPage).toHaveTitle('Human Resources Management Software | HRMS | OrangeHRM')
    
    // await newPage.waitForTimeout(5000)
    // await page1.close()
    await page1.bringToFront()
    await newPage.pause()
})