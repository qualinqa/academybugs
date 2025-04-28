export class SignUpPage {
    constructor(page) {
      this.page = page;
      this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' })
      this.firstNameField = page.getByRole('textbox', { name: 'First Name*' })
      this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' })
      this.emailField = page.getByRole('textbox', { name: 'Email*' })
      this.retypeEmailField = page.locator('#ec_account_register_retype_email')
      this.passwordField = page.locator('#ec_account_register_password')
      this.retypePasswordField = page.getByRole('textbox', { name: 'Retype Password*' })
      this.registerButton = page.getByRole('button', { name: 'REGISTER' })
      this.signUpEmailField = page.getByRole('textbox', { name: 'Email Address*' })
      this.signUpPasswordField = page.locator('#ec_account_login_password')
      this.signUpButton = page.getByRole('button', { name: 'SIGN IN' })
    }
    
      async goToForgotPassword() {
        await this.forgotPasswordLink.waitFor({ state: 'attached' });
        await this.forgotPasswordLink.waitFor({ state: 'visible' });
        await this.forgotPasswordLink.click();
    }
  
      async signInAndGoToAccountPage(firstName, lastName, email, password) {
        await this.firstNameField.click();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.click();
        await this.lastNameField.fill(lastName);
        await this.emailField.click();
        await this.emailField.fill(email);
        await this.retypeEmailField.click();
        await this.retypeEmailField.fill(email);
        await this.passwordField.click();
        await this.passwordField.fill(password);
        await this.retypePasswordField.click();
        await this.retypePasswordField.fill(password);
        await this.registerButton.click();
    }
  
      async signUpandGoToAccountPage(email, password) {
        await this.signUpEmailField.click();
        await this.signUpEmailField.fill(email);
        await this.signUpPasswordField.click();
        await this.signUpPasswordField.fill(password);
        await this.signUpButton.click();
      }
}