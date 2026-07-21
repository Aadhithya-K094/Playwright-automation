const { test, expect } = require("@playwright/test");


test("Dashboard page", async ({ page }) => {
    // test.setTimeout(90000);

    // goto url
    await page.goto("https://tnemis-staging.tnsed.com/auth/login?returnUrl=%2Fdashboard", {
        waitUntil: "load", //timeout: 90000
    });
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1500, height: 900 });

    await page.reload();
    //   screenshot
    await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'reloadPage.png' })

    //User id
    const userid4 = await page.getByRole('textbox', { name: 'User Name' }).click();
    await page.waitForTimeout(500);
    await await page.getByRole('textbox', { name: 'User Name' }).click();
    await page.waitForTimeout(500);
    await await page.getByRole('textbox', { name: 'User Name' }).fill("4028609");
    await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'validUser.png' })

    //password field
    const password4 = await page.getByRole('textbox', { name: 'Password' }).click();;
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.waitForTimeout(500);
    await page.getByRole('textbox', { name: 'Password' }).fill("Test@123");
    await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'ValidPassword.png' })
    await page.waitForTimeout(500);

    //View button
    const ViewButton = await page.locator('i').first().click();
    await page.waitForTimeout(500);

    //login button
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForTimeout(1000);

    //click home page
    await page.getByRole('link', { name: 'Home' }).click();
    await page.waitForTimeout(1000)
    await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'HomePage.png' })

    //logo visible
    const logo1 = page.locator('#govlogo');
    await expect(logo1).toBeVisible();
    console.log("logo visible:", await logo1.count());
    await logo1.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'logo1.png' });

    const logo2 = page.locator('#profileDropdown').first()
    await expect(logo2).toBeVisible();
    console.log("logo visible:", await logo2.count());
    await logo2.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'logo2.png' })

    //check string visible
    const string1 = page.getByRole('link', { name: 'TN  EMIS' });
    await expect(string1).toBeVisible();
    console.log("This is string:", await string1.textContent());
    await string1.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'string1.png' })

    // Locate all menu elements
    const menuLocator = page.locator('.menu-title');

    // Count total menus
    const menuCount = await menuLocator.count();

    console.log("Total Menus:", menuCount);

    // Print each menu name
    for (let i = 0; i < menuCount; i++) {
        const menuName = await menuLocator.nth(i).textContent();
        console.log(`Menu ${i + 1}: ${menuName?.trim()}`);
    }

    //menu navigate

    await page.getByText('IFHRMS / Service Register').click();
    await page.waitForTimeout(500);

    await page.locator('a').filter({ hasText: 'Home' }).click();
    await page.waitForTimeout(500);

    await page.getByText('Component').click();
    await page.waitForTimeout(500);

    await page.getByText('demo1').click();
    await page.waitForTimeout(500);

    await page.getByText('Approvals').click();
    await page.waitForTimeout(500);

    await page.getByText('Reports').click();
    await page.waitForTimeout(500);

    await page.getByRole('link', { name: 'Reports' }).click();
    await page.waitForTimeout(500);

    await page.locator('a').filter({ hasText: 'dummy' }).click();
    await page.waitForTimeout(500);

    await page.getByText('EMIS Tickets').click();
    await page.waitForTimeout(500);


    //logout
    await page.getByText('Saraswathi').click();
    await page.waitForTimeout(500);
    await page.getByRole('link', { name: ' Log Out' }).click();
    await page.waitForTimeout(500);

    //close page
    await page.close();


});