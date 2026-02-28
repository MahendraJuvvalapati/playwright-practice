import {test,expect} from '@playwright/test'
import path from 'node:path';

test('working with file uploads',async ({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/")

    // Provide file path
    //TestFiles\sample.txt
   const filePath = path.join(__dirname,'..', 'TestData', 'sample.txt');

   console.log(filePath);

    await page.locator('#singleFileInput').setInputFiles(filePath);

    await page.getByRole('button',{name :'Upload Single File'}).click()

    await expect(page.locator("#singleFileStatus")).toContainText('sample.txt')

})