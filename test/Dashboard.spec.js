const { test } = require("@playwright/test");

const { DashboardPage } = require("../pages/DashboardPage");

const { loginData } = require("../testData/loginData");

test("Dashboard Page", async ({ page }) => {

    const dashboard = new DashboardPage(page);

    await dashboard.gotoLoginPage(loginData.url);

    await dashboard.login(
        loginData.username,
        loginData.password
    );

    await dashboard.verifyDashboard();

    await dashboard.takeDashboardScreenshots();

    await dashboard.printMenus();

    await dashboard.logoutFromApplication();

});