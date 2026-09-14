import { Page,test } from "playwright/test";

import data1 from "./TestData/testdata1.json" assert { type: "json" };


 test ("Fill the form",async({page})=>{

await page.goto("https://demoqa.com/automation-practice-form",{ waitUntil: 'domcontentloaded'});

await page.getByPlaceholder('First Name').fill(data1.firstname);

await page.getByPlaceholder('Last Name').fill(data1.lastname);

await page.getByPlaceholder('name@example.com').fill(data1.email);

await page.getByPlaceholder('Mobile Number').fill(data1.mobilenumber);

await page.locator('input[id="subjectsInput"]').fill(data1.subject);

//await page.locator('div.subjects-auto-complete__input').locator('input[id="subjectsInput"]').fill('Sports');





//await page.getByPlaceholder('First Name').fill('Michael');
//await page.locator('input[id="userEmail"]').fill('Michael@gmail.com');


 })

