// pages/BasePage.js

export class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async type(locator, value) {
        await locator.pressSequentially(value);
    }

    async clear(locator) {
        await locator.clear();
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async isVisible(locator) {
        return await locator.isVisible();
    }

    async wait(milliseconds) {
        await this.page.waitForTimeout(milliseconds);
    }

    async screenshot(name) {
        await this.page.screenshot({
            path: `tests/Screenshot/${name}.png`,
            fullPage: true
        });
    }
}