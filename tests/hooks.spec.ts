import { test, expect, Page } from '@playwright/test'



test.beforeEach('before every tests', async ({page}) => {

    await test.step('Navigating to url', async () => {
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    })
})

test.afterEach('After Every test',async({page})=>{

  await  test.step('Closing browser',async()=>{
        page.close()
    })

})

test.describe('Login Tests',  () => {

    test('Login with Valid creds', async ({page}) => {
       await test.step('Entering credentials', async () => {

            await page.getByPlaceholder('username').fill('Admin')
            await page.getByPlaceholder('password').fill('admin123')
        })

        await test.step('Clicking Login button', async () => {

            await page.getByRole('button', { name: 'Login' }).click()
        })

       await test.step('Verify Login status', async () => {

            await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible()
        })
    })

    test('Login with Invalid creds', async ({page}) => {
        await test.step('Entering credentials', async () => {

            await page.getByPlaceholder('username').fill('Adminn')
            await page.getByPlaceholder('password').fill('admin1234')
        })

        await test.step('Clicking Login button', async () => {

            await page.getByRole('button', { name: 'Login' }).click()
        })

        await test.step('Verify Login status', async () => {

            await expect(page.getByText('Invalid credentials')).toBeVisible()
        })
    })
})
