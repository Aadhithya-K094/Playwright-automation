const { test, expect } = require("@playwright/test");

test("Forgot password", async ({ page }) => {
    // test.setTimeout(90000);

    // goto url
    await page.goto("https://tnemis-staging.tnsed.com/auth/login?returnUrl=%2Fdashboard", {
        waitUntil: "load", //timeout: 90000
    });
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1500, height: 900 });

    //reload
    await page.reload();

    //forgot password
    await page.getByRole('button', { name: 'Forgot Password' }).click();
    await page.waitForTimeout(500);

    //lable getByText('Please Select Your User Type *')
    const lable3 = await page.getByText('Enter User Id ');
    console.log('This is lable:', await lable3.textContent());
    await expect(lable3).toBeVisible()

    //OTP placeholder fill User Name
    const placeholder6 = await page.getByRole('textbox', { name: 'Enter User Id' });
    console.log("This is placeholder:", placeholder6);
    await expect(placeholder6).toBeVisible();

    //Invalid school id
    const invalid = await page.getByRole('textbox', { name: 'Enter User Id *' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Enter User Id' }).fill('40286@..09');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'invalidpassword.png' })


    //request otp
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.waitForTimeout(500);

    const invalid1 = await page.getByRole('textbox', { name: 'Enter User Id *' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Enter User Id' }).fill('4028609548494');
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'invalidpassword.png' })

    //request otp
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.waitForTimeout(500);

    //fill user id with space
    await page.getByRole('textbox', { name: 'Enter User Id *' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Enter User Id' }).fill('          ');
    await page.waitForTimeout(500);
    //request otp
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.waitForTimeout(500);

    //valid user id and click otp
    await page.getByRole('textbox', { name: 'Enter User Id *' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Enter User Id' }).fill('4028609');
    await page.waitForTimeout(500);
    await page.getByRole('button', { name: 'Request OTP' }).click();
    await page.waitForTimeout(500);

    // OTP * label
    const lable7 = await page.getByText('OTP', { exact: true });
    console.log("This is placeholder:", await lable7.textContent());
    await expect(lable7).toBeVisible();

    // OTP field placeholder
    const placeholder7 = await page.getByRole('textbox', { name: 'Enter the OTP' });
    console.log("This is placeholder:", placeholder7);
    await expect(placeholder7).toBeVisible();

    //invalid OTP
    await page.getByRole('textbox', { name: 'Enter the OTP' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Enter the OTP' }).fill('854555');
    await page.waitForTimeout(500);
    await page.getByLabel('OTP Submission').getByRole('button', { name: 'Submit OTP' }).click();
    await page.waitForTimeout(500);

    await page.getByRole('textbox', { name: 'Enter the OTP' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Enter the OTP' }).fill('@@@@.....');
    await page.waitForTimeout(500);
    await page.getByLabel('OTP Submission').getByRole('button', { name: 'Submit OTP' }).click();
    await page.waitForTimeout(500);

    //close popup
    await page.getByRole('button', { name: 'Close' }).click();
    await page.waitForTimeout(500);

    // // New Password * label
    // const lable8 = await page.getByText('New Password *');
    // console.log("This is placeholder:", lable8);
    // await expect(lable8).toBeVisible('New Password *');

    // // fill the new password
    // const placeholder8 = await page.getByRole('textbox', { name: 'Enter the new password' });
    // console.log("This is placeholder:", placeholder8);
    // await expect(placeholder8).toBeVisible('fill the new password');

    // await page.getByRole('textbox', { name: 'Enter the new password' }).click();
    // await page.waitForTimeout(500);
    // await page.getByRole('textbox', { name: 'Enter the new password' }).fill('Test@1234');
    // await page.waitForTimeout(500);
    // await page.locator('i').nth(3).click();
    // await page.waitForTimeout(500);
    // await page.locator('i').nth(4).click();
    // await page.waitForTimeout(500);

    // // Confirm password * label
    // const lable9 = await page.getByText('Confirm Password *');
    // console.log("This is label:", lable9);
    // await expect(lable9).toBeVisible('Confirm Password *');

    // // fill the Confirm password
    // const placeholder9 = await page.getByText('Confirm password');
    // console.log("This is placeholder:", placeholder9);
    // await expect(placeholder9).toBeVisible('Confirm password');

    // await page.getByRole('textbox', { name: 'Confirm password' }).click();
    // await page.waitForTimeout(500);
    // await page.getByRole('textbox', { name: 'Confirm password' }).fill('Test@1234');
    // await page.getByRole('button', { name: 'Submit', exact: true }).click();
    // await page.waitForTimeout(500);

    //back to login
    await page.getByRole('button', { name: 'Back To Login' }).click();
    await page.waitForTimeout(500);

    //close
    await page.close();
});