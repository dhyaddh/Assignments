import { test , expect} from "@playwright/test"

// The below test is executed when User has not logged in to Appication 

test("Api Validation" , async({request})=>{
const tagResponse = await request.get("https://conduit-api.bondaracademy.com/api/tags")
console.log(tagResponse) // this will give Raw Output

const tagResponseJson =  await tagResponse.json()  // this will Json response like in Postman
console.log(tagResponseJson)
expect(tagResponse.status()).toBe(200)
expect (tagResponseJson).toHaveProperty('tags')
expect (tagResponseJson.tags).toContain("GitHub")

})

// The below test is to login to aaplication and Post some new request in the application.


