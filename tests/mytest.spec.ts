import { test, expect } from "@playwright/test";

/*test("my first test", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle(/Playwright/);
});


test("Select value from multiselect",async({page})=>{


await page.goto("https://artoftesting.com/samplesiteforselenium");

await page.locator("#testingDropdown").selectOption("Manual");


})*/

/*test("select option using key-value",async({page})=>{

await page.goto("https://artoftesting.com/samplesiteforselenium");
await page.locator("#testingDropdown").selectOption({value:"Database"});


})*/



test("Test1",async({page})=>{

await page.goto("https://artoftesting.com/samplesiteforselenium");

console.log(await page.getByText('Sample Webpage for Automation Practice').textContent());


await page.getByRole('link',{name:'QA Community'}).click();



})



/*test("locating iframe with URL",async({page})=>{

await page.goto("https://practice-automation.com/iframes/");

//const frame = page.frame({url:"https://playwright.dev/"});


const frame = page.frame("top-iframe");

//frame?.getByText("Community").click();

//frame?.getByText("Stack Overflow").click();

frame?.getByRole('link',{name : "Community"}).click();



})*/

 test("test1",async({page})=>{

await page.goto("https://www.w3schools.com/html/html_iframe.asp",{ waitUntil: 'domcontentloaded' });

await page.locator("text= Tutorials").first().click();

await page.locator("text= Tutorials").first().click();

await page.getByRole('link', { name: 'JAVASCRIPT', exact: true }).click();

})



test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/html/default.asp',{ waitUntil: 'domcontentloaded' });
  await page.getByRole('button', { name: 'Tutorials' }).click();
  await page.getByRole('button', { name: 'Tutorials' }).click();
  await page.getByRole('link', { name: 'HTML Iframes' }).click();
  //await page.locator('iframe[title="W3Schools HTML Tutorial"]').contentFrame().getByRole('link', { name: 'HTML', exact: true }).click();
 
  //const iframe1 = await page.locator('iframe[title="W3Schools HTML Tutorial"]');
  
  //const iframe1 = await page.locator('iframe[id="1815b31be7b7a9"]');

  //const frame = iframe1.contentFrame();

  const iframe1 = await page.frameLocator('iframe[id="1815b31be7b7a9"]');
  
 //await iframe1.waitForLoadState('load');


await iframe1.getByRole('link', { name: 'CSS', exact: true }).waitFor();
await iframe1.getByRole('link', { name: 'CSS', exact: true }).click();
 
  //await iframe1.getByRole('link', { name: 'CSS', exact: true }).click();

  //await iframe1.locator('a[title="CSS Tutorial"]').click();

});

test("iframe",async({page})=>{

await page.goto("https://testpages.eviltester.com/styled/iframes-test.html");

const frame = await page.frameLocator('iframe[id="thedynamichtml"]');

 expect(frame.getByText('Welcome')).toBeVisible();
 
  


 



})




