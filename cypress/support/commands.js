import 'cypress-iframe';

Cypress.Commands.add('seedAndVisit', () => {
    cy.server();
    cy.route('GET', '/api/todos', 'fixture:todos');
    cy.visit('/');

});

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click({force:true});
});