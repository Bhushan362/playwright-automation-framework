import { Locator, Page } from "playwright/test";

export class LoginPage{

    readonly page:Page;
    readonly username:Locator;
    readonly password:Locator;
    readonly Loginbutton:Locator;

    constructor(page:Page){

        this.page=page;
        this.username = page.getByPlaceholder('Username');
        this.password = page.getByPlaceholder('Password');
        this.Loginbutton = page.getByRole('button', { name: 'Login' });


    }

    async openApp(){

        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{ waitUntil: 'domcontentloaded' });

    }

    async performLogin(usernameVal:string,passwordVal:string){

        await this.username.fill(usernameVal);
        await this.password.fill(passwordVal);
        await this.Loginbutton.click();



    }


}