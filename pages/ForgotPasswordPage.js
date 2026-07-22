import { expect } from "@playwright/test";
import { BasePage } from "./BasePage.js";

export class ForgotPasswordPage extends BasePage {

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

    async gotoLoginPage(url) {
        await this.open(url);
        await this.takeScreenshot("ForgotPassword-login-page");
    }

    async openForgotPassword() {
        await this.click(this.forgotPassword);
        await this.takeScreenshot("ForgotPassword-form-opened");
    }

    async verifyForgotPasswordPage() {
        await expect(this.page.getByText("Enter User Id")).toBeVisible();
        await expect(this.userId).toBeVisible();
        await this.takeScreenshot("ForgotPassword-form-verified");
    }

    async requestOTP(userId) {
        await this.fill(this.userId, userId);
        await this.takeScreenshot("ForgotPassword-user-id-filled");
        await this.click(this.requestOtp);
        await this.takeScreenshot("ForgotPassword-user-id-submitted");
    }

    async submitOTP(otp) {
        await this.fill(this.otp, otp);
        await this.takeScreenshot("ForgotPassword-otp-filled");
        await this.click(this.submitOtp);
        await this.takeScreenshot("ForgotPassword-otp-submitted");
    }

    async resetPassword(password) {
        await this.fill(this.newPassword, password);

        await this.click(this.eye1);
        await this.click(this.eye2);

        await this.takeScreenshot("ForgotPassword-password-filled");

        await this.click(this.submit);
        await this.takeScreenshot("ForgotPassword-password-submitted");
    }

    async goBackToLogin() {
        await this.click(this.backToLogin);
        await this.takeScreenshot("ForgotPassword-back-to-login");
    }

}