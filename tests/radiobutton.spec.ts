import {expect, Page,test} from '@playwright/test';

test('radio button',async({page})=>{

await page.goto('https://demoqa.com/automation-practice-form',{ waitUntil: 'domcontentloaded' });

//const radiobutton = await page.locator('#gender-radio-1'); will not work
//const radiobutton = page.locator('input[value="Male"]'); will not work

//await page.getByLabel('Male').click(); will not work


//await page.locator('label[for="gender-radio-1"]').check(); //working with check(); as well as click();
//await page.locator('#gender-radio-1').click();  not able to click or check the radio button as ad is intercepting the click so
                                                 //radio button is located with label or label with css selector


const maleRadiobutton = await page.locator('label[for="gender-radio-1"]'); //working with check(); as well as click(); 
                                                                       // radio button is located with label or label with css selector

await maleRadiobutton.check();
await expect(maleRadiobutton).toBeChecked();

await page.locator('label[for="gender-radio-2"]').check(); //female radio button checked

await expect(maleRadiobutton).not.toBeChecked(); // verifying that male radio button is unchecked now as female button is checked


//await radiobutton.check();

})

