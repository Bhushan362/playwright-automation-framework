import{test,expect} from '@playwright/test';


test("Handle new page",async({context})=>{

const page = await context.newPage();

await page.goto("https://testpages.eviltester.com/styled/windows-test.html");

await expect(page).toHaveTitle("Windows Example Test");

const prmse = context.waitForEvent("page");  //waiting that a new page is about to open

await page.locator('a[id = "gobasicajax"]').click(); //clicked on a link that will open a new page

const newPage = await prmse; //storing the newly opened page in newpage variable to use the new page

await newPage.waitForLoadState(); 

await newPage.locator('input[value = "Code In It"]').click();


})










