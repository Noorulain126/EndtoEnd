export class LogoutPageObject {
    
    validateLogoutPage() {
      cy.url().should('include', '/index.html');
    }
  
    getMenu() {
      return cy.get('#react-burger-menu-btn').click(); 
    }
  
    getLogout() {
      //cy.get('#logout_sidebar_link').click();
      //cy.get('#logout_sidebar_link').parent('.bm-menu-wrap').should('be.visible', { timeout: 15000 }).click();
      //cy.get('#logout_sidebar_link').should('be.visible').click();
      cy.get('#logout_sidebar_link').click({ force: true });
    }
  
    errorIsDisplayed() {
      
      cy.get('yourErrorAlertSelector').should('be.visible');
    }
  }
  
  export default LogoutPageObject;