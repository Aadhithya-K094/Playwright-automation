import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import loginData from "../testData/loginData.js";

test.beforeEach(async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage(loginData.url);

});

test("Verify Login Page", async ({ page }) => {

    const login = new LoginPage(page);

    await login.verifyLoginPage(
        loginData.url,
        loginData.title,
    );

});

test("Invalid User With Space", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.space,
        loginData.validPassword
    );

    await login.takeScreenshot("InvalidUserSpace");

});

test("Valid User Invalid Password", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.validUser,
        loginData.invalidPassword
    );

    await login.takeScreenshot("InvalidPassword");

});

test("InValid User Invalid Password", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.invalidUser,
        loginData.invalidPassword
    );

    await login.takeScreenshot("InvalidPassword");

});

test("Invalid User Valid Password", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.invalidUser,
        loginData.validPassword
    );

    await login.takeScreenshot("InvalidUser");

});


test("Valid Login", async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.validUser,
        loginData.validPassword
    );

    await login.takeScreenshot("ValidLogin");

});