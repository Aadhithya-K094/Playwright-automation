const { test, expect } = require('@playwright/test');
const { request } = require('node:https');
test('login page', async ({ page }) => {

    //goto url
    await page.goto('https://emis-react-staging.tnsed.com/', { waitUtile: "networkidle" });
    await page.waitForTimeout(500);
    await page.setViewportSize({ width: 1500, height: 900 })

    await page.reload();

    //Verify url
    const pageurl = await page.url();
    console.log('The page url is :', pageurl)

    await expect(page).toHaveURL('https://emis-react-staging.tnsed.com/')

    //verify title
    const pagetitle = await page.title();
    console.log('The page title is:', pagetitle);

    await expect(page).toHaveTitle('EMIS | Tamil Nadu Schools');

    //check logo visible
    const logo = await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[1]/img');
    await expect(logo).toBeVisible();

    //check string visible
    const string = await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/span');
    await expect(string).toBeVisible();

    //User Placeholder
    const placeholder = await page.getByPlaceholder('UserName');
    console.log(placeholder);
    await expect(placeholder).toBeVisible('UserName');

    //User id
    const userid = await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
    await userid.hover()
    await page.waitForTimeout(500);
    await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
    await page.waitForTimeout(500);
    await page.fill('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input','4028609');
    // await expect(await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input').toBeVisible());
    // await expect(await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input').toBeEmpty());
    // await expect(await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input').toBeEditable());


    //password placeholder
    const placeholder1 = await page.getByPlaceholder('Password');
    console.log(placeholder1);
    await expect(placeholder1).toBeVisible('Password');

    //password field
    const password = await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input');
    await password.hover();
    await page.waitForTimeout(500);
    await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input');
    await page.waitForTimeout(500);
    await page.fill('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input','test@123');
    await page.waitForTimeout(500)
    // await expect(await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input').toBeVisible());
    // await expect(await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input').toBeEmpty());
    // await expect(await page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[3]/span/input').toBeEditable())

    await page.click('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[4]/button[1]/span');
    await page.waitForTimeout(5000)

    await page.close();

});