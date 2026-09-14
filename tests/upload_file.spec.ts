import { Page,test } from "@playwright/test";

// When html tag <input type="file" id="filesToUpload" and multiple onchange is present in the html code

test("Upload single file",async({page})=>{

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
await page.locator('input[type="file"]').setInputFiles("tests\\Upload_files\\ContactUsPageTest.txt");


})

// Multiple file upload

test("Upload Multiple file",async({page})=>{

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
await page.locator('input[type="file"]').setInputFiles(["tests\\Upload_files\\ContactUsPageTest.txt","tests\\Upload_files\\two.xlsx"]);


})

// No html tag <input type="file" id="filesToUpload" and multiple onchange is present in the html code

test("File upload when type is not file",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/upload");

const fileprmse = page.waitForEvent('filechooser');
await page.locator('div[id="drag-drop-upload"]').click();
const gotprmse = await fileprmse;

await gotprmse.setFiles("tests\\Upload_files\\two.xlsx");



})