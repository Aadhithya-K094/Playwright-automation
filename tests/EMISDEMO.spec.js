const { test, expect } = require("@playwright/test");
const { request } = require("node:https");
test("login page", async ({ page }) => {
  // test.setTimeout(90000);\

  //goto url
  await page.goto("https://emis-react-staging.tnsed.com/", {
    waitUtile: "load", //timeout: 90000
  });
  await page.waitForTimeout(500);
  await page.setViewportSize({ width: 1500, height: 900 });

  await page.reload();

    //screenshot
  await page.screenshot({ path: 'D:/Playwright test file/tests/Screenshot' + Date.now() + 'EmisLoginPage.png'})


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
  await page.getByRole('combobox').selectOption({ value: 'school' });
  await page.waitForTimeout(500);

  await page.getByRole('combobox').selectOption('teacher');
  await page.waitForTimeout(500);


  //Placeholder of User Name
  const lable4 = await page.getByText('User Name *');
  console.log("This is placeholder:", lable4);
  await expect(lable4).toBeVisible('User Name *');

  //Enter your user name 
  await page.getByRole('textbox', { name: 'Enter User Name' }).click();
  await page.waitForTimeout(500);
  await page.getByRole('textbox', { name: 'Enter User Name' }).fill('4028609');
  await page.waitForTimeout(500);

  //click submit OTP
  await page.getByRole('button', { name: 'OTP Submit' }).click();
  await page.getByRole('textbox', { name: 'Enter User Name' }).click();
  await page.getByRole('textbox', { name: 'Enter User Name' }).fill('402860954645454654');
  await page.waitForTimeout(500);

  await page.getByRole('button', { name: 'OTP Submit' }).click();

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
  await page.getByRole('textbox', { name: 'Password' }).fill("Test@123");
  await page.waitForTimeout(500);

  //View button
  const ViewButton = await page.locator('i').first().click();
  await page.waitForTimeout(500);

  //login button
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForTimeout(1000);

  //Click Home page
  await page.getByRole('link', { name: 'Home' }).click();
  await page.waitForTimeout(1000);

  //Back to page
  await page.goto('https://emis-react-staging.tnsed.com/dashboard');
  await page.waitForTimeout(500);

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

  await page.getByRole('button', { name: 'Submit' }).click(); await page.waitForTimeout(1000);


  //logout
  await page.Logout("//span[normalize-space()='Logout']");
  await page.waitForTimeout(1000);

  await page.close();
})
