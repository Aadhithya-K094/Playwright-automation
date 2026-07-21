// tests/login.spec.js

import { test, expect } from "@playwright/test";

import { LoginPage } from "../pages/LoginPage.js";

import { getUsers } from "../utils/TestData.js";

const users = getUsers();

const URL = "https://emis-react-staging.tnsed.com/";

for (const user of users) {

    test(`Login Test - ${user.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigate(URL);

        await loginPage.login(
            user.username,
            user.password
        );

        await loginPage.screenshot(user.username);

        // Example validation
        await expect(page).not.toHaveURL(URL);

    });

}