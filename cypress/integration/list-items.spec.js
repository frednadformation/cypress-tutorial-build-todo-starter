describe('List items', ()=>{
    beforeEach(() => {
        cy.seedAndVisit();
    });

    it('properly displays completed items', () => {
        cy.get('.todo-list li')
            .filter('.completed')
            .should('have.length', 1)
            .and('contain', 'lait')
            .find('.toggle')
            .should('be.checked')
    })

    it('Shows remaining todos in the footer', () => {
        cy.get('.todo-count')
            .should('contain', 3)
    });
    it('Removes a todo', () => {
        cy.route({
            url : '/api/todos/1',
            method: 'DELETE',
            status: 200,
            response: {}
        })

        cy.get('.todo-list li')
            .first()
            .find('.destroy')
            .invoke('show')
            .click()
    });

    it.only('Marks an incomplete item complete', () => {
        cy.fixture('todos')
            .then(todos => {
                const target = Cypress._.head(todos)
                cy.route(
                    'PUT',
                    `/api/todos/${target.id}`,
                    Cypress._.merge(target, {isComplete: true})
                    )
            })
    cy.get('.todo-list li')
        .first()
        .as('first-todo')
    
    cy.get('@first-todo')
        .find('.toggle')
        .click()
        .should('be.checked')
    
        cy.get('@first-todo')
            .should("have.class", 'completed')

        cy.get('.todo-count')
    });
})