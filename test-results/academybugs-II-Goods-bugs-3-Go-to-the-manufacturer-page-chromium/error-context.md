# Test info

- Name: II. Goods bugs >> 3. Go to the manufacturer page
- Location: C:\Users\Irina\Desktop\УЧЕБА\academybugs\tests\academybugs.spec.js:131:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('#bug-popup')
Expected string: "What did you find out?"
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('#bug-popup')

    at C:\Users\Irina\Desktop\УЧЕБА\academybugs\tests\academybugs.spec.js:138:14
```

# Page snapshot

```yaml
- text: Manage consent
- link "Skip to content":
  - /url: "#sq-content"
- banner:
  - heading "AcademyBugs.com" [level=3]:
    - link "AcademyBugs.com":
      - /url: https://academybugs.com/
  - navigation:
    - list:
      - listitem:
        - link "Examples of Bugs":
          - /url: https://academybugs.com/
      - listitem:
        - link "Types of Bugs":
          - /url: https://academybugs.com/types/
      - listitem:
        - link "Find Bugs":
          - /url: https://academybugs.com/find-bugs/
      - listitem:
        - link "Report Bugs":
          - /url: https://academybugs.com/report-bugs/
      - listitem:
        - link "":
          - /url: "#"
- main:
  - article:
    - heading "Home / Shop / All Items" [level=4]:
      - link "Home":
        - /url: https://academybugs.com
      - text: /
      - link "Shop":
        - /url: https://academybugs.com/store/
      - text: /
      - link "All Items":
        - /url: https://academybugs.com/store/all-items/
    - img "Flamingo Tshirt"
    - heading "Home / Shop / All Items" [level=4]:
      - link "Home":
        - /url: https://academybugs.com
      - text: /
      - link "Shop":
        - /url: https://academybugs.com/store/
      - text: /
      - link "All Items":
        - /url: https://academybugs.com/store/all-items/
    - heading "Flamingo Tshirt" [level=1]
    - text: "$15.14 Model Number: 4881370 Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed."
    - button "-"
    - spinbutton: "1"
    - button "+"
    - button "ADD TO CART"
    - text: "Manufacturer:"
    - link "HDX":
      - /url: https://academybugs.com/extra/stored/hdx/
    - link "Facebook":
      - /url: https://www.facebook.com/sharer/sharer.php?p[url]=https://academybugs.com/store/flamingo-tshirt/&p[images][o]=https://academybugs.com/wp-content/uploads/2020/10/flamingo-tshirt-compressed.jpg&p[title]=Flamingo+Tshirt
      - img "Facebook"
    - link "X":
      - /url: https://twitter.cointent/tweet?original_referer=#
      - img "X"
    - link "Email":
      - /url: "mailto:?subject=Flamingo Tshirt&body=Link for Product: https://academybugs.com/store/flamingo-tshirt/"
      - img "Email"
    - link "Pinterest":
      - /url: https://pinterest.com/pin/create/button/?media=https%3A%2F%2Facademybugs.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fflamingo-tshirt-compressed.jpg&description=Flamingo+Tshirt&url=https%3A%2F%2Facademybugs.com%2Fstore%2Fflamingo-tshirt%2F
      - img "Pinterest"
    - link "LinkedIn":
      - /url: https://www.linkedin.com/shareArticle?mini=true&url=https://academybugs.com/store/flamingo-tshirt/
      - img "LinkedIn"
    - link "MySpace":
      - /url: https://academybugs.com/myspace/
      - img "MySpace"
    - list:
      - listitem: Description
    - paragraph: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
  - heading "Leave a Reply" [level=3]
  - paragraph: Your email address will not be published. Required fields are marked *
  - paragraph:
    - textbox "Comment"
  - paragraph:
    - textbox "Name*"
  - paragraph:
    - textbox "Email*"
  - paragraph:
    - textbox "Website"
  - paragraph:
    - button "Post Comment"
- heading "Select a Currency" [level=4]
- combobox:
  - option "USD" [selected]
  - option "EUR"
  - option "GBP"
  - option "JPY"
- heading "Product Search" [level=4]
- combobox
- button "Search"
- heading "Hot Item" [level=4]
- link:
  - /url: https://academybugs.com/anchor-bracelet
  - img
- link "Silver Heart Bracelet":
  - /url: https://academybugs.com/anchor-bracelet
- text: $275.00
- heading "Store Menu" [level=4]
- list:
  - listitem:
    - link "All Items":
      - /url: https://academybugs.com/store/all-items/
  - listitem:
    - link "Accessories [+]":
      - /url: "#"
  - listitem:
    - link "Fashion Type [+]":
      - /url: "#"
  - listitem:
    - link "Women's Pants":
      - /url: https://academybugs.com/store/womens-pants/
- heading "Filter by Price" [level=4]
- link "$15.00 - $19.99 (1)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=7
- link "$25.00 - $49.99 (2)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=2
- link "$50.00 - $99.99 (3)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=3
- link "$100.00 - $299.99 (11)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=4
- link "Greater Than $299.99 (1)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=5
- heading "Shopping Cart" [level=4]
- link "Shopping Cart (0)":
  - /url: "#"
- heading "Your Account" [level=4]
- text: Email Address*
- textbox
- text: Password*
- textbox
- paragraph:
  - link "Sign Up":
    - /url: https://academybugs.com/account/?ec_page=register
- button "SIGN IN"
- contentinfo:
  - list:
    - listitem:
      - link "uTest":
        - /url: https://www.utest.com/academy
        - img "uTest"
    - listitem:
      - link "Terms & Conditions":
        - /url: https://www.utest.com/terms-and-conditions
    - listitem:
      - link "Privacy Policy":
        - /url: https://www.utest.com/privacy-policy
- link "":
  - /url: "#"
```

# Test source

```ts
   38 |       await productsListPage.gotoProductCard();
   39 |       await productCardPage.gotoSignUp();
   40 |       });
   41 |
   42 | test('1. Click on the payment information address', async ({ page }) => {
   43 |       const signUpPage = new SignUpPage(page);
   44 |       const accountPage = new AccountPage(page);
   45 |       const bugPopupsPage = new BugPopupsPage(page);
   46 |       
   47 |       await signUpPage.signInAndGoToAccountPage(
   48 |             dataUserBuilder.firstName,
   49 |             dataUserBuilder.lastName,
   50 |             dataUserBuilder.email,
   51 |             dataUserBuilder.password
   52 |             );
   53 |             
   54 |       await accountPage.gotoPaymentAddress();
   55 |
   56 |       await expect(bugPopupsPage.bugPopupQuestion)
   57 |             .toContainText(errorsText.bugQuestion);    
   58 |       });
   59 |
   60 | test('2. Adding payment information', async ({ page }) => {
   61 |       const signUpPage = new SignUpPage(page);
   62 |       const accountPage = new AccountPage(page);
   63 |       const paymentPage = new PaymentPage(page);
   64 |       const bugPopupsPage = new BugPopupsPage(page);
   65 |
   66 |       await signUpPage.signUpandGoToAccountPage(
   67 |             dataUserBuilder.email,
   68 |             dataUserBuilder.password
   69 |             );
   70 |
   71 |       await accountPage.gotoPayment();
   72 |       
   73 |       await paymentPage.updatePayment(
   74 |             paymentBuilder.firstName, 
   75 |             paymentBuilder.lastName, 
   76 |             paymentBuilder.address, 
   77 |             paymentBuilder.city, 
   78 |             paymentBuilder.zipCode, 
   79 |             paymentBuilder.phone
   80 |       );
   81 |
   82 |       await paymentPage.clickPaymentLoader();
   83 |
   84 |       await expect(bugPopupsPage.bugPopupQuestion)
   85 |             .toContainText(errorsText.bugQuestion);
   86 |       });
   87 |       
   88 | test('3. Password recovery', async ({ page }) => {
   89 |       const signUpPage = new SignUpPage(page);
   90 |       const forgotPasswordPage = new ForgotPasswordPage(page);
   91 |       const bugPopupsPage = new BugPopupsPage(page);
   92 |
   93 |       await signUpPage.goToForgotPassword();
   94 |       await forgotPasswordPage.enterUserEmail(dataUserBuilder.email);
   95 |
   96 |       await expect(bugPopupsPage.bugLayerInfo)
   97 |             .toContainText(errorsText.crashBugShortText);
   98 |       });
   99 | });
  100 |
  101 | // Products tests
  102 |
  103 | test.describe('II. Goods bugs', () => {
  104 |   test.beforeEach(async ({ page }) => {
  105 |       const productsListPage = new ProductsListPage(page);
  106 |       
  107 |       await productsListPage.open(URL);
  108 |       await productsListPage.acceptCookies();
  109 |       await productsListPage.gotoProductCard();
  110 |       });
  111 |
  112 | test('1. Go to product description page', async ({ page }) => {
  113 |             const productCardPage = new ProductCardPage(page);
  114 |             const bugPopupsPage = new BugPopupsPage(page);
  115 |       
  116 |             await productCardPage.gotoDescription();
  117 |       
  118 |             await expect(bugPopupsPage.bugPopupQuestion)
  119 |                   .toContainText(errorsText.bugQuestion);
  120 |       });
  121 |     
  122 | test('2. Change currency in the product card', async ({ page }) => {      
  123 |       const productCardPage = new ProductCardPage(page);
  124 |       const bugPopupsPage = new BugPopupsPage(page);
  125 |     
  126 |       await productCardPage.changeCurrencyEUR();
  127 |
  128 |       await expect(bugPopupsPage.crashLayer).toBeVisible();
  129 |       });
  130 |
  131 | test('3. Go to the manufacturer page', async ({ page }) => {
  132 |       const productCardPage = new ProductCardPage(page);
  133 |       const bugPopupsPage = new BugPopupsPage(page);
  134 |
  135 |       await productCardPage.gotoManufacturer();
  136 |
  137 |       await expect(bugPopupsPage.bugPopupQuestion)
> 138 |             .toContainText(errorsText.bugQuestion);
      |              ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
  139 |       });
  140 |
  141 | test('4. Go to Twitter page', async ({ page }) => {
  142 |       const productCardPage = new ProductCardPage(page);
  143 |       const bugPopupsPage = new BugPopupsPage(page);
  144 |
  145 |       await productCardPage.gotoTwitter();
  146 |       
  147 |       await expect(bugPopupsPage.bugPopupQuestion)
  148 |             .toContainText(errorsText.bugQuestion);
  149 |       });
  150 |
  151 | test('5. Go to Hot Item page', async ({ page }) => {
  152 |       const productCardPage = new ProductCardPage(page);
  153 |       const bugPopupsPage = new BugPopupsPage(page);
  154 |
  155 |       await productCardPage.gotoHotItem();
  156 |       
  157 |       await expect(bugPopupsPage.bugPopupQuestion)
  158 |             .toContainText(errorsText.bugQuestion);
  159 |       });
  160 |
  161 | test('6. Adding a comment to a product', async ({ page }) => {
  162 |       const productCardPage = new ProductCardPage(page);
  163 |       const bugPopupsPage = new BugPopupsPage(page);
  164 |
  165 |       await productCardPage.postComment(commentBuilder.name, commentBuilder.email, commentBuilder.text);
  166 |
  167 |       await expect(bugPopupsPage.bugLayerInfo)
  168 |             .toContainText(errorsText.crashBugLongText);
  169 |       });
  170 |
  171 | test('7. Changing the quantity of goods in the card', async ({ page }) => {
  172 |       const productCardPage = new ProductCardPage(page);
  173 |       const bugPopupsPage = new BugPopupsPage(page);
  174 |
  175 |       await productCardPage.addToCart();
  176 |       await productCardPage.updateQuantity();
  177 |
  178 |       await expect(bugPopupsPage.bugPopupCongrats)
  179 |             .toContainText(errorsText.bugCongrats);
  180 |       });
  181 |
  182 | test('8. Filtering products by price', async ({ page }) => {
  183 |       const productCardPage = new ProductCardPage(page);
  184 |       const bugPopupsPage = new BugPopupsPage(page);
  185 |
  186 |       await productCardPage.filterByPrice();
  187 |       
  188 |       await expect(bugPopupsPage.bugPopupQuestion)
  189 |             .toContainText(errorsText.bugQuestion);
  190 | });
  191 |
  192 | test('9. Click on the total cost of goods', async ({ page }) => {
  193 |       const productCardPage = new ProductCardPage(page);
  194 |       const bugPopupsPage = new BugPopupsPage(page);
  195 |
  196 |       await productCardPage.addToCart();
  197 |       await productCardPage.getTotalPrice();
  198 |
  199 |       await expect(bugPopupsPage.bugPopupQuestion)
  200 |             .toContainText(errorsText.bugQuestion);
  201 |       });
  202 |
  203 | test('10. Click on the Sing In button', async ({ page }) => {
  204 |       const productCardPage = new ProductCardPage(page);
  205 |       const bugPopupsPage = new BugPopupsPage(page);
  206 |
  207 |       await productCardPage.gotoSignIn();
  208 |
  209 |       await expect(bugPopupsPage.bugPopupQuestion)
  210 |             .toContainText(errorsText.bugQuestion);
  211 |       });
  212 |
  213 | });
```