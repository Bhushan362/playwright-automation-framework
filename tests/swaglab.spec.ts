import{test,expect} from '@playwright/test'

test("login test", async({page})=>{

await page.goto("https://www.saucedemo.com/",{ waitUntil: 'domcontentloaded' });

await page.getByPlaceholder('Username').fill('standard_user');

await page.getByPlaceholder('Password').fill('secret_sauce');

await page.locator('input[value="Login"]').click();

//await page.getByRole('button',{name:'Add to cart'}).nth(2).click();

await page.locator('button[id="add-to-cart-sauce-labs-backpack"]').click();

await page.locator('a[data-test="shopping-cart-link"]').click();

await page.getByRole('button',{name:'Checkout'}).click();

await page.getByPlaceholder('First Name').fill("Michael");

await page.getByPlaceholder('Last Name').fill("Brown");

await page.getByPlaceholder('Zip/Postal Code').fill("400548");

await page.locator('input[id="continue"]').click();

await page.getByRole('button',{name:'Finish'}).click();


})



