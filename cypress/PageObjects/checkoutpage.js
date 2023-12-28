export class CheckoutPage {
  
    get firstNameInput() {
      return cy.get('#first-name');
    }
  
    get lastNameInput() {
      return cy.get('#last-name');
    }

    get checkoutButton() {
      return cy.get('[data-test="checkout"]');
    }
  
    get postalCodeInput() {
      return cy.get('#postal-code');
    }
  
    get continueButton() {
      return cy.get('#continue');
    }
  
    get finishButton() {
      return cy.get('#finish');
    }
  
    get cancelButton() {
      return cy.get('#cancel');
    }
  
    get errorMessage() {
      return cy.get('h3[data-test="error"]');
    }
  
    enterFirstName(value) {
      this.firstNameInput.type(value);
    }
  
    enterLastName(value) {
      this.lastNameInput.type(value);
    }
  
    enterPostalCode(value) {
      this.postalCodeInput.type(value);
    }
  
    clickContinue() {
      this.continueButton.click();
    }
  
    clickFinish() {
      this.finishButton.click();
    }
  
    clickCancel() {
      this.cancelButton.click();
    }
  
    getErrorMessageText() {
      return this.errorMessage.text();
    }
  
    
  }
  export default CheckoutPage;