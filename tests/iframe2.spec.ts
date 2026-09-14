import{Page,test} from "@playwright/test";

test("this test locates diff elements",async({page})=>{

await page.goto("https://demoqa.com/automation-practice-form");
await page.locator('.practice-form-wrapper').locator('#firstName').fill('Michael');
await page.locator('.practice-form-wrapper').getByPlaceholder('Last Name').fill("Dawson");

});

//await page.locator('.practice-form-wrapper', {has: page.locator('input[placeholder="First Name"]')});




