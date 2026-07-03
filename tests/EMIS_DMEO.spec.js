const { test, expect } = require("@playwright/test");
const { request } = require("node:https");
test("login page", async ({ page }) => {
  //goto url
  await page.goto("https://emis-react-staging.tnsed.com/", {
    waitUtile: "networkidle",
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
  const userid1= await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
  );
  await userid1.hover();
  await page.waitForTimeout(500);
  await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
    "      ",
  );


  //invalid password field
  const password1 = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await password1.hover();
  await page.waitForTimeout(500);
  await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
    "test@123",
  );
  await page.waitForTimeout(500);

  //login button
   await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[4]/button[1]/span',
  );
  await page.waitForTimeout(5000);


   // valid User id
  const userid2 = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
  );
  await userid2.hover();
  await page.waitForTimeout(500);
  await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
    "4028609",
  );

  //invalid password field with space
  const password2 = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await password2.hover();
  await page.waitForTimeout(500);
  await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
    "    ",
  );
  await page.waitForTimeout(500);

  //login button
   await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[4]/button[1]/span',
  );
  await page.waitForTimeout(5000);


   //invalid user id with alphabets
  const userid3= await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
  );
  await userid3.hover();
  await page.waitForTimeout(500);
  await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
    "jgfgajgvcsfyusad",
  );

  
  // valid password field
  const password3= await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await password3.hover();
  await page.waitForTimeout(500);
  await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
    "test@123",
  );
  await page.waitForTimeout(500);

  //login button
   await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[4]/button[1]/span',
  );
  await page.waitForTimeout(5000);


  //User Placeholder
  const placeholder = await page.getByPlaceholder("UserName");
  console.log(placeholder);
  await expect(placeholder).toBeVisible("UserName");

  //User id
  const userid = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
  );
  await userid.hover();
  await page.waitForTimeout(500);
  await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input',
    "4028609",
  );

  //password placeholder
  const placeholder1 = await page.getByPlaceholder("Password");
  console.log(placeholder1);
  await expect(placeholder1).toBeVisible("Password");

  //password field
  const password = await page.locator(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await password.hover();
  await page.waitForTimeout(500);
  await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
  );
  await page.waitForTimeout(500);
  await page.fill(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input',
    "test@123",
  );
  await page.waitForTimeout(500);

  await page.click(
    '//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[4]/button[1]/span',
  );
  await page.waitForTimeout(5000);

  await page.close();
});
