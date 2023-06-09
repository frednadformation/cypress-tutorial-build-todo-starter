describe('Input form', () =>{
    beforeEach(() =>{
        cy.visit('/')
    });
    it('focuses input on load', () =>{
        cy.focused().should('have.class', 'new-todo');
    })

    it('accepts input', () =>{
        const typedText = 'acheter du lait'

        cy.get('.new-todo')
            .type(typedText)
            .should('have.value', typedText)
    });

    context('Form submission', () =>{
        beforeEach(()=>{
            cy.server()
        });
        it('Adds a new todo on submit', () =>{
            const itemText = 'acheter du lait'
            cy.route('POST', '/api/todos', {
                id: 0,
                name: itemText,
                isComplete: false
            })

            cy.get('.new-todo')
                .type(itemText)
                .type('{enter}')
                .should('have.value', '')

            cy.get('.todo-list li')
                .should('have.length', 5)
                .and('contain', itemText)
        });
        it.skip('Show an error message on a failed submit', () =>{
            cy.route({
                url: '/api/todos',
                method: 'POST',
                status: 500,
                response: {}
            })
            cy.get('.new-todo')
                .type('test{enter}')
            
            cy.get('.todo-list li')
                .should('not.exist')
            cy.get('.error')
                .should('be.visible')
        })

    });
})