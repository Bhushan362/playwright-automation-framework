import { Page,test } from "@playwright/test";
import dataArr from "./TestData/diff_sets_data.json" assert {type:"json"};

interface TestData {
  firstname: string;
  lastname: string;
  mobilenumber: string;
  subject: string;
}

const testDataArray: TestData[] = dataArr as TestData[];


testDataArray.forEach((data) => {
    
test("Fill form with sets of data" + data.firstname,async({page})=>{


    await page.goto("https://demoqa.com/automation-practice-form");
    await page.getByPlaceholder('First Name').fill(data.firstname);
    await page.getByPlaceholder('Last Name').fill(data.lastname);
    await page.getByPlaceholder('Mobile Number').fill(data.mobilenumber);
    await page.locator('input[id="subjectsInput"]').fill(data.subject);
 
 
});


});