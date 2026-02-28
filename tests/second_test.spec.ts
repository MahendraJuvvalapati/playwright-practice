import {test,expect} from '@playwright/test'
import { SrvRecord } from 'node:dns';

test("verify page url",async ({page})=>{

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    let url : string = await page.url();

    console.log(url);

    console.log(await page.url())

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
})