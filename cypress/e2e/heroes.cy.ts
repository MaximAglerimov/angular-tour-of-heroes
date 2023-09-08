describe('Heroes', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clickToHeroes();
  });

  it('should show heroes', () => {
    cy.get('app-heroes').within(() => {
      cy.get('h2').contains('My Heroes').should('exist');
      cy.get('ul.heroes li').should('exist').and('have.length', 9);
    });
  });

  it('should add hero', () => {
    cy.get('app-heroes').within(() => {
      const heroName = 'Skywalker';

      cy.get('ul.heroes li').last().should('not.contain.text', heroName);

      cy.get('input#new-hero').should('exist').type(heroName);
      cy.get('button.add-button').contains('Add hero').should('exist').click();

      cy.get('ul.heroes li').last().should('contain.text', heroName);
    });
  });

  it('should remove hero', () => {
    cy.get('app-heroes').within(() => {
      const heroName = 'Dr. Nice';

      cy.get('ul.heroes li')
        .and('have.length', 9)
        .first()
        .should('contain.text', heroName)
        .within(() => {
          cy.get('button.delete').click();
        });

      cy.get('ul.heroes li')
        .should('have.length', 8)
        .first()
        .should('not.contain.text', heroName);
    });
  });

  it('should navigate to hero details', () => {
    cy.get('app-heroes').within(() => {
      cy.get('ul.heroes li').first().should('contain.text', 'Dr. Nice').click();
    });

    cy.verifyHeroDetails(12, 'DR. NICE');
  });
});
