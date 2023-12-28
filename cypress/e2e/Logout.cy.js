/// <reference types="Cypress" />
import Loginpageobject from '../PageObjects/login_page';
import userCredentials from '../fixtures/accountinfo.json';
import Logoutpageobject from '../PageObjects/logout_page';

const loginPage = new Loginpageobject();
const Logoutpage = new Logoutpageobject();

describe('Logout', () => {
    beforeEach(() => {
        cy.openPage('Login'); 
        loginPage.validateLoginPage();
        loginPage.loginUser(userCredentials.email, userCredentials.password);
    });

    it('Should logout from the website', () => {
        Logoutpage.getMenu ();
        cy.wait(1000);
        Logoutpage.getLogout();
        cy.url().should('include', 'demo.com');
        cy.log('User is logged out');
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});