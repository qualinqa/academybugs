export class ForgotPasswordPage {
    constructor(page) {
        this.page = page
        this.retrievePasswordButton = page.getByRole('button', { name: 'RETRIEVE PASSWORD' })
        this.emailUserBuild = page.locator('#ec_account_forgot_password_input_field')
        this.emailUserBuild = page.locator('.ec_account_forgot_password_input_field')
    }

    async enterUserEmail(email) {
        await this.emailUserBuild.waitFor({ state: 'attached' });
        await this.emailUserBuild.waitFor({ state: 'visible' });
        await this.emailUserBuild.click();
        await this.emailUserBuild.fill(email);
        await this.retrievePasswordButton.waitFor({ state: 'attached' });
        await this.retrievePasswordButton.waitFor({ state: 'visible' });
        await this.retrievePasswordButton.click();
      }
}