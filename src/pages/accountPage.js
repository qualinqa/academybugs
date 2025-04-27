export class AccountPage{
    constructor(page){
        this.paymentInformationLink = page.getByRole('link', { name: 'billing information' })
        this.paymentAddressLoader = page.locator('.ec_cart_billing_info_update_loader')
    }

    async gotoPaymentAddress(){
        await this.paymentAddressLoader.click({ force: true });
    }

    async gotoPayment(){
        await this.paymentInformationLink.click({ force: true });
    }
}