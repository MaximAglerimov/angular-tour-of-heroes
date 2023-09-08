describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'AngularTourOfHeroes');
  });
});
