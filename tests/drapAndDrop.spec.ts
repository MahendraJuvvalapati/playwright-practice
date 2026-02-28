import {test,expect, Locator} from '@playwright/test'

test('working with drag and drop',async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    
    const source :Locator = page.locator("#draggable")
    const target :Locator = page.locator("#droppable")
    
    await page.dragAndDrop("#draggable","#droppable")
    
    await expect(target).toHaveText("Dropped!")
})