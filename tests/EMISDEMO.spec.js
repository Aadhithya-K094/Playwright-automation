const { test, expect } = require("@playwright/test");
const { request } = require("node:https");
test("login page", async ({ page }) => {
  test.setTimeout(90000);

  //goto url
  await page.goto("https://emis-react-staging.tnsed.com/", {
    waitUtile: "load", timeout: 90000
  });
  await page.waitForTimeout(500);
  await page.setViewportSize({ width: 1500, height: 900 });

  await page.reload();
  //Verify url
  const pageurl = await page.url();
  console.log("The page url is :", pageurl);

  await expect(page).toHaveURL("https://emis-react-staging.tnsed.com/");

  //verify title
  const pagetitle = await page.title();
  console.log("The page title is:", pagetitle);

  await expect(page).toHaveTitle("EMIS | Tamil Nadu Schools");

  //check logo visible
  const logo = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[1]/img',
  );
  await expect(logo).toBeVisible();

  //check string visible
  const string = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/span',
  );
  await expect(string).toBeVisible();

  // invalid User id with space
  const userid1 = await page.getByRole('textbox', { name: 'User Name' });
  await userid1.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).fill("   ");



  //invalid password field
  const password1 = await page.getByRole('textbox', { name: 'Password' });
  await password1.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("test@123");
  await page.waitForTimeout(500);

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);


  // valid User id
  const userid2 = await page.getByRole('textbox', { name: 'User Name' });
  await userid2.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).fill("4028609");



  //invalid password field with space
  const password2 = await page.getByRole('textbox', { name: 'Password' });
  await password2.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("dhhdsuivb");
  await page.waitForTimeout(500);


  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);


  //invalid user id with alphabets
  const userid3 = await page.getByRole('textbox', { name: 'User Name' });
  await userid3.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).fill("jkdbfbjdsbvi");




  // valid password field
  const password3 = await page.getByRole('textbox', { name: 'Password' });
  await password3.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("test@123");
  await page.waitForTimeout(500);

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);
});



test('valid login', async ({ page }) => {

  //goto url
  await page.goto("https://emis-react-staging.tnsed.com/");

  //label of username
  const label1 = await page.getByText('User Name *');
  console.log("This is lable:", label1);
  await expect(label1).toBeVisible('User Name *')

  //User Placeholder
  const placeholder = await page.getByPlaceholder("User Name");
  console.log("This is place holder",placeholder);
  await expect(placeholder).toBeVisible("User Name");

  //User id
  const userid4 = await page.getByRole('textbox', { name: 'User Name' });
  await userid4.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).fill("4028609");


  //label of password
  const label2 = await page.getByText('Password *');
  console.log("This is lable:", label2);
  await expect(label2).toBeVisible('Password *');


  //password placeholder
  const placeholder1 = await page.getByPlaceholder("Password");
  console.log('This is placeholder:',placeholder1);
  await expect(placeholder1).toBeVisible("Password");

  //password field
  const password4 = await page.getByRole('textbox', { name: 'Password' });
  await password4.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("test@123");
  await page.waitForTimeout(500);

  //View button
  const ViewButton = await page.locator('i').first().click();
  await page.waitForTimeout(500);

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(500);

  await page.close();
});
