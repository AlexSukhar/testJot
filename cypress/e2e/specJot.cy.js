/// <reference types='cypress' />

describe('Contact us page', () => {
  let user;

  beforeEach(() => {
    cy.visit("/");
    cy.task("generateUser").then((generateUser) => {
      user = generateUser;
    });
  });

  it('should provide an ability to send a form', () => {
    cy.get('#_evidon-decline-button').click();
    cy.get('.nav-menu > [href="/contact-us"]').click();
    cy.get('#first_name').type(user.firstName);
    cy.get('#last_name').type(user.lastName);
    cy.get('#email').type(user.email);
    cy.get('#role').type(user.role);
    cy.get('#message').type(user.message);
    cy.get('#contact_us_submit').click();
    cy.scrollTo('top');
    cy.get('.success-message > div > p').should('contain.text', 'Your submission has been received!')
  });
});
