//import { test, Page } from "../hooks/aiFailureHook";
import {test, Page, expect } from "@playwright/test";

test("This is a flow test",async({page})=>{

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

console.log(await page.title());
await expect(page).toHaveTitle("OrangeHRM");
await page.getByPlaceholder("Username").fill("Admin");
await page.getByPlaceholder("Password").fill("admin123");
await page.locator('button[type = "submit"]').click();
await expect (page.getByText('Dashboard').nth(1)).toBeVisible();
await page.locator(".oxd-userdropdown-tab").click();
await expect(page.locator(".oxd-userdropdown-link")).toHaveCount(4);

await page.locator('a[role="menuitem"]').nth(2).click();
await page.getByText('Configuration ').click();
await expect(page.locator(".oxd-topbar-body-nav-tab-link")).toHaveCount(5);

await page.locator('.oxd-topbar-body-nav-tab-link', { hasText: 'Optional Fields' }).click();


})

/*import { test, expect } from "@playwright/test";

test("This is a flow test", async ({ page }) => {

    await page.goto(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    await expect(page).toHaveTitle("OrangeHRM");

    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");

    await page.locator('button[type="submit"]').click();

    await expect(page.getByText("Dashboard").nth(1)).toBeVisible();

    // Open user dropdown
    await page.locator(".oxd-userdropdown-tab").click();

    await expect(
        page.locator(".oxd-userdropdown-link")
    ).toHaveCount(4);

    // Select required menu item
    await page.locator('a[role="menuitem"]').nth(2).click();

    // Open Configuration
    await page.getByText("Configuration", { exact: true }).click();

    await expect(
        page.locator(".oxd-topbar-body-nav-tab-item")
    ).toHaveCount(5);

    // Open Optional Fields
    await page.locator(
        ".oxd-main-menu-item--name",
        { hasText: "Optional Fields" }
    ).click();

    // Add an assertion here for the Optional Fields page
});*/