const { test } = require("@playwright/test");

const LoginPage = require("../pages/LoginPage");

const data = require("./utils/test-data");

test.beforeEach(async ({page})=>{

    const login = new LoginPage(page);

    await login.openApplication();

});

test("Verify Login Page", async ({page})=>{

    const login = new LoginPage(page);

    await login.verifyLoginPage();

});

test("Invalid Username", async ({page})=>{

    const login = new LoginPage(page);

    await login.login(data.invalidUser,data.validPassword);

});

test("Invalid Password", async ({page})=>{

    const login = new LoginPage(page);

    await login.login(data.validUser,data.invalidPassword);

});

test("Username With Spaces", async ({page})=>{

    const login = new LoginPage(page);

    await login.login(data.space,data.validPassword);

});

test("Password With Spaces", async ({page})=>{

    const login = new LoginPage(page);

    await login.login(data.validUser,data.space);

});

test("Valid Login", async ({page})=>{

    const login = new LoginPage(page);

    await login.login(data.validUser,data.validPassword);

});