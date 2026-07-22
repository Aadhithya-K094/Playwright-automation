export class BasePage {

    constructor(page) {
        this.page = page;
    }

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

    async wait(milliseconds = 500) {
        await this.page.waitForTimeout(milliseconds);
    }

    async waitForLoad() {
        await this.page.waitForLoadState("networkidle");
    }

    async click(locator) {
        await locator.waitFor({ state: "visible" });
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

    async verifyVisible(locator) {
        await locator.waitFor({ state: "visible" });
    }

    async verifyHidden(locator) {
        await locator.waitFor({ state: "hidden" });
    }

    async takeScreenshot(name) {
        await this.page.screenshot({
            path: `tests/Screenshot/${this.getScreenshotTimestamp()}_${name}.png`,
            fullPage: true
        });
    }

    async takeLocatorScreenshot(locator, name) {
        await locator.screenshot({
            path: `tests/Screenshot/${this.getScreenshotTimestamp()}_${name}.png`
        });
    }

    getScreenshotTimestamp() {
        return new Date().toISOString()
            .replace("T", "_")
            .replace(/:/g, "-")
            .replace("Z", "");
    }

    async logLocatorVisibility(name, locator) {
        const visible = await locator.isVisible();
        console.log(`${name}: ${visible ? "Visible" : "Not Visible"}`);
    }

    async logAttribute(name, locator, attribute) {
        console.log(await locator.getAttribute(attribute));
    }

    async logTextContent(name, locator) {
        console.log(await locator.textContent());
    }

    async logCount(name, locator) {
        console.log(await locator.count());
    }

    async getCurrentURL() {
        return this.page.url();
    }

    async getTitle() {
        return await this.page.title();
    }

}