import {Locator, Page} from "@playwright/test"

export class loginPage2{

    readonly page:Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly product: Locator;


    constructor (page:Page)
    {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.loginButton = page.locator('input[id="login-button"]');
        //this.product = page.getByRole('button',{name:'add-to-cart-sauce-labs-bike-light'});
        this.product = page.locator('button[id="add-to-cart-sauce-labs-bike-light"]');
    }

async openApplication() {
    await this.page.goto("https://www.saucedemo.com", {
        waitUntil: "domcontentloaded"
    });
}

    async performLogin(uname:string,password:string){

        await this.username.fill(uname);
        await this.password.fill(password);
        await this.loginButton.click();

    }

    async clickOnProduct(){

        await this.product.click();

    }


}