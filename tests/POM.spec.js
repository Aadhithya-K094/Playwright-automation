import { test, expect } from "@playwright/test";
import { loginPage } from "../pages/Login";
import { loginData } from "../testData/POMData";
import { dashboardPage } from "../pages/dashboard";
test("test", async ({ page }) => {

    //login
    const login = new loginPage(page);

    await login.gotoLoginPage();
    await login.login('33020700907','test@123');
    await page.waitForTimeout(1000);


    //Dashboard
    const dashboard = new dashboardPage(page);
    await dashboard.navigateTheMenu("Home");
    await page.waitForTimeout(1000);
});