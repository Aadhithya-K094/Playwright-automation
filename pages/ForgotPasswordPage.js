
import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";

class ForgotPasswordPage extends BasePage {

    constructor(page) {

        super(page);

        this.forgotPassword = page.getByRole("button", {
            name: "Forgot Password"
        });

        this.userId = page.getByRole("textbox", {
            name: "Enter User Id"
        });

        this.requestOtp = page.getByRole("button", {
            name: "Request OTP"
        });

        this.otp = page.getByRole("textbox", {
            name: "Enter the OTP"
        });

        this.submitOtp = page
            .getByLabel("OTP Submission")
            .getByRole("button", {
                name: "Submit OTP"
            });

        this.newPassword = page.getByRole("textbox", {
            name: "Enter the new password"
        });

        this.eye1 = page.locator("i").nth(3);

        this.eye2 = page.locator("i").nth(4);

        this.submit = page.getByRole("button", {
            name: "Submit",
            exact: true
        });

        this.backToLogin = page.getByRole("button", {
            name: "Back To Login"
        });

    }

    async openForgotPassword() {

        await this.click(this.forgotPassword);

    }

    async verifyForgotPasswordPage() {

        await expect(
            this.page.getByText("Enter User Id")
        ).toBeVisible();

        await expect(this.userId).toBeVisible();

    }

    async requestOTP(userId) {

        await this.fill(this.userId, userId);

        await this.takeScreenshot("UserID");

        await this.click(this.requestOtp);

    }

    async submitOTP(otp) {

        await this.fill(this.otp, otp);

        await this.click(this.submitOtp);

    }

    async resetPassword(password) {

        await this.fill(this.newPassword, password);

        await this.click(this.eye1);

        await this.click(this.eye2);

        await this.takeScreenshot("Password");

        await this.click(this.submit);

    }

    async goBackToLogin() {

        await this.click(this.backToLogin);

    }

}

module.exports = { ForgotPasswordPage };