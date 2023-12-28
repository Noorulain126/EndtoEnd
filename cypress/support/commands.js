Cypress.Commands.add('openPage', (pageName) => {
    cy.visit('https://www.saucedemo.com', { failOnStatusCode: false })
    cy.url().should('include', 'com');
 
})



    