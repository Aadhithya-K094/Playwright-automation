const { test, expect } = require("@playwright/test");
const { request } = require("node:https");
test("login page", async ({ page }) => {
  // test.setTimeout(90000);

  // goto url
  await page.goto("https://emis-react-staging.tnsed.com/", {
    waitUtile: "load", //timeout: 90000
  });
  await page.waitForTimeout(500);
  await page.setViewportSize({ width: 1500, height: 900 });

  await page.reload();
  //screenshot
  // await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'EmisLoginPage.png' })


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

  await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[1]/img',
  ).screenshot({ path: 'tests/Screenshot' + Date.now() + 'EmisLoginPage.png', fullPage: true })


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


  //forgot password
  await page.getByRole('button', { name: 'Forgot Password' }).click();
  await page.waitForTimeout(500);

  //lable getByText('Please Select Your User Type *')
  const lable3 = await page.getByText('Please Select Your User Type *')
  console.log('This is lable:', lable3)
  await expect(lable3).toBeVisible('Please Select Your User Type *')

  //dropdowns lists
  const options = await page.$$('option');

  for (const option of options) {
    console.log(await option.textContent());
  };

  // select option
  await page.getByRole('combobox').selectOption('teacher');
  await page.waitForTimeout(500);

  await page.getByRole('combobox').selectOption({ value: 'school' });
  await page.waitForTimeout(500);

   //label of User Name
  const lable4 = await page.getByText('User Name *');
  console.log("This is label:", lable4);
  await expect(lable4).toBeVisible('User Name *');

  //OTP placeholder fill User Name
  const placeholder6 = await page.getByRole('textbox', { name: 'Enter User Name' });
  console.log("This is placeholder:", placeholder6);
  await expect(placeholder6).toBeVisible('Enter User Name');

  //Invalid school id
  await page.getByRole('textbox', { name: 'Enter User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter User Name' }).fill('4028609');
  await page.waitForTimeout(500);

  await page.getByRole('textbox', { name: 'Enter User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter User Name' }).fill('4028609548494');
  await page.waitForTimeout(500);

  //fill your user name 
  await page.getByRole('textbox', { name: 'Enter User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter User Name' }).fill('          ');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'OTP Submit' }).click();

  //click submit OTP
  await page.getByRole('textbox', { name: 'Enter User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter User Name' }).fill('33020700907');
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'OTP Submit' }).click();

  //click Request OTP
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.waitForTimeout(500);


  // // OTP * label
  // const lable7 = await page.getByText('OTP *');
  // console.log("This is placeholder:", lable7);
  // await expect(lable7).toBeVisible('OTP *');

  // // fill the OTP
  // const placeholder7 = await page.getByRole('textbox', { name: 'Enter the OTP' });
  // console.log("This is placeholder:", placeholder7);
  // await expect(placeholder7).toBeVisible('Enter the OTP');

  // //invalid OTP
  // await page.getByRole('textbox', { name: 'Enter the OTP' }).click();
  // await page.waitForTimeout(500);
  // await page.getByRole('textbox', { name: 'Enter the OTP' }).fill('854555');
  // await page.waitForTimeout(500);
  // await page.getByRole('button', { name: 'Submit OTP' }).click();
  // await page.waitForTimeout(500);

  // await page.getByRole('textbox', { name: 'Enter the OTP' }).click();
  // await page.waitForTimeout(10000);
  // await page.getByRole('textbox', { name: 'Enter the OTP' }).fill('431740');
  // await page.waitForTimeout(500);
  // await page.getByRole('button', { name: 'Submit OTP' }).click();
  // await page.waitForTimeout(500);

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

  //label of username
  const label1 = await page.getByText('User Name *');
  console.log("This is lable:", label1);
  await expect(label1).toBeVisible('User Name *')

  //User Placeholder
  const placeholder = await page.getByPlaceholder("User Name");
  console.log("This is place holder", placeholder);
  await expect(placeholder).toBeVisible("User Name");

  //User id
  const userid4 = await page.getByRole('textbox', { name: 'User Name' });
  await userid4.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'User Name' }).fill("33020700907");


  //label of password
  const label2 = await page.getByText('Password *');
  console.log("This is lable:", label2);
  await expect(label2).toBeVisible('Password *');


  //password placeholder
  const placeholder1 = await page.getByPlaceholder("Password");
  console.log('This is placeholder:', placeholder1);
  await expect(placeholder1).toBeVisible("Password");

  //password field
  const password4 = await page.getByRole('textbox', { name: 'Password' });
  await password4.hover();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Password' }).fill("Test@1234");
  await page.waitForTimeout(500);

  //View button
  const ViewButton = await page.locator('i').first().click();
  await page.waitForTimeout(500);

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(1000);


  //Click Home page
  const homepage = await page.getByRole('link', { name: 'Home' }).click();
  await page.hover();

  //for loap for paragraph
  const paragraphs = await page.$$('p');

  for (const p of paragraphs) {
    console.log(await p.textContent())
  };

  //for loap for spans
  const spans = await page.$$('span')

  for (const span of spans) {
    console.log(await span.textContent())
  };


  const date = await page.getByText('06').click();
  await page.waitForTimeout(500);
  await page.getByText('Students -').click(); await page.waitForTimeout(500);

  await page.getByRole('button', { name: '✕' }).click();
  await page.waitForTimeout(500);

  await page.getByText('Today\'s BirthdayTeachers -').click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: 'OK' }).click();
  await page.waitForTimeout(500);

  await page.locator('.col-12.text-end').click();
  await page.waitForTimeout(500);

  await page.getByText('Today\'s Quotes').click();
  await page.waitForTimeout(500);

  await page.locator('#studentButton').click();
  await page.waitForTimeout(500);

  await page.getByText('By Class▼').click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '›' }).click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '›' }).click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '›' }).click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '»' }).click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '«' }).click();
  await page.waitForTimeout(500);

  await page.getByText('By Community▼').click();
  await page.waitForTimeout(500);

  await page.getByText('By Community▼').click();
  await page.waitForTimeout(500);

  await page.getByText('By Class▼').click();
  await page.waitForTimeout(500);

  await page.locator('#staffButton').click();
  await page.waitForTimeout(500);

  await page.getByText('By Type▼').click();
  await page.waitForTimeout(500);

  await page.getByText('By Designation▼').click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '»' }).click();
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: '«' }).click();
  await page.waitForTimeout(500);

  await page.locator('#inboxButton').click();
  await page.waitForTimeout(500);

  await page.getByText('/03/2023TO ALL').click();
  await page.waitForTimeout(500);

  await page.getByText('1003164tome16/03/').click();
  await page.waitForTimeout(500);

  await page.locator('div').filter({ hasText: /^sdasafgxfgsgsggf$/ }).click();
  await page.waitForTimeout(500);

  await page.getByRole('img', { name: 'back' }).click();
  await page.waitForTimeout(500);

  await page.getByText('100316416/03/').nth(1).click();
  await page.waitForTimeout(500);

  await page.getByRole('img', { name: 'back' }).click();
  await page.waitForTimeout(500);

  await page.getByText('3074501016/03/').click();
  await page.waitForTimeout(500);

  await page.getByRole('img', { name: 'back' }).click();
  await page.waitForTimeout(500);

  await page.getByText('Testing').click(); await page.waitForTimeout(500);

  await page.getByRole('button', { name: 'Submit' }).click(); await page.waitForTimeout(500);

  await page.getByText('3064404216/03/').click(); await page.waitForTimeout(500);

  await page.getByRole('radio', { name: 'Yes' }).check(); await page.waitForTimeout(500);

  await page.getByRole('button', { name: 'Submit' }).click(); await page.waitForTimeout(500);

  await page.getByText('state15/12/2022Testing').click(); await page.waitForTimeout(500);

  await page.getByRole('button', { name: ' Attachment' }).click(); await page.waitForTimeout(500);

  await page.getByRole('button', { name: 'Submit' }).click();
  await page.waitForTimeout(1000);


  //logout
  await page.Logout("//span[normalize-space()='Logout']");
  await page.waitForTimeout(1000);

  await Context.close();
  await browser.close();
});
