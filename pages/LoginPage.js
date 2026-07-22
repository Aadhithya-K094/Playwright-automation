import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.logo = page.locator("img").first();
        this.img = page.locator("img");

        this.wrapper = page.locator(".auth-side-wrapper");

        this.heading = page.getByRole("heading", {
            name: "கல்வி மேலாண்மைத் தகவல் மையம்"
        });

        this.username = page.getByRole("textbox", {
            name: "User Name"
        });

        this.password = page.getByRole("textbox", {
            name: "Password"
        });

        this.loginButton = page.getByRole("button", {
            name: "Login"
        });

        this.eyeIcon = page.locator("i").first();
    }

    async gotoLoginPage(url) {
        await this.open(url);
    }

    async verifyLoginPage(url, title) {

        await expect(this.page).toHaveURL(url);
        await expect(this.page).toHaveTitle(title);

        await expect(this.wrapper).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.heading).toBeVisible();

        const currentUrl = this.page.url();
        const currentTitle = await this.page.title();
        const heading = (await this.heading.textContent()).trim();

        console.log(`This is url: ${currentUrl}`);
        console.log(`This is title: ${currentTitle}`);
        console.log(`This is heading: ${heading}`);
        await this.page.waitForTimeout(500);

        await expect(heading).toBe("கல்வி மேலாண்மைத் தகவல் மையம்");

        await this.printLoginPageDetails();
    }

    async printLoginPageDetails() {

        await this.logAttribute("Username Placeholder", this.username, "placeholder");

        await this.logAttribute("Password Placeholder", this.password, "placeholder");

        await this.logTextContent(
            "Username Label",
            this.page.locator('label:has-text("User Name")')
        );

        await this.logTextContent(
            "Password Label",
            this.page.locator('label:has-text("Password")')
        );

        await this.logLocatorVisibility("Logo", this.logo);

    }

    async login(username, password) {

        await this.fill(this.username, username);

        await this.fill(this.password, password);

        await this.click(this.eyeIcon);

        await Promise.all([
            this.page.waitForLoadState("networkidle"),
            this.loginButton.click()
        ]);

    }

}