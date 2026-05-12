import { test , expect , Locator} from '@playwright/test'

test( 'Hidden Dropdown Options' ,  async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
     

    //Login Steps 
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[placeholder="Password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()

    // Click on PIM
    await page.getByText('PIM').click()


    // Click on Job title Dropdown 
    await page.locator("form i").nth(1).click()
    await page.waitForTimeout(3000)

    // Capture All list data from the dropdown
    
    const Options:Locator= page.locator("div[role='listbox'] span")
    const optionsValue:String[] = await Options.allInnerTexts()
    


}
)


let str = "Welcome to Jungle";

let reversed = str.split("").reverse().join("");

console.log(reversed);

let Word = "Welcome to Jungle";

let reversed1 = Word.split("").reverse().join("");

console.log(reversed1);

let word1 = "Welcome to interview"

let reversed2 = word1.split("").reverse().join("");

console.log(reversed2);
