describe('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct title', () => {
    cy.title().should('equal', 'AngularTourOfHeroes');
  });

  it('has the url contains: "/dashboard"', () => {
    cy.url().should('contain', '/dashboard');
  });
});
