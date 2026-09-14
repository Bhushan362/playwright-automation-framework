import {expect, Page, test} from "@playwright/test";

test("This is flow test",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
await page.getByPlaceholder('Username').fill("Admin");
await page.getByPlaceholder('Password').fill("admin123");
await page.locator("button[type='submit']").click();

await expect(page.locator(".oxd-topbar-header-breadcrumb")).toBeVisible();
await page.locator(".oxd-userdropdown-tab").click();
await page.getByRole('menuitem', { name: 'Support' }).click();
await page.locator(".oxd-userdropdown-tab").click();
//await page.getByRole('menuitem', { name: 'About' }).click();
//await page.locator('buttpn[fdprocessedid="v9oonr"]').click();
await expect (page.locator('.orangehrm-sub-title', { hasText: 'Customer Support' })).toBeVisible();
await page.locator('.oxd-main-menu-item--name', { hasText: 'Leave' }).click();



});