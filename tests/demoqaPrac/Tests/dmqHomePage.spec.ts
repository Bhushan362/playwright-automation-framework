import { test } from "@playwright/test";
import { dmqHomePage } from "../Pages/dmqHomePage";
import { readFileSync } from "node:fs";

const dataArr2 = JSON.parse(
    readFileSync(
        new URL("../../TestData/diff_sets_data.json", import.meta.url),
        "utf-8"
    )
);


interface TestData {
  firstname: string;
  lastname: string;
  mobilenumber: string;
  subject: string;
}

const testDataArray: TestData[] = dataArr2 as TestData[];

test.describe("Practice Form - Data Driven Tests", () => {

    testDataArray.forEach((data, index) => {

        test(`Fill form with dataset ${index + 1} - ${data.firstname}`, async ({ page }) => {

            const formPage = new dmqHomePage(page);

            await formPage.openAppilcation();
            await formPage.fillForm(
                data.firstname,
                data.lastname,
                data.mobilenumber,
                data. subject
            );

        });

    });

});