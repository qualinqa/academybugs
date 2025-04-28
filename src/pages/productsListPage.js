export class ProductsListPage {
    constructor(page) {
        this.page = page
        this.minCountProducts = page.getByRole('link', { name: '10' })
        this.addProductButton = page.locator('#ec_add_to_cart_27')
        this.productCard = page.locator('#ec_product_image_effect_4881370')
        this.acceptCookiesButton = page.getByRole('button', { name: 'Accept cookies' })
    }

    async open(URL) {
        await this.page.goto(URL);
    };

    async acceptCookies() {
        await this.acceptCookiesButton.waitFor({ state: 'attached' });
        await this.acceptCookiesButton.waitFor({ state: 'visible' });
        await this.acceptCookiesButton.click();
    }

    async gotoMinCountProducts() {
        await this.minCountProducts.waitFor({ state: 'attached' });
        await this.minCountProducts.waitFor({ state: 'visible' });
        await this.minCountProducts.click();
    }

    async gotoProductCard() {
        await this.productCard.waitFor({ state: 'attached' });
        await this.productCard.waitFor({ state: 'visible' });
        await this.productCard.click();
    }
        
    async checkOutProduct() {
        await this.addProductButton.waitFor({ state: 'attached' });
        await this.addProductButton.waitFor({ state: 'visible' });
        await this.addProductButton.click();
        await this.checkOutButton.waitFor({ state: 'attached' });
        await this.checkOutButton.waitFor({ state: 'visible' });
        await this.checkOutButton.click();
    }
}