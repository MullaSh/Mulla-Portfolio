describe('WebMulla Portfolio Test', () => {
  const baseUrl = 'http://127.0.0.1:5500/index.html';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should load homepage successfully', () => {
    cy.contains('h1', 'Mulla Shadra').should('be.visible');
    cy.contains('Quality Assurance Engineer').should('be.visible');
  });

  it('should navigate to About Me section', () => {
    cy.contains('About Me').click();
    cy.url().should('include', '#about');
    cy.get('#about').should('be.visible');
  });

  it('should navigate to Skills section', () => {
    cy.contains('Skills').click();
    cy.url().should('include', '#skills');
    cy.get('#skills').should('be.visible');
  });

  it('should navigate to Experience section', () => {
    cy.contains('Experience').click();
    cy.url().should('include', '#experience');
    cy.get('#experience').should('be.visible');
  });

  it('should navigate to Contact section', () => {
    cy.contains('Contact').click();
    cy.url().should('include', '#contact');
    cy.get('#contact').should('be.visible');
  });

  it('should display profile picture in About Me section', () => {
    cy.get('#about img').should('be.visible');
  });

  it('should have at least 1 skill listed', () => {
  cy.get('#skills .skill-item').should('have.length.at.least', 1);
});

  it('should have experience details', () => {
    cy.get('#experience').within(() => {
      cy.contains(/QA|Intern|Manual|Testing/).should('exist');
    });
  });

  it('should have contact section with contact details', () => {
    cy.get('#contact').within(() => {
      cy.contains(/Email|LinkedIn|GitHub/).should('exist');
    });
  });
});
