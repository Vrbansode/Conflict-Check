import{expect, test} from '@playwright/test'

test.describe("demo test",()=>{

    test("test 1",async({page})=>{
      await page.goto("https://playwright.dev");
      await page.click("");
      await page.locator("").click({timeout:4000});
      
    })

    test("test 2",({page})=>{

    })
    
})