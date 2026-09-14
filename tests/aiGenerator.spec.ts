/*import { test } from "@playwright/test";
import { generatePlaywrightTest } from "../utils/aiTestGenerator";

test("Generate Playwright test using AI", async () => {

    const requirement = `
    Login with valid username and password
    and verify dashboard page is visible
    `;

    const generatedCode = await generatePlaywrightTest(requirement);

    console.log("\n=========== AI GENERATED TEST ===========\n");

    console.log(generatedCode);

});*/

import { test } from "@playwright/test";
import { generatePlaywrightTest } from "../utils/aiTestGenerator";
import fs from "fs";

test("Generate Playwright test using AI", async () => {

    const requirement = `
    Login with valid username and password
    and verify dashboard page is visible
    `;

    const generatedCode = await generatePlaywrightTest(requirement);

    console.log("\n=========== AI GENERATED TEST ===========\n");

    console.log(generatedCode);

    // Save generated code into file
    fs.writeFileSync(
        "tests/generated-login.spec.ts",
        generatedCode || ""
    );

    console.log("\n✅ Test file generated successfully!");

});