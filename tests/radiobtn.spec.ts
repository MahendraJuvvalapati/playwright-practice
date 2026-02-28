import {test,expect} from '@playwright/test'

test('work with radio btn', async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("#male").check()

    await expect(
    page.getByRole('radio', { name: 'Male' }).first()
  ).toBeChecked();

  await expect(
    page.getByRole('radio', { name: 'Female' }).last()
  ).not.toBeChecked();

})