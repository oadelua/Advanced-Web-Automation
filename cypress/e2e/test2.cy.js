describe('Automated Test for Zenith Bank', () => {
    it('should navigate to Current Accounts page', () => {
        // Navigate to the Zenith Bank website
        cy.visit('/');
        cy.wait(7000);
        cy.get('#continue-button').click();
        cy.wait(3000);
        // Click on the mobile menu link
        cy.get(".mobile-menu-link").click();
    })
})
