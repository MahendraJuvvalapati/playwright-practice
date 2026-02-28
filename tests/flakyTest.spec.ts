import {expect,test} from '@playwright/test'


test('Working with Flaky Test',async ({page})=>{

    //running playwright test multiple times when fail 

    //in config.ts chnage retires value


    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.getByPlaceholder('username').fill('Admin')

    await page.getByPlaceholder('password').fill('admin123')

    await page.getByRole('button',{name : 'Login'}).click()

    await expect(page.url()).toContain('/dashboard')

     //hard assertions - if fails will stop execution on the same line
     await expect(page.getByRole('heading',{name :'Dashboard'})).toBeVisible()
})