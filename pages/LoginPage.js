// pages/LoginPage.js

import { BasePage } from "./BasePage.js";

export class LoginPage extends BasePage {

    constructor(page) {

        super(page);

        this.username = page.getByPlaceholder("Username");

        this.password = page.getByPlaceholder("Password");

        this.loginButton = page.getByRole("button", {
            name: "Login"
        });

    }

    async login(username, password) {

        await this.fill(this.username, username);

        await this.fill(this.password, password);

        await this.click(this.loginButton);

    }

}