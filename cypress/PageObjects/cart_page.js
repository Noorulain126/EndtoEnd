export class AddCartPage {
  
  getCartItemSelector(itemName) {
    return cy.get('.inventory_item').contains(itemName).should('exist');
  }

  navigateToCart() {
    cy.get('#shopping_cart_container').click();
  }

  navigateToLink(){
    cy.get('.shopping_cart_link').click();
  }

  getAddToCartButton() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible');
  }
   
  getCartItemCount() {
    return cy.get('.shopping_cart_badge');
  }

  removeItemFromCart() {
    cy.wait(2000); 
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
  }

  addToCart(itemName) {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }
}
export default AddCartPage;

