import { expect, Page, test } from '@playwright/test'


async function selectDateFromCalender(date: string, month: string, year: string, page: Page) {

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    while (true) {
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()
        const currentYear = await page.locator('.ui-datepicker-year').textContent()

        if (currentMonth == month && currentYear == year) {
            await selectDate(date, page);
            break;
        }

        const currentYearNum = Number(currentYear);
        const targetYearNum = Number(year);


        const currentMonthNum = months.indexOf(currentMonth ?? '');
        const targetMonthNum = months.indexOf(month);


        if (
            currentYearNum > targetYearNum ||
      (currentYearNum === targetYearNum && currentMonthNum > targetMonthNum)) {
            await page.locator("//a[@title='Prev']").click();
        } else {
            await page.locator("//a[@title='Next']").click();
        }
    }
}

async function selectDate(date: string, page: Page) {
    await page.locator("//a[@data-date='"+date+"']").click()
}

test('Working with datepickers', async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    //using inputbox
    await page.locator('#end-date').fill("2026-02-19")

    //using calender

    await page.locator('#datepicker').click()

    const date = '19'
    const month = 'August'
    const year = '2030'

    await selectDateFromCalender(date, month, year, page)


    // let currentMonth =  await page.locator('.ui-datepicker-month').textContent()
    // let currentYear  =  await page.locator('.ui-datepicker-year').textContent()

    // console.log(currentMonth+"-"+currentYear)


    // await page.getByText('22',{exact :true}).click()
})