import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

exports.DashboardPage = class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        // Login

        this.username = page.getByRole("textbox", { name: "User Name" });
        this.password = page.getByRole("textbox", { name: "Password" });
        this.eyeIcon = page.locator("i").first();
        this.loginBtn = page.getByRole("button", { name: "Login" });

        // Dashboard

        this.logo1 = page.locator("#govlogo");
        this.logo2 = page.locator("#profileDropdown").first();
        this.dashboardTitle = page.getByRole("link", { name: "TN  EMIS" });

        this.menuLocator = page.locator(".menu-title");

        this.profile = page.getByText("Saraswathi");
        this.logout = page.getByRole("link", { name: "Log Out" });

    }

    async gotoLoginPage(url) {

        await this.open(url);

    }

    async login(username, password) {

        await this.username.fill(username);

        await this.password.fill(password);

        await this.eyeIcon.click();

        await this.loginBtn.click();

        await this.page.waitForLoadState("networkidle");

    }

    async verifyDashboard() {

        await expect(this.logo1).toBeVisible();

        await expect(this.logo2).toBeVisible();

        await expect(this.dashboardTitle).toBeVisible();

    }

    async takeDashboardScreenshots() {

        await this.logo1.screenshot({
            path: `D:/Playwright test file/tests/Screenshot/${Date.now()}_logo1.png`
        });

        await this.logo2.screenshot({
            path: `D:/Playwright test file/tests/Screenshot/${Date.now()}_logo2.png`
        });

        await this.dashboardTitle.screenshot({
            path: `D:/Playwright test file/tests/Screenshot/${Date.now()}_dashboard.png`
        });

    }

    async printMenus() {

        const count = await this.menuLocator.count();

        console.log("Total Menus:", count);

        for (let i = 0; i < count; i++) {

            const menu = await this.menuLocator.nth(i).textContent();

            console.log(`Menu ${i + 1}: ${menu?.trim()}`);

        }

    }

    async logoutFromApplication() {

        await this.profile.click();

        await this.logout.click();

    }

}