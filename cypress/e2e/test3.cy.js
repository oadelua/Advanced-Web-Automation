import { web } from "../fixtures/selectors.js";
describe('Automated Test for Zenith Bank', () => {
    beforeEach(() => {
        // Navigate to the Zenith Bank website
        cy.visit('/')
        cy.wait(7000)
        cy.get(web.continueBtn).click();
        cy.wait(3000);
        // Click on the mobile menu link
        cy.get(web.header).click();
        // Select "Personal" menu item
        cy.get(web.personalBtn)
            .should('be.visible')
            .click();
    });
    it('should navigate to Current Accounts page', () => {
        // Select the "Bank Accounts" option from the submenu
        cy.get(web.bankAccounts)
            .should('be.visible')
            .click();
        cy.wait(5000);
        cy.get(web.currentAccount).click()
        cy.wait(5000)

        // Validate features of Individual Current Account
        cy.contains('Individual Current Account')
            .should('be.visible')
        cy.wait(3000)
        cy.contains('REQUIREMENTS')
            .should('be.visible');

        // Validate features of Individual Current Account
        cy.contains('Individual Current Account')
            .should('be.visible')
        cy.wait(3000)
        cy.contains('AVAILABLE CHANNELS')
            .should('be.visible');

    });
});