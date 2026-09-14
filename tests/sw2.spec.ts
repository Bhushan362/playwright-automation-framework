import {test,expect} from '@playwright/test';
import { text } from 'stream/consumers';

test("swag",async({page})=>{

await page.goto("https://www.saucedemo.com",{ waitUntil: 'domcontentloaded' });

//await page.getByPlaceholder('Username').fill('standard_user');

//await page.getByPlaceholder('Password').fill('secret_sauce');

await page.locator('input[name="user-name"]').fill('standard_user');;

await page.locator('input[id="password"]').fill('secret_sauce');

await page.locator('input[value="Login"]').click();

await page.locator('div.inventory_list >> text = Add to cart').nth(0).click();

await page.locator('a[data-test="shopping-cart-link"]').click();

await page.locator('div.cart_footer').locator('button#checkout').click();


//await page.locator('.username:has-text("Mary") + .edit-btn').click(); 

})


