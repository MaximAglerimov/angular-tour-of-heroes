describe('Dashboard', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clickToDashboard();
  });

  it('should show Top Heroes', () => {
    cy.get('app-dashboard').within(() => {
      cy.get('h2').contains('Top Heroes').should('exist');
      cy.get('div.heroes-menu a').should('exist').and('have.length', 4);
    });
  });

  it('should search and navigate to details', () => {
    cy.get('app-hero-search div').within(() => {
      cy.get('label').contains('Hero Search').should('exist');

      const input = cy.get('input[id="search-box"]');
      input.should('exist');
      input.type('Magma');

      const result = cy.get('ul li');
      result.should('exist').and('have.length', 1);
      result.first().click();
    });

    cy.verifyHeroDetails(19, 'MAGMA');
  });
});
