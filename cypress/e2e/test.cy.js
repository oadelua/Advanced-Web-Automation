describe('Automated Test for Zenith Bank', () => {
  it('should navigate to Current Accounts page', () => {
    // Navigate to the Zenith Bank website
    cy.visit('/')
    cy.wait(7000)
    cy.get('#continue-button').click()
    cy.wait(3000)
    // Force the parent element of "Personal" to be visible
    cy.get('#mobile-menu-wrap').invoke('show');
    // Hover over "Personal" to reveal submenu
    cy.contains('Personal').trigger('mouseover');
    // Wait for the submenu to appear and force it to be visible
    cy.get('.sub-menu').invoke('show');
    // Click on "Bank Accounts" within the submenu
    cy.contains('Bank Accounts').click();
    
  })
})