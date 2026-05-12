import { test, expect, Locator } from '@playwright/test'

test('Inner vs All Inner', async ({ page }) => {

    await page.goto('https://demowebshop.tricentis.com/');

    const producttitle = page.locator("//a[contains(text(),'$25 Virtual Gift Card')][1]");

    console.log(await producttitle.count());
    console.log(await producttitle.innerText());
    console.log(await producttitle.textContent())


    const producttitle1 = page.locator("//a[contains (text() ,'14.1-inch Laptop')]");
     console.log(await producttitle1.count());
    console.log(await producttitle1.innerText());
    console.log(await producttitle1.textContent())


    const producttitle2 = page.locator("(//a[@href='/build-your-cheap-own-computer'])[2]")
    
     console.log(await producttitle2.count());
    console.log(await producttitle2.innerText());
    console.log(await producttitle2.textContent())










}) 