import { test } from "@playwright/test";
import { dmqHomePage } from "../Pages/dmqHomePage";
import dataArr2 from "../TestData/diff_sets_data.json";


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