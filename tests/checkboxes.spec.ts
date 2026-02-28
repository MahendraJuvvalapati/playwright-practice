import {test,expect} from '@playwright/test'

test('working with checkboxes',async ({page})=>{

  await page.goto("https://testautomationpractice.blogspot.com/")
    
  await page.getByRole('checkbox',{ name :'Sunday'}).check()

  await expect(page.getByRole('checkbox', {name :'Sunday'})).toBeChecked()


  //check All boxes

  const days : string[] =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

  for (const day of days)
  {
    await page.getByRole('checkbox',{name: day}).check()
  }

  //uncheck All boxes

  for (const day of days)
  {
    await page.getByRole('checkbox',{name: day}).uncheck()
  }

  //check last 3 boxes only

  for (const day of days.slice(-3))
  {
    await page.getByRole('checkbox',{name: day}).check()
  }
})

