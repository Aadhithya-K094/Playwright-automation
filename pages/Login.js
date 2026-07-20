export class loginPage {
    constructor(page) {
        this.page = page;
        this.Username_textbox = page.getByRole('textbox', { name: 'User Name' });
        this.password_textbox = page.getByRole('textbox', { name: 'Password' });
        this.login_button = page.getByRole('button', { name: 'Login' });
    }

    async gotoLoginPage() {
        await this.page.goto('https://emis-react-staging.tnsed.com/');
    }

    async login(username, password) {
        await this.Username_textbox.fill(username);
        await this.password_textbox.fill(password);
        await this.login_button.click();
    }
}