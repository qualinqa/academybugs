import { test, expect } from '@playwright/test';
import { ProductsListPage, ProductCardPage, ForgotPasswordPage, SignUpPage, AccountPage, PaymentPage, BugPopupsPage } 
from '../src/pages/index.js';
import { URL, errorsText } from '../src/consts/index.js';
import { CommentBuilder, PaymentBuilder, DataUserBuilder } from '../src/builders/index.js';

const paymentBuilder = new PaymentBuilder()
      .addFirstName()
      .addLastName()
      .addAddress()
      .addCity()
      .addZipCode()
      .addPhone()
      .generatePayment();

const dataUserBuilder = new DataUserBuilder()
      .addFirstName()
      .addLastName()
      .addEmail()
      .addPassword()
      .generateDataUser();

const commentBuilder = new CommentBuilder()
      .addCommentName()
      .addCommentEmail()
      .addCommentText()
      .generateComment();

      // Account tests

test.describe('I. Account Bugs', () => {
  test.beforeEach(async ({ page }) => {
      const productsListPage = new ProductsListPage(page);
      const productCardPage = new ProductCardPage(page);
      
      await productsListPage.open(URL);
      await productsListPage.acceptCookies();
      await productsListPage.gotoProductCard();
      await productCardPage.gotoSignUp();
      });

test('1. Click on the payment information address', async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      const accountPage = new AccountPage(page);
      const bugPopupsPage = new BugPopupsPage(page);
      
      await signUpPage.signInAndGoToAccountPage(
            dataUserBuilder.firstName,
            dataUserBuilder.lastName,
            dataUserBuilder.email,
            dataUserBuilder.password
            );
            
      await accountPage.gotoPaymentAddress();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);    
      });

test('2. Adding payment information', async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      const accountPage = new AccountPage(page);
      const paymentPage = new PaymentPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await signUpPage.signUpandGoToAccountPage(
            dataUserBuilder.email,
            dataUserBuilder.password
            );

      await accountPage.gotoPayment();
      
      await paymentPage.updatePayment(
            paymentBuilder.firstName, 
            paymentBuilder.lastName, 
            paymentBuilder.address, 
            paymentBuilder.city, 
            paymentBuilder.zipCode, 
            paymentBuilder.phone
      );

      await paymentPage.clickPaymentLoader();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
      });
      
test('3. Password recovery', async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      const forgotPasswordPage = new ForgotPasswordPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await signUpPage.goToForgotPassword();
      await forgotPasswordPage.enterUserEmail(dataUserBuilder.email);

      await expect(bugPopupsPage.bugLayerInfo)
            .toContainText(errorsText.crashBugShortText);
      });
});

// Products tests

test.describe('II. Goods bugs', () => {
  test.beforeEach(async ({ page }) => {
      const productsListPage = new ProductsListPage(page);
      
      await productsListPage.open(URL);
      await productsListPage.acceptCookies();
      await productsListPage.gotoProductCard();
      });

test('1. Go to product description page', async ({ page }) => {
            const productCardPage = new ProductCardPage(page);
            const bugPopupsPage = new BugPopupsPage(page);
      
            await productCardPage.gotoDescription();
      
            await expect(bugPopupsPage.bugPopupQuestion)
                  .toContainText(errorsText.bugQuestion);
      });
    
test('2. Change currency in the product card', async ({ page }) => {      
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);
    
      await productCardPage.changeCurrencyEUR();

      await expect(bugPopupsPage.crashLayer).toBeVisible();
      });

test('3. Go to the manufacturer page', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoManufacturer();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
      });

test('4. Go to Twitter page', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoTwitter();
      
      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
      });

test('5. Go to Hot Item page', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoHotItem();
      
      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
      });

test('6. Adding a comment to a product', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.postComment(commentBuilder.name, commentBuilder.email, commentBuilder.text);

      await expect(bugPopupsPage.bugLayerInfo)
            .toContainText(errorsText.crashBugLongText);
      });

test('7. Changing the quantity of goods in the card', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.addToCart();
      await productCardPage.updateQuantity();

      await expect(bugPopupsPage.bugPopupCongrats)
            .toContainText(errorsText.bugCongrats);
      });

test('8. Filtering products by price', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.filterByPrice();
      
      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

test('9. Click on the total cost of goods', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.addToCart();
      await productCardPage.getTotalPrice();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
      });

test('10. Click on the Sing In button', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoSignIn();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
      });

});