describe('Login Flow', () => {
  it('should complete a login flow', () => {
    // For this example, we'll visit https://practicetestautomation.com and demonstrate the selectors
    // In a real app, you would have a login page at your baseUrl
    cy.visit('/practice-test-login/');

    // This demonstrates how you would use ids for a login form
    cy.get('#username').type('student');
    cy.get('#password').type('Password123');
    cy.get('#submit').click();
    cy.title().should('contain', 'Logged In Successfully');
  });
});
