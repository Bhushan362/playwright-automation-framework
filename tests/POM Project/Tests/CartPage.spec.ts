import {test} from 'playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';

 test("verifyCartPage",async({page})=>{

const lp = new LoginPage(page);
const hp = new HomePage(page);
const cp = new CartPage(page);

await lp.openApplication();
await lp.performLogin("standard_user","secret_sauce");
await hp.clickOnProduct();
await hp.clickOnCart();

await cp.clickOnCheckoutButton();


})