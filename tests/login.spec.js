const { test, expect } = require("@playwright/test");


test("login page", async ({ page }) => {
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


  //Verify url
  const pageurl = await page.url();
  console.log("The page url is :", pageurl);

  await expect(page).toHaveURL("https://tnemis-staging.tnsed.com/auth/login?returnUrl=%2Fdashboard");

  //verify title
  const pagetitle = await page.title();
  console.log("The page title is:", pagetitle);

  await expect(page).toHaveTitle("EMIS | Tamil Nadu Schools");

  //IMG visible 
  const wrapper = await page.locator('.auth-side-wrapper');
  await expect(wrapper).toBeVisible();
  console.log("img visible:", await wrapper.count());
  await wrapper.screenshot({ path: 'D:/Playwright test file/tests/Screenshot/' + Date.now() + 'wrapper.png' });

  //check logo visible
  const logo = page.locator('img');
  await expect(logo).toBeVisible();
  console.log("logo visible:", await logo.count());

  await logo.screenshot({ path: 'D:/Playwright test file/tests/Screenshot/' + Date.now() + 'logo.png' });

  //check string visible
  const string = page.getByRole('heading', { name: 'கல்வி மேலாண்மைத் தகவல் மையம்' });
  await expect(string).toBeVisible();
  console.log("This is string:", await string.textContent());

  //label of username
  const label1 = await page.getByText('User Name');
  console.log("This is lable:", await label1.textContent());
  await expect(label1).toBeVisible();

  //User Placeholder
  const placeholder = await page.getByRole('textbox', { name: 'User Name' });
  console.log("This is place holder:", placeholder);
  await expect(placeholder).toBeVisible();


  //label of password
  const label2 = await page.getByText('Password', { exact: true });
  console.log("This is lable:", await label2.textContent());
  await expect(label2).toBeVisible();


  //password placeholder
  const placeholder1 = await page.getByRole('textbox', { name: 'Password' });
  console.log('This is placeholder:', placeholder1);
  await expect(placeholder1).toBeVisible("Password");

  // invalid User id with space
  const userid1 = await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await await page.getByRole('textbox', { name: 'User Name' }).fill("   ");
  await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'invalidUser.png' })

  //invalid password field
  const password1 = await page.getByRole('textbox', { name: 'Password' }).click();;
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("test@123");
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'invalidPassword.png' })

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);


  // valid User id
  const userid2 = await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await await page.getByRole('textbox', { name: 'User Name' }).fill("4028609");



  //invalid password field with space
  const password2 = await page.getByRole('textbox', { name: 'Password' }).click();;
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("dhhdsuivb");
  await page.waitForTimeout(500);


  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);


  //invalid user id with alphabets
  const userid3 = await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await await page.getByRole('textbox', { name: 'User Name' }).fill("jkdbfbjdsbvi");




  // valid password field
  const password3 = await page.getByRole('textbox', { name: 'Password' }).click();;
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("test@123");
  await page.waitForTimeout(500);

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);


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
  await page.waitForTimeout(5000);

  //close
  await page.close();
});