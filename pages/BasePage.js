class BasePage {

    constructor(page) {
        this.page = page;
    }

    // ==========================
    // Browser Actions
    // ==========================

    async open(url) {
        await this.page.goto(url, {
            waitUntil: "load",
            timeout: 90000
        });

        await this.page.setViewportSize({
            width: 1500,
            height: 900
        });
    }

    async reloadPage() {
        await this.page.reload();
    }

    async closePage() {
        await this.page.close();
    }

    async wait(seconds = 500) {
        await this.page.waitForTimeout(seconds);
    }

    async waitForLoad() {
        await this.page.waitForLoadState("networkidle");
    }

    // ==========================
    // Locator Actions
    // ==========================

    async click(locator) {
        await locator.waitFor({
            state: "visible"
        });

        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async hover(locator) {
        await locator.hover();
    }

    async clear(locator) {
        await locator.clear();
    }

    async press(locator, key) {
        await locator.press(key);
    }

    // ==========================
    // Verification
    // ==========================

    async verifyVisible(locator) {
        await locator.waitFor({
            state: "visible"
        });
    }

    async verifyHidden(locator) {
        await locator.waitFor({
            state: "hidden"
        });
    }

    // ==========================
    // Screenshot
    // ==========================

    async takeScreenshot(name) {

        await this.page.screenshot({
            path: `D:/Playwright test file/tests/Screenshot/${Date.now()}_${name}.png`,
            fullPage: true
        });

    }

    async takeLocatorScreenshot(locator, name) {

        await locator.screenshot({
            path: `D:/Playwright test file/tests/Screenshot/${Date.now()}_${name}.png`
        });

    }

    // ==========================
    // Logging
    // ==========================

    async logLocatorVisibility(name, locator) {

        const visible = await locator.isVisible();

        console.log(`${name}: ${visible ? "Visible" : "Not Visible"}`);

        return visible;

    }

    async logAttribute(name, locator, attribute) {

        const value = await locator.getAttribute(attribute);

        console.log(`${name}: ${value}`);

        return value;

    }

    async logTextContent(name, locator) {

        const text = await locator.textContent();

        console.log(`${name}: ${text?.trim()}`);

        return text;

    }

    async logCount(name, locator) {

        const count = await locator.count();

        console.log(`${name} Count: ${count}`);

        return count;

    }

    // ==========================
    // URL & Title
    // ==========================

    async getCurrentURL() {

        const url = this.page.url();

        console.log("Current URL:", url);

        return url;

    }

    async getTitle() {

        const title = await this.page.title();

        console.log("Page Title:", title);

        return title;

    }

}

module.exports = { BasePage };