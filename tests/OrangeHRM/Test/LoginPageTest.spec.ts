import { Page,test } from "playwright/test";
import { LoginPage } from "../Pages/LoginPage";

test("Perform Login",async({page})=>{

const lp = new LoginPage(page);

await lp.openApp();
await lp.performLogin("Admin", "admin123");




})