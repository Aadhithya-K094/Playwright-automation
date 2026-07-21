import { test } from "@playwright/test";

import { ForgotPasswordPage } from "../pages/ForgotPasswordPage";

const data = require("../testData/forgotPasswordData");

test("Forgot Password Flow", async ({ page }) => {

    const forgot = new ForgotPasswordPage(page);

    await forgot.open(data.url);

    await forgot.reloadPage();

    await forgot.openForgotPassword();

    await forgot.verifyForgotPasswordPage();

    // Invalid User ID
    await forgot.requestOTP(data.invalidUser1);

    await forgot.requestOTP(data.invalidUser2);

    await forgot.requestOTP(data.spaceUser);

    // Valid User ID
    await forgot.requestOTP(data.validUser);

    // Invalid OTP
    await forgot.submitOTP(data.invalidOtp1);

    await forgot.submitOTP(data.invalidOtp2);

    // Valid OTP
    await forgot.submitOTP(data.validOtp);

    // Invalid Password
    await forgot.resetPassword(data.invalidPassword1);

    await forgot.resetPassword(data.invalidPassword2);

    // Valid Password
    await forgot.resetPassword(data.validPassword);

    await forgot.goBackToLogin();

});