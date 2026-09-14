import { Locator, Page} from "playwright/test";

export class CartPage{

    readonly page:Page;
    readonly checkout:Locator;
    readonly removebutton;
    readonly continueshoppingbutton;


constructor(page:Page){

 this.page = page;
 this.checkout = page.locator('button[id="checkout"]');
 this.removebutton = page.locator('button[id="remove-sauce-labs-backpack"]');
 this.continueshoppingbutton = page.locator('button[id=" continue-shopping"]');


}

async clickOnCheckoutButton(){

    await this.checkout.click();
    


}


}