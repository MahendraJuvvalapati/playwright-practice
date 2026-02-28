import {expect,Locator,test} from '@playwright/test'
import { log } from 'node:console';

// //page.getByRole() to locate by explicit and implicit accessibility attributes.
// page.getByText() to locate by text content.
// page.getByLabel() to locate a form control by associated label's text.
// page.getByPlaceholder() to locate an input by placeholder.
// page.getByAltText() to locate an element, usually image, by its text alternative.
// page.getByTitle() to locate an element by its title attribute.
// page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).//

test("Verify Builtin Locators",async ({page})=>{
    
    await page.goto("https://demo.nopcommerce.com/");

    //getbyAltText
    const logo : Locator =   page.getByAltText("nopCommerce demo store")

    await expect(logo).toBeVisible();

    //getByPlaceHolder
    await page.getByPlaceholder('Search store').fill('Iphone');

    //getByRole
    const isSearchButtonVisible  = await page.getByRole('button', { name: /Search/i }).isVisible();

    console.log(isSearchButtonVisible?"The button is visble" :" The button is not visible")

    //GetByText
    const Computers :Locator = page.getByText('Computers')

    await expect(Computers).toBeVisible()

    //getByLabel
   await page.getByLabel('Excellent').click()

   //getByTitle

   const title : Locator = page.getByTitle('Show products in category Electronics').first()

   await expect(title).toHaveText('Electronics')

    //getByTestId

    // <button data-testid="directions">Itinéraire</button>
    // await page.getByTestId('directions').click();

})

test('verify css and xpath Selectors', async ({page})=>{

    page.goto("https://demo.nopcommerce.com/")
  
    //css
   const register : Locator=  page.locator('a.ico-register')

   await expect(register).toBeVisible()
   await expect(register).toBeEnabled()

    //xpath
    await page.locator("//input[@placeholder='Search store']").fill("Mahendra Juvvalapati")
})
