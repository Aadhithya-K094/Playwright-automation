import { test } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage";

const data = require("../testData/testData");

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage(data.url);

});

test("Verify Login Page", async ({ page }) => {

    const login = new LoginPage(page);

    await login.verifyLoginPage(
        data.url,
        data.title
    );

});

test("Invalid User With Space", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        data.space,
        data.validPassword
    );

    await login.takeScreenshot("InvalidUserSpace");

});

test("Valid User Invalid Password", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        data.validUser,
        data.invalidPassword
    );

    await login.takeScreenshot("InvalidPassword");

});

test("Invalid User Valid Password", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        data.invalidUser,
        data.validPassword
    );

    await login.takeScreenshot("InvalidUser");

});

test("Valid Login", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        data.validUser,
        data.validPassword
    );

    await login.takeScreenshot("ValidLogin");

});