export class ProductCardPage {

    constructor(page) {
        this.page = page
        this.currencyDropdown = page.locator('#ec_currency_conversion')
        this.manufacturerCard = page.getByRole('link', { name: 'HDX' })
        this.twitterButton = page.getByRole('link', { name: 'X', exact: true })
        this.mySpaceButton = page.getByRole('link', { name: 'MySpace' })
        this.hotItemCard = page.getByRole('link', { name: 'Silver Heart Bracelet' })
        this.signUpButton = page.getByRole('link', { name: 'Sign Up' })
        this.nameInput = page.getByRole('textbox', { name: 'Name*' })
        this.emailInput = page.getByRole('textbox', { name: 'Email*' })
        this.textInput = page.getByRole('textbox', { name: 'Comment' })
        this.signInButton = page.getByRole('button', { name: 'SIGN IN' })
        this.postCommentButton = page.getByRole('button', { name: 'Post Comment' })
        this.filterByPriceItem = page.getByRole('link', { name: '$15.00 - $19.99 (1)' })
        this.loaderMySpace = page.locator('#span.ec_cart_billing_info_update_loader')
        this.errorMySpace = page.getByText('Please wait…')
        this.loaderHotItem = page.locator('#post-1820 span');
        this.descriptionButton = page.locator('.ec_details_description.academy-bug')
        this.addToCartButton = page.getByRole('button', { name: 'ADD TO CART' })
        this.totalPriceButton = page.locator('#ec_cart_total')
        this.quantityField = page.locator('input.ec_quantity')
        this.updateQuantityButton = page.getByText('UPDATE')
    }

    async changeCurrencyEUR(){
        await this.currencyDropdown.waitFor({ state: 'attached' });
        await this.currencyDropdown.waitFor({ state: 'visible' });
        await this.currencyDropdown.selectOption('EUR');
        await this.page.waitForTimeout(1000);
        await this.currencyDropdown.dispatchEvent('change');
    }

    async gotoManufacturer(){
        await this.manufacturerCard.waitFor({ state: 'attached' });
        await this.manufacturerCard.waitFor({ state: 'visible' });
        await this.manufacturerCard.click({ force: true });
    }

    async gotoTwitter(){
        await this.twitterButton.waitFor({ state: 'attached' });
        await this.twitterButton.waitFor({ state: 'visible' });
        await this.twitterButton.click();
    }
    
    async gotoHotItem(){
        await this.hotItemCard.waitFor({ state: 'attached' });
        await this.hotItemCard.waitFor({ state: 'visible' });
        await this.hotItemCard.click({ force: true });
        await this.loaderHotItem.waitFor({ state: 'attached' });
        await this.loaderHotItem.waitFor({ state: 'visible' });
        await this.loaderHotItem.click({ force: true });
    }

    async postComment(name, email, text){ 
        await this.nameInput.click();
        await this.nameInput.fill(name);
        await this.emailInput.click();
        await this.emailInput.fill(email);
        await this.textInput.click();
        await this.textInput.fill(text);
        await this.postCommentButton.click();
    }

    async filterByPrice(){
        await this.filterByPriceItem.waitFor({ state: 'attached' });
        await this.filterByPriceItem.waitFor({ state: 'visible' });
        await this.filterByPriceItem.click({ force: true });
    }

    async gotoSignIn(){
        await this.signInButton.waitFor({ state: 'attached' });
        await this.signInButton.waitFor({ state: 'visible' });
        await this.signInButton.click({ force: true });
    }

    async gotoSignUp(){
        await this.signUpButton.waitFor({ state: 'attached' });
        await this.signUpButton.waitFor({ state: 'visible' });
        await this.signUpButton.click({ force: true });
    }

    async gotoDescription(){
        await this.descriptionButton.waitFor({ state: 'attached' });
        await this.descriptionButton.waitFor({ state: 'visible' });
        await this.descriptionButton.click();
    }

    async addToCart(){
        await this.addToCartButton.waitFor({ state: 'attached' });
        await this.addToCartButton.waitFor({ state: 'visible' });
        await this.addToCartButton.click();
    }

    async getTotalPrice(){
        await this.totalPriceButton.waitFor({ state: 'attached' });
        await this.totalPriceButton.waitFor({ state: 'visible' });
        await this.totalPriceButton.click({ force: true });
    }

    async updateQuantity(){
        await this.quantityField.waitFor({ state: 'attached' });
        await this.quantityField.waitFor({ state: 'visible' });
        await this.quantityField.click();
        await this.quantityField.fill('43');
        await this.updateQuantityButton.click();
    }
}