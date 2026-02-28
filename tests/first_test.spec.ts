import {test,expect} from '@playwright/test'



test("First Test", ()=>{
    console.log("This is my first test...")
})


test("Verify Page Title",async({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

   await expect(page).toHaveTitle("OrangeHRM");

   let title:string =await page.title();
   
    console.log("The page title is ",title);
 
})