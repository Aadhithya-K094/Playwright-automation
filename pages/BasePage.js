class BasePage {

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

    async takeScreenshot(name) {

        await this.page.screenshot({
            path: `D:/Playwright test file/tests/Screenshot/${Date.now()}_${name}.png`,
            fullPage: true
        });

    }

    async logLocatorVisibility(name, locator) {
        const visible = await locator.isVisible();
        console.log(`The ${name} is: ${visible ? 'visible' : 'not visible'}`);
        return visible;
    }

    async logAttribute(name, locator, attribute) {
        const value = await locator.getAttribute(attribute);
        console.log(`The ${name} is: ${value}`);
        return value;
    }

    async logTextContent(name, locator) {
        const text = await locator.textContent();
        console.log(`The ${name} is: ${text?.trim()}`);
        return text;
    }

}

module.exports = { BasePage };