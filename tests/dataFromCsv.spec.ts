import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import fs from 'fs';
import { parse } from 'csv-parse/sync';

// Read CSV File
const fileContent = fs.readFileSync('./TestData/loginData.csv');
const csvData = parse(fileContent, {
  columns: true,
  skip_empty_lines: true
});

test.describe('Login Data Driven Tests - CSV', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateTourl();
  });

  // Loop through CSV data
  csvData.forEach((data: any) => {

    test(`Login test with ${data.username} and ${data.password}`, async () => {

      await loginPage.loginToApplication(data.username, data.password);

      if (data.expectedResult === 'success') {
        await expect(loginPage.dashboardHeading).toBeVisible();
      } else {
        await expect(loginPage.invalidCredentials).toBeVisible();
      }

    });

  });

});