
import test from 'playwright/test';
import { loginPage2 } from '../Pages2/loginPage2';

test("Login test",async({page})=>{

    const lp = new loginPage2(page);

    await lp.openApplication();
    await lp.performLogin("standard_user","secret_sauce");
    await lp.clickOnProduct();




})