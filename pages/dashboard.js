export class dashboardPage {
    constructor(page) {
        this.page = page;
        this.menulist = '//*[@id="root"]/div/nav';
        this.menunavigation = '//*[@id="root"]/div/nav';
    }

    async navigateTheMenu(menuList) {
        const menus = await this.page.$$(this.menulist);
        for (const menu of menus) {
            if (menuList === await menu.textContent()) {
                await menu.click();
                break;
            }
        }
        await this.page.locator(this.menunavigation).click();
    }

    async backToMenu() {
        await this.page.goBack();
    }
}