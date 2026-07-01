const { test, expect } = require('@playwright/test');

test('Full DEMO', async ({ page }) => { 
    await page.goto('http://emissupport-staging.s3-website.ap-south-1.amazonaws.com/auth/login?returnUrl=%2Fdashboard', { waitUntil: 'networkidle' });
    await page.setViewportSize({ width:1550, height: 800 });

    await page.reload();

    const pageurl = await page.url();
    console.log('page url is:', pageurl)

    await expect(page).toHaveURL('http://emissupport-staging.s3-website.ap-south-1.amazonaws.com/auth/login?returnUrl=%2Fdashboard');

    const pageTitle = await page.title();
    console.log('page title is :', pageTitle);

    await expect(page).toHaveTitle('EMIS | Tamil Nadu Schools');

    const logo = await page.locator('img');
    await expect(logo).toBeVisible()

    const string1=await page.getByRole('heading', { name: 'கல்வி மேலாண்மைத் தகவல் மையம்' });
    await expect(string1).toBeVisible()

    await page.close();
});
