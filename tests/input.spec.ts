import {expect,Locator,test} from '@playwright/test'


test('Working with input text form',async ({page})=>{


   await page.goto("https://testautomationpractice.blogspot.com/")

   //Entering text into input boxes
   const Name :Locator =  page.locator('#name')
   await Name.fill("Mahendra J")

   const email :Locator =  page.locator('#email')
   await email.fill("mahendra@test.com")

   const phone :Locator = await page.locator('#phone')
   phone.fill("1234567890")
     
})