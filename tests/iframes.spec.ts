import { test, expect, Frame } from '@playwright/test';

test('Working with iframes', async ({ page }) => {

  await page.goto('https://ui.vision/demo/webtest/frames/');

  //single frame
  const frame1 =page.frameLocator('frame[src="frame_1.html"]');

  await frame1.locator('//input').fill('Mahendra')

  //nested frames..
  const frame3 =page.frameLocator('frame[src="frame_3.html"]')

  const frame4 =frame3.frameLocator('iframe')

  await frame4.getByText('I am a human').click()

});