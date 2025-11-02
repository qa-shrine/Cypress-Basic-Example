describe('Basic Tests', () => {
  it('should have correct page title', () => {
    cy.visit('/');
    cy.title().should('contain', 'Practice Test Automation');
  });
});
