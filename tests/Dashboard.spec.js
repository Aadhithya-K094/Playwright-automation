import { test } from "@playwright/test";
import { DashboardPage } from "../pages/DashboardPage.js";
import { loginData } from "../testData/DashBoardData.js";

test("Dashboard home page elements", async ({ page }) => {

    const dashboard = new DashboardPage(page);

    await dashboard.gotoLoginPage(loginData.url);

    await dashboard.login(
        loginData.username,
        loginData.password
    );

    await dashboard.verifyDashboard();

    await dashboard.takeDashboardScreenshots();

    await dashboard.printMenus();

    await dashboard.exerciseDashboardInteractions();

    await dashboard.logoutFromApplication();

    await dashboard.takeScreenshot("Dashboard-test-passed");

});