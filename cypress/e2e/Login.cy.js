/// <reference types="Cypress" />
import Loginpageobject from '../PageObjects/login_page';
import userCredentials from '../fixtures/accountinfo.json';

const loginPage = new Loginpageobject();

describe('Login', () => {
    beforeEach(() => {
        cy.openPage('Login'); 
        loginPage.validateLoginPage();
    });

    it('Should login to the website', () => {
        loginPage.loginUser(userCredentials.email, userCredentials.password);   
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});