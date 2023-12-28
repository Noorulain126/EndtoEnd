import Loginpageobject from '../PageObjects/login_page';
import userCredentials from '../fixtures/accountinfo.json';
import AddCartPage from '../PageObjects/cart_page'; 
import CheckoutPage from '../PageObjects/checkoutpage';

const loginPage = new Loginpageobject();
const cartitem = new AddCartPage (); 

describe('Checkout process', () => {
  const checkoutPage = new CheckoutPage();

  describe('Select Item and Add to Cart', () => {
    beforeEach(() => {
      cy.openPage('Login'); 
      loginPage.validateLoginPage();
      loginPage.loginUser(userCredentials.email, userCredentials.password);
  });
  
    it('Checkout Process', () => {
      cartitem.addToCart('Sauce Labs Backpack');
      cy.wait(1000);
      cartitem.getCartItemCount().should('have.text', '1');
      cartitem.getCartItemCount().click();
      checkoutPage.checkoutButton.click();
      checkoutPage.enterFirstName('Noor');
      checkoutPage.enterLastName('qadir');
      checkoutPage.enterPostalCode('12345');
      checkoutPage.clickContinue();
      checkoutPage.clickFinish(); 

  });
  });
});