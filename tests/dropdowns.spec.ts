import {test,expect, Locator} from '@playwright/test'


test('working with dropdowns', async({page})=>{


   await page.goto("https://testautomationpractice.blogspot.com/")

   //select a value
    await page.getByLabel('country').selectOption('India')

    //get the count of options.
    const totalOptions = await page.locator('#country>option').count()

    console.log("Total values :",totalOptions)

    //print All options

   let AllOptions : string[]= await page.locator('#country>option').allInnerTexts()
   for (let option of AllOptions)
   {
       console.log(option)
   }

   //verify An option is availabe all not

     page.locator('#country > option', { hasText: 'India' })

})