import { Locator, Page } from "playwright/test";

export class LoginPage{

readonly page: Page;
readonly usernameTB: Locator;
readonly passwordTB: Locator;
readonly loginbutton: Locator;

constructor (page:Page){

    this.page = page;
    this.usernameTB = page.locator('input[id="user-name"]');
    this.passwordTB = page.getByPlaceholder('Password');
    this.loginbutton = page.locator('input[id="login-button"]');

}

async openApplication(){

await this.page.goto("https://www.saucedemo.com");

}


async performLogin(usernameVal:string, passwordVal:string){

await this.usernameTB.fill(usernameVal);
await this.passwordTB.fill(passwordVal);
await this.loginbutton.click();

}


}