import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/LoginPage.js";
import { getUsers } from "../testData/ExcelReader.js";
 
const users = getUsers();
 
for (const user of users) {
 
    test(`Login Test - ${user.username}`, async ({ page }) => {
 
        const base = new BasePage(page);
 
        await base.navigate();
 
        await base.login(
            user.username,
            user.password
        );
 
        if (user.expected === "Pass") {
 
            // Verify successful login
            await expect(page).not.toHaveURL(base.baseURL);
 
            console.log(`${user.username} Login Successful`);
 
            // Logout (replace locators with your application locators)
            await page.locator("//span[@class='profile']").click();
            await page.locator("//button[text()='Logout']").click();
 
        } else {
 
            // Verify failed login
            await expect(page).toHaveURL(base.baseURL);
 
            console.log(`${user.username} Login Failed`);
        }
 
    });
 
}
 