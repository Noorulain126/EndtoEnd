import LoginPage from '../PageObjects/login_page';
import userCredentials from '../fixtures/accountinfo.json';
import AddCartPage from '../PageObjects/cart_page';

const loginPage = new LoginPage();
const cartitem = new AddCartPage();
  
describe('SauceDemo', () => {
    beforeEach(() => {
        cy.openPage('Login'); 
        loginPage.validateLoginPage();
        loginPage.loginUser(userCredentials.email, userCredentials.password);
    });

  it('should remove an item from the cart', () => {
  cartitem.addToCart('Sauce Labs Backpack');
  cartitem.getCartItemCount().should('have.text', '1');
  cartitem.removeItemFromCart();
  });
});