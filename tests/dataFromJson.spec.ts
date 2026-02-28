import { test, expect } from '@playwright/test';
import jsonData from '../TestData/loginData.json';
import { LoginPage } from '../pages/loginPage';

test.describe('Login Data Driven Tests -Json', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTourl();
  });


  //using forEach
  jsonData.forEach((data :any) => {

    test(`Login test with ${data.username} and ${data.password}`, async () => {


      await loginPage.loginToApplication(data.username, data.password)

      if (data.expectedResult === 'success') {
        await expect(loginPage.dashboardHeading).toBeVisible()
      } else {
        await expect(loginPage.invalidCredentials).toBeVisible();
      }

    });

  });

});