import { test, expect } from "../fixtures/base.fixture";
import { Users } from "../test-data/users";

test("Standard user can login successfully", async ({ loginPage }) => {
  const user = Users.standard;

  await loginPage.goto();

  await loginPage.login(Users.standard.username, Users.standard.password);

  await loginPage.verifySuccessfulLogin();

});
