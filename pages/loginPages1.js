import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class LoginPage {

    constructor(page) {

        this.page = page;

        this.baseURL = "https://yourwebsite.com/login";

        this.username = "//input[@name='username']";

        this.password = "//input[@name='password']";

        this.loginButton = "//button[@type='submit']";

    }

    async navigate() {

        await this.page.goto(this.baseURL);

    }

    async login(username, password) {

        await this.page.locator(this.username).fill(username);

        await this.page.locator(this.password).fill(password);

        await this.page.locator(this.loginButton).click();

    }

}