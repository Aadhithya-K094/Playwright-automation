const { test, expect } = require("@playwright/test");
const { request } = require("node:https");
test("login page", async ({ page }) => {

    //goto url
   await page.goto("https://tnemis-react-staging.tnsed.com/");
   
   //wait for loader
    await page.waitForLoadState("networkidle",50000,)
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1500, height: 900 });

    await page.reload();

    //Verify url
    const pageurl = await page.url();
    console.log("The page url is :", pageurl);

    await expect(page).toHaveURL("https://tnemis-react-staging.tnsed.com/");

    //verify title
    const pagetitle = await page.title();
    console.log("The page title is:", pagetitle);

    await expect(page).toHaveTitle("EMIS | Tamil Nadu Schools");

    //check logo visible
    const logo = await page.locator(
        '//*[@id="root"]/div/div/div/div/div[2]/div/img',
    );
    await expect(logo).toBeVisible();

    //check string visible
    const string = await page.locator(
        '#root > div > div > div > div > div.col-md-8.ps-md-0 > div > h5',
    );
    await expect(string).toBeVisible();

    // invalid User id with space
    const userid1 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid1.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "      ",
    );


    //valid password field
    const password1 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password1.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "test@123",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']"
    );
    await page.waitForTimeout(500);


    // valid User id
    const userid2 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid2.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "10001324",
    );

    //invalid password field with space
    const password2 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password2.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "    ",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']"
    );
    await page.waitForTimeout(500);


    //invalid user id with alphabets
    const userid3 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid3.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "jgfgajgvcsfyusad",
    );


    // valid password field
    const password3 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password3.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "test@123",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']");
    await page.waitForTimeout(500);

    // valid User id
    const userid5 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid5.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "10001324",
    );

    //invalid password field with space
    const password5 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password5.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "    ",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']"
    );
    await page.waitForTimeout(500);


    // valid User id
    const userid6 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid6.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "10001324",
    );

    //invalid password field with space
    const password6 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password6.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "    ",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']"
    );
    await page.waitForTimeout(500);


    // valid User id
    const userid7 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid7.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "10001324",
    );

    //invalid password field with space
    const password7 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password7.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "    ",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']"
    );
    await page.waitForTimeout(500);


    // valid User id
    const userid8 = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid8.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "10001324",
    );

    //invalid password field with space
    const password8 = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password8.hover();
    await page.waitForTimeout(500);
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginPassword"]',
        "    ",
    );
    await page.waitForTimeout(500);

    //login button
    await page.click(
        "//button[normalize-space()='Login']"
    );
    await page.waitForTimeout(500);


    //forgot password
    const forgotpassword = await page.locator(
        "//button[normalize-space()='Forgot Password']"
    );
    await forgotpassword.hover();
    await page.waitForTimeout(500);
    await page.click("//button[normalize-space()='Forgot Password']");
    await page.waitForTimeout(500);

    //forgot password USER ID
    const placeholderforgot = await page.getByPlaceholder("Enter User Id");
    console.log(placeholderforgot);
    await expect(placeholderforgot).toBeVisible("User Name");

    //label
    const lable1 = await page.getByPlaceholder("Enter User Id");
    console.log(lable1);
    await expect(lable1).toBeVisible("Enter User Id");

    //invalid id
    const Enteruserid = await page.locator(
        "(//input[@placeholder='Enter User Id'])[1]"
    );
    await Enteruserid.hover();
    await page.waitForTimeout(500);
    await page.click("(//input[@placeholder='Enter User Id'])[1]");
    await page.waitForTimeout(500);
    await page.fill(
        "(//input[@placeholder='Enter User Id'])[1]",
        "1000132455",
    );

    //invalid id with alphabets
    const Enteruserid2 = await page.locator(
        "(//input[@placeholder='Enter User Id'])[1]"
    );
    await Enteruserid2.hover();
    await page.click("(//input[@placeholder='Enter User Id'])[1]");
    await page.waitForTimeout(500);
    await page.fill(
        "(//input[@placeholder='Enter User Id'])[1]",
        "jjbffbkfjbjhhugyugyufyfa",
    );

    //valid id
    const Enteruserid3 = await page.locator(
        "(//input[@placeholder='Enter User Id'])[1]"
    );
    await Enteruserid3.hover();
    await page.waitForTimeout(500);
    await page.click("(//input[@placeholder='Enter User Id'])[1]");
    await page.waitForTimeout(500);
    await page.fill(
        "(//input[@placeholder='Enter User Id'])[1]",
        "10001324",
    );

    //click request otp
    await page.click("(//button[normalize-space()='Request OTP'])[1]");

    //click back to login
    await page.click("(//button[normalize-space()='Back To Login'])[1]");

    //lable2
    const lable2 = await page.getByPlaceholder("User Name");
    console.log(lable2);
    await expect(lable2).toBeVisible("User Name");


    //User Placeholder
    const placeholder = await page.getByPlaceholder("User Name");
    console.log(placeholder);
    await expect(placeholder).toBeVisible("User Name");

    //User id
    const userid = await page.locator(
        '//*[@id="loginUsername"]',
    );
    await userid.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="loginUsername"]');
    await page.waitForTimeout(500);
    await page.fill(
        '//*[@id="loginUsername"]',
        "10001324",
    );

    //lable3
    const lable3 = await page.getByPlaceholder("Password");
    console.log(lable3);
    await expect(lable3).toBeVisible("Password");

    //password placeholder
    const placeholder1 = await page.getByPlaceholder("Password");
    console.log(placeholder1);
    await expect(placeholder1).toBeVisible("Password");

    //password field
    const password = await page.locator(
        '//*[@id="loginPassword"]',
    );
    await password.hover();
    await page.click(
        '//*[@id="loginPassword"]',
    );
    await page.waitForTimeout(1000);
    await page.fill(
        '//*[@id="loginPassword"]',
        "test@123",
    );
    await page.waitForTimeout(1000);

    //view button
    await page.click("//i[@class='pi pi-eye position-absolute top-50 end-0 translate-middle-y me-3']")
    await page.waitForTimeout(500)
    await page.click(
        "//button[normalize-space()='Login']");
    await page.waitForTimeout(500);

    await page.close();
});
