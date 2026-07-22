import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { getUsers } from "../testData/ExcelReader.js";

const users = getUsers();

const URL = "https://your-login-url.com";
const TITLE = "Your Page Title";

for (const user of users) {

    test(`Login Test - ${user.username}`, async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Open Login Page
        await loginPage.gotoLoginPage(URL);

        // Verify Login Page
        await loginPage.verifyLoginPage(URL, TITLE);

        // Login
        await loginPage.login(
            user.username,
            user.password
        );

        // Wait for page
        await page.waitForLoadState("domcontentloaded");

        if (user.expected === "Pass") {

            // Verify successful login
            await expect(page).not.toHaveURL(URL);

            console.log(`${user.username} Login Successful`);

            // Logout (Replace with your locators)
            await page.locator("//span[@class='profile']").click();
            await page.locator("//button[text()='Logout']").click();

        }
        else {

            // Verify login failure
            await expect(page).toHaveURL(URL);

            console.log(`${user.username} Login Failed`);

        }

    });

}