import {expect,test} from '@playwright/test'


test('Working with soft and hard assertions',async ({page})=>{


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //soft assertions - if fails it will not stop execution of next lines
    // await expect.soft(page).toHaveTitle("Dashbaord")

    await page.getByPlaceholder('username').fill('Admin')

    await page.getByPlaceholder('password').fill('admin123')

    await page.getByRole('button',{name : 'Login'}).click()

     //hard assertions - if fails will stop execution on the same line
     await expect(page.getByRole('heading',{name :'Dashboard'})).toBeVisible()
})