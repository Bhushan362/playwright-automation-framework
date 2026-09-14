import { Locator, Page } from "playwright/test";

export class HomePage{

readonly page:Page;
readonly addtocart: Locator;
readonly cart: Locator;



    constructor (page: Page){


    this.page = page;
    this.addtocart = page.locator('button[id="add-to-cart-sauce-labs-backpack"]');
    this.cart = page.locator('a[data-test="shopping-cart-link"]');
    


    }

    async clickOnProduct(){

        await this.addtocart.click();


    }

    async clickOnCart(){

        await this.cart.click();


    }



}
