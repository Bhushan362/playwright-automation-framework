//import {test,Page,expect} from '@playwright/test';
import { test, Page } from "../hooks/aiFailureHook";
import { expect } from "@playwright/test";

/*await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: 'domcontentloaded' });
console.log(await page.title());
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.locator('button[type="button"]').click();*/


test("This is flow test", async({page})=>{

/*await page.goto("https://demoqa.com/automation-practice-form",{ waitUntil: 'domcontentloaded' });
console.log(await page.title());
await page.getByPlaceholder('First Name').fill('Michael');
await page.getByPlaceholder('Last Name').fill('Brown');
await page.locator('input[value="Male"]').check();*/

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: 'domcontentloaded' });

console.log(await page.title());
await expect(page).toHaveTitle("OrangeHRM");
await page.getByPlaceholder('Username').fill('Admin');
await page.getByPlaceholder('Password').fill('admin123');
await page.locator('button[type="submit"]').click();
await expect(page.getByText('Dashboard').nth(0)).toBeVisible(); // multiple element located so used nth
await page.locator('.bi-caret-down-fill').click();              // located with one class out of three in one line as it is unique
await expect(page.locator('.oxd-userdropdown-link')).toHaveCount(4);  // checking the no. of options in the dropdown
await page.getByText('Support').click();
await expect(page.locator('text=Getting Started with OrangeHRM')).toBeVisible();
await page.waitForTimeout(10000);                             // to stop and observe last page
 


});