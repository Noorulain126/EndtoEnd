import Loginpageobject from '../PageObjects/login_page';
import userCredentials from '../fixtures/accountinfo.json';
import AddCartPage from '../PageObjects/cart_page'; 

const loginPage = new Loginpageobject();
const cartitem = new AddCartPage (); 

describe('Select Item and Add to Cart', () => {
  beforeEach(() => {
    cy.openPage('Login'); 
    loginPage.validateLoginPage();
    loginPage.loginUser(userCredentials.email, userCredentials.password);
});

  it('Should add an item to the cart', () => {
    cartitem.addToCart('Sauce Labs Backpack');
    cy.screenshot();
    cy.wait(1000);
    cartitem.getCartItemCount().should('have.text', '1');
    cy.screenshot();

  }); 
});