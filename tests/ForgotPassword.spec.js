import { test } from "@playwright/test";
import { ForgotPasswordPage } from "../pages/ForgotPasswordPage.js";
import forgotPasswordData from "../testData/forgotPasswordData.js";

test("Forgot Password Flow", async ({ page }) => {

    const forgot = new ForgotPasswordPage(page);

    await forgot.gotoLoginPage(forgotPasswordData.url);

    await forgot.reloadPage();

    await forgot.openForgotPassword();

    await forgot.verifyForgotPasswordPage();

    // Invalid User IDs
    await forgot.requestOTP(forgotPasswordData.invalidUser1);

    await forgot.requestOTP(forgotPasswordData.invalidUser2);

    await forgot.requestOTP(forgotPasswordData.spaceUser);

    // Valid User ID
    await forgot.requestOTP(forgotPasswordData.validUser);

    // Invalid OTP
    await forgot.submitOTP(forgotPasswordData.invalidOtp1);

    await forgot.submitOTP(forgotPasswordData.invalidOtp2);

    // Valid OTP
    // Enter manually if OTP comes via SMS/Email
    // await forgot.submitOTP(forgotPasswordData.validOtp);

    // Invalid Password
    await forgot.resetPassword(forgotPasswordData.invalidPassword1);

    await forgot.resetPassword(forgotPasswordData.invalidPassword2);

    // Valid Password
    // Uncomment only if a valid OTP has been entered
    // await forgot.resetPassword(forgotPasswordData.validPassword);

    await forgot.goBackToLogin();

    await forgot.takeScreenshot("ForgotPassword-test-passed");

});