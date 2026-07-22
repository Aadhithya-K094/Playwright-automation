import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class DashboardPage extends BasePage {

    constructor(page) {

        super(page);

        this.username = page.getByRole("textbox", { name: "User Name" });
        this.password = page.getByRole("textbox", { name: "Password" });
        this.eyeIcon = page.locator("i").first();
        this.loginBtn = page.getByRole("button", { name: "Login" });

        this.logo1 = page.getByRole("banner").getByAltText("Logo");
        this.logo2 = this.logo1;
        this.dashboardTitle = page.getByRole("heading", { name: "TN EMIS" });

        this.banner = page.getByRole("banner");
        this.main = page.getByRole("main");
        this.footer = page.getByRole("contentinfo");
        this.profile = page.getByText("Saraswathi", { exact: true });
        this.profileStatus = page.getByText("Active", { exact: true });

        this.navigationItems = [
            "IFHRMS / Service Register",
            "Home",
            "Component",
            "demo1",
            "Approvals",
            "Reports",
            "new menu",
            "EMIS Tickets",
            "Palli Paarvai",
            "dummy",
            "SMC Dashboard",
            "SLAS Assessment"
        ].map((name) => page.getByText(name, { exact: true }));

        this.summaryCards = [
            page.getByText("Total Students", { exact: true }),
            page.getByText("Total Schools", { exact: true }),
            page.getByText("Total Staff", { exact: true })
        ];

        this.liveDataTab = page.getByRole("button", { name: "Live Data" });
        this.enrollmentTab = page.getByRole("button", {
            name: "Enrollment",
            exact: true
        });
        this.attendanceTab = page.getByRole("button", {
            name: "Attendance",
            exact: true
        });
        this.markingStatusButton = page.getByRole("button", { name: "Marking Status" });
        this.attendanceStatusButton = page.getByRole("button", { name: "Attendance Status" });

        this.profileMenu = page.getByRole("button", { name: /Reset Password/ });
        this.switchUserButton = page.getByRole("button", { name: /Switch User/ });
        this.multipleLoginButton = page.getByRole("button", { name: /Multiple Login/ });
        this.draggableElements = page.locator('[draggable="true"], [role="slider"]');

        this.statusRows = [
            page.getByRole("row", { name: /Schools \(Students\)/ }),
            page.getByRole("row", { name: /School \(Staff\)/ }),
            page.getByRole("row", { name: /ITK Centre/ })
        ];

        this.logout = page.getByText("Log Out", { exact: true });

    }

    async gotoLoginPage(url) {
        await this.open(url);
        await this.takeScreenshot("Dashboard-login-page");
    }

    async login(username, password) {

        await this.fill(this.username, username);
        await this.takeScreenshot("Dashboard-username-filled");
        await this.fill(this.password, password);
        await this.takeScreenshot("Dashboard-password-filled");

        await this.click(this.eyeIcon);
        await this.takeScreenshot("Dashboard-password-visible");

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginBtn.click()
        ]);
        await this.takeScreenshot("Dashboard-login-submitted");

    }

    async verifyDashboard() {

        await expect(this.banner).toBeVisible();
        await expect(this.logo2).toBeVisible();
        await expect(this.dashboardTitle).toBeVisible();
        await expect(this.profile).toBeVisible();
        await expect(this.profileStatus).toBeVisible();
        await expect(this.main).toBeVisible();
        await expect(this.footer).toBeVisible();

        await this.verifyNavigationItems();
        await this.verifySummaryCards();
        await this.verifyDashboardControls();
        await this.verifyStatusRows();

        await this.takeScreenshot("Dashboard-verified");

    }

    async verifyNavigationItems() {

        for (const navigationItem of this.navigationItems) {
            await expect(navigationItem).toBeVisible();
        }

    }

    async verifySummaryCards() {

        for (const summaryCard of this.summaryCards) {
            await expect(summaryCard).toBeVisible();
        }

        await expect(this.page.getByText("Boys", { exact: true })).toBeVisible();
        await expect(this.page.getByText("Girls", { exact: true })).toBeVisible();
        await expect(this.page.getByText("Government", { exact: true })).toBeVisible();
        await expect(this.page.getByText("Others", { exact: true })).toBeVisible();
        await expect(this.page.getByText("Teaching", { exact: true })).toBeVisible();
        await expect(this.page.getByText("Non Teaching", { exact: true })).toBeVisible();

    }

    async verifyDashboardControls() {

        await expect(this.liveDataTab).toBeVisible();
        await expect(this.enrollmentTab).toBeVisible();

        for (const control of [
            this.attendanceTab,
            this.markingStatusButton,
            this.attendanceStatusButton
        ]) {
            if (await control.count() > 0) {
                await expect(control).toBeVisible();
            }
        }

        await expect(
            this.page.getByText("This data will be updated hourly", { exact: true })
        ).toBeVisible();

    }

    async verifyStatusRows() {

        for (const statusRow of this.statusRows) {
            if (await statusRow.count() > 0) {
                await expect(statusRow).toBeVisible();
            }
        }

    }

    async exerciseDashboardInteractions() {

        await this.liveDataTab.click();
        await expect(this.liveDataTab).toBeVisible();

        await this.enrollmentTab.click();
        await expect(this.enrollmentTab).toBeVisible();

        if (await this.attendanceTab.count() > 0) {
            await this.attendanceTab.click();
            await expect(this.attendanceTab).toBeVisible();
        }

        if (await this.markingStatusButton.count() > 0) {
            await this.markingStatusButton.click();
            await expect(this.markingStatusButton).toBeVisible();
        }

        if (await this.attendanceStatusButton.count() > 0) {
            await this.attendanceStatusButton.click();
            await expect(this.attendanceStatusButton).toBeVisible();
        }

        for (const statusRow of this.statusRows) {
            if (await statusRow.count() > 0) {
                await statusRow.click();
                await expect(statusRow).toBeVisible();
            }
        }

        await this.profile.click();
        await expect(this.profileMenu).toBeVisible();
        await expect(this.switchUserButton).toBeVisible();
        await expect(this.multipleLoginButton).toBeVisible();
        await expect(this.logout).toBeVisible();

        await this.profile.click();

        const draggableCount = await this.draggableElements.count();

        if (draggableCount > 0) {
            await this.draggableElements.first().dragTo(this.draggableElements.first());
        }

        console.log(`Draggable elements handled: ${draggableCount}`);
        await this.takeScreenshot("Dashboard-interactions-complete");

    }

    async takeDashboardScreenshots() {

        await this.takeLocatorScreenshot(this.logo1, "Logo1");
        await this.takeLocatorScreenshot(this.logo2, "Logo2");
        await this.takeLocatorScreenshot(this.dashboardTitle, "Dashboard");

    }

    async printMenus() {

        const count = this.navigationItems.length;

        console.log("Total Menus:", count);

        for (let i = 0; i < count; i++) {

            console.log(await this.navigationItems[i].textContent());

        }

        await this.takeScreenshot("Dashboard-menus-printed");

    }

    async logoutFromApplication() {

        await this.click(this.profile);
        await this.takeScreenshot("Dashboard-profile-opened");
        await this.click(this.logout);
        await this.takeScreenshot("Dashboard-logged-out");

    }

}