import {test} from 'playwright/test'
import { LoginPage } from '../Pages/LoginPage'
import { HomePage } from '../Pages/HomePage';


test("Login test",async({page})=>{

const lp = new LoginPage(page);

await lp.openApplication();
await lp.performLogin("standard_user","secret_sauce");



})

test("Add to cart",async({page})=>{

const lp = new LoginPage(page);
const hp = new HomePage(page);

await lp.openApplication();
await lp.performLogin("standard_user","secret_sauce");
await hp.clickOnProduct();
await hp.clickOnCart();


})