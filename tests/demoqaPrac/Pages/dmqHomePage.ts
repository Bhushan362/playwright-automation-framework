import {Locator,Page} from "@playwright/test";


export class dmqHomePage{
    
    readonly page:Page;
    readonly firstname:Locator;
    readonly lastname:Locator;
    readonly mobilenumber:Locator;
    readonly subject:Locator;

    constructor (page:Page){

        this.page = page;
        this.firstname = page.getByPlaceholder('First Name');
        this.lastname = page.getByPlaceholder('Last Name');
        this.mobilenumber = page.getByPlaceholder('Mobile Number');
        this.subject = page.locator('input[id="subjectsInput"]');

    }

    async openAppilcation(){

        await this.page.goto("https://demoqa.com/automation-practice-form", {
        waitUntil: "domcontentloaded" });

    }

     async fillForm(Firstname: string, Lastname: string, Mobilenumber: string, Subject: string) {
        await this.firstname.fill(Firstname);
        await this.lastname.fill(Lastname);
        await this.mobilenumber.fill(Mobilenumber);
        await this.subject.fill(Subject);
    }



}



/*import {Locator, Page} from "@playwright/test"

export class dmqHomePage{

    readonly page:Page;
    


    constructor (page:Page)
    {
        this.page = page;
        this.username = page.getByPlaceholder('Username');
      
    }

async openApplication() {
    await this.page.goto("https://demoqa.com/automation-practice-form", {
        waitUntil: "domcontentloaded"
    });
}

    async performLogin(uname:string,password:string){

        await this.username.fill(uname);

    }*/


}