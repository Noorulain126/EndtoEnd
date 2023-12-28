class Loginpageobject {
  
  validateLoginPage() {
    cy.url().should('include', '.com');
  }

  getEmailInput() {
    return cy.get('[data-test="username"]').should('be.visible');
  }

  getPasswordInput() {
    return cy.get('[data-test="password"]').should('be.visible');
  }

  getLoginButton() {
    return cy.get('[data-test="login-button"]').should('be.visible');
  }

  loginUser(email, password) {
    this.getEmailInput().type(email);
    this.getPasswordInput().type(password);
    cy.wait(500);
    this.getLoginButton().click();
  }
  errorIsDisplayed() {
    cy.get('yourErrorAlertSelector').should('be.visible');
  }
}
export default Loginpageobject;