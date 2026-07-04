const { test } = require("@playwright/test");

const LoginPage = require("../pages/loginPage");

const data = require("../utils/test-data");

const { url } = require("node:inspector");
test.beforeEach(async ({page})=>{

    const login = new LoginPage(page);

    await login.openApplication();

    // await login.verifyURL(data.url);


});

test("Verify Login Page", async ({page})=>{

    const login = new LoginPage(page);

    await login.verifyLoginPage();

});


test("Invalid Username", async ({page})=>{

    const login = new LoginPage(page);

    await login.login(data.validUserName,data.validPassword);

});

// test("Invalid Password", async ({page})=>{

//     const login = new LoginPage(page);

//     await login.login(data.validUser,data.invalidPassword);

// });

// test("Username With Spaces", async ({page})=>{

//     const login = new LoginPage(page);

//     await login.login(data.space,data.validPassword);

// });

// test("Password With Spaces", async ({page})=>{

//     const login = new LoginPage(page);

//     await login.login(data.validUser,data.space);

// });

// test("Valid Login", async ({page})=>{

//     const login = new LoginPage(page);

//     await login.login(data.validCredentials.data.VA);

// });