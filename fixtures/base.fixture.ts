import { test as base } from "@playwright/test"; //Importing Playwright's built-in test, and renaming it to base because we're going to extend it.
import { LoginPage } from "../pages/LoginPage";

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page); //Our tests will now have a loginPage fixture

    await use(loginPage);
  },
});

export { expect } from "@playwright/test";
