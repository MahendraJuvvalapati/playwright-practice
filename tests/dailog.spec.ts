import {test,expect} from '@playwright/test'



test('Working with Alerts.',async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    //playwright automatically dismiss dialogues..
    page.on('dialog', dialog => 
        {
            console.log(dialog.message())
            console.log(dialog.type)

            dialog.accept()
        });

    await page.locator('#confirmBtn').click()

    expect(page.locator("#demo")).toHaveText("You pressed OK!")

    
})