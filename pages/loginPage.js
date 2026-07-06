class LoginPage {
  constructor(page) {
    this.page = page;
    this.logo = page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[1]/img');
    this.userInput = page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[2]/input');
    this.passwordInput = page.getByRole('textbox', { name: 'User Name' });
    this.loginButton = page.locator('//*[@id="root"]/div/div[1]/div[2]/div[2]/div/div[4]/button[1]/span');
  }

  async goto() {
    await this.page.goto('https://emis-react-staging.tnsed.com/', { waitUntil: 'load' });
  }

  async openApplication() {
    await this.page.goto('https://emis-react-staging.tnsed.com/', { waitUntil: 'load', timeout: 90000 });
    await this.page.waitForTimeout(500);
    await this.page.setViewportSize({ width: 1500, height: 900 });
    await this.page.waitForTimeout(500);
    await this.page.reload();
    await this.page.waitForTimeout(500);
  }

  async verifyLoginPage() {
    await this.page.waitForLoadState('load');
    await this.page.waitForTimeout(500);
    const pageurl = await this.page.url();
    if (!pageurl.includes('emis-react-staging.tnsed.com')) {
      throw new Error(`Unexpected URL: ${pageurl}`);
    }
    const pagetitle = await this.page.title();
    if (pagetitle !== 'EMIS | Tamil Nadu Schools') {
      throw new Error(`Unexpected title: ${pagetitle}`);
    }
    if (!await this.logo.isVisible()) {
      throw new Error('Login logo not visible');
    }
  }

  async fillUsername(username) {
    await this.userInput.fill(username);
    await this.page.waitForTimeout(500);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
    await this.page.waitForTimeout(500);
  }

  async clickLogin() {
    await this.loginButton.click();
    await this.page.waitForTimeout(500);
  }

  async login(username, password) {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
  }

  async isLogoVisible() {
    return this.logo.isVisible();
  }
}

module.exports = LoginPage;
