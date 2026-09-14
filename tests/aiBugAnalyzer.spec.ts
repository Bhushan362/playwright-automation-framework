import { test, expect } from "../hooks/aiFailureHook";

test("Login Test", async ({ page }) => {

    await page.goto("https://example.com");

    await page.locator("#wrongLocator").click();

});