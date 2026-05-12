import { test , expect , Locator} from "@playwright/test"

test("Auto Suggest Dropdown" , async({page}) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com")
    await page.locator("input[id='autocomplete']").fill("in")
    const options:Locator= page.locator("ul>li.ui-menu-item")
    const count= await options.count()
    console.log(count)
    
    const optionsText = await options.nth(5).innerText()
    const optionsText1 = await options.nth(5).textContent()  // Inner text always work on Nth method and 
    // also return value of single element text
    
    // const optionsText = await options.allInnerTexts()
    // const optionsText1 = await options.allTextContents()


    console.log(optionsText)
    
    console.log(optionsText1)
    




})