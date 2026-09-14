import { test as base } from "@playwright/test";
import { analyzeBug } from "../utils/aiBugAnalyzer";

export const test = base;

test.afterEach(async ({}, testInfo) => {

  if (testInfo.status !== testInfo.expectedStatus) {

    const errorLog = testInfo.errors
      .map(error => error.message)
      .join("\n");

    console.log("\n========== FAILURE DETECTED ==========\n");

    const analysis = await analyzeBug(errorLog);

    console.log("\n========== AI ANALYSIS ==========\n");

    console.log(analysis);
  }
});