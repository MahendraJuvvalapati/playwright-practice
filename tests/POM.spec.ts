import { test, expect } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'

test.describe('Login tests', () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigateTourl();
    });


    test('Login with valid credentials', async ({ page }) => {

        await test.step('Login to Application', async () => {
            await loginPage.loginToApplication('Admin', 'admin123')
        })

        await test.step('Verify Dashbaord Visible', async () => {
            await expect(loginPage.dashboardHeading).toBeVisible()
        })

    })

    test('Login with Invalid credentials', async ({ page }) => {

        await test.step('Login to Application', async () => {
            await loginPage.loginToApplication('Adminn', 'admin1234')
        })

        await test.step('Verify invalid creds Visible', async () => {
            await expect(loginPage.invalidCredentials).toBeVisible()
        })

    })
})