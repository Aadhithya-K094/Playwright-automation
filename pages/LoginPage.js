const { expect } = require("@playwright/test");
const { BasePage } = require("./BasePage");

class LoginPage extends BasePage {

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

    async verifyLoginPage(url,title){

        await expect(this.page).toHaveURL(url);
        const currentUrl = this.page.url();
        console.log(`The url is: ${currentUrl} verified`);

        await expect(this.page).toHaveTitle(title);
        const currentTitle = await this.page.title();
        console.log(`The title is: ${currentTitle} compare`);

        await expect(this.wrapper).toBeVisible();

        await expect(this.logo).toBeVisible();

        await expect(this.heading).toBeVisible();

        const headingText = await this.heading.textContent();
        const headingTrimmed = headingText.trim();
        await expect(headingTrimmed).toBe("கல்வி மேலாண்மைத் தகவல் மையம்");
        console.log(`The string is: ${headingTrimmed} verified`);

        await this.printLoginPageDetails();

    }

    async printLoginPageDetails() {
        await this.logAttribute('username placeholder', this.username, 'placeholder');
        await this.logAttribute('password placeholder', this.password, 'placeholder');
        await this.logTextContent('username label', this.page.locator('label:has-text("User Name")').first());
        await this.logTextContent('password label', this.page.locator('label:has-text("Password")').first());
        await this.logLocatorVisibility('logo', this.logo);
        await this.logLocatorVisibility('img', this.img);
    }

    async enterUsername(username){

        await this.username.fill(username);

    }

    async enterPassword(password){

        await this.password.fill(password);

    }

    async clickEye(){

        await this.eyeIcon.click();

    }

    async clickLogin(){

        await this.loginButton.click();

    }

    async login(username,password){

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickEye();

        await this.clickLogin();

    }

}

module.exports = { LoginPage };