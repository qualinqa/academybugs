export class PaymentPage{
    constructor(page){
        this.page = page;
        this.countryField = page.getByLabel('Country*')
        this.firstNameField = page.getByRole('textbox', { name: 'First Name*' });
        this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' });
        this.addressField = page.getByRole('textbox', { name: 'Address*' });
        this.cityField = page.getByRole('textbox', { name: 'City*' });
        this.zipCodeField = page.getByRole('textbox', { name: 'Zip Code*' });
        this.phoneField = page.getByRole('textbox', { name: 'Phone*' });
        this.updateButton = page.getByRole('button', { name: 'UPDATE' });
        this.paymentInformationUpdateButton = page.getByRole('button', {name: 'Update' });
        this.bugOverlayPayment = page.locator('#ec_account_billing_information form div').filter({ hasText: 'UPDATE CANCEL' })
        .locator('span')
    }

    async updatePayment(firstName, lastName, address, city, zipCode, phone){
        await this.countryField.selectOption('RU');
        await this.countryField.dispatchEvent('change');
        await this.firstNameField.click();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.click();
        await this.lastNameField.fill(lastName);
        await this.addressField.click();
        await this.addressField.fill(address);
        await this.cityField.click();
        await this.cityField.fill(city);
        await this.zipCodeField.click();
        await this.zipCodeField.fill(zipCode);
        await this.phoneField.click();
        await this.phoneField.fill(phone);
        await this.paymentInformationUpdateButton.click();
    }

    async clickPaymentLoader(){
        await this.bugOverlayPayment.waitFor({ state: 'attached' });
        await this.bugOverlayPayment.waitFor({ state: 'visible' });
        await this.bugOverlayPayment.click({ force: true });
    }
}