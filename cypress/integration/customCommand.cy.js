describe('Custom Command', () => {

    it.only('handling links', () => {
        cy.visit("https://demo.opencart.com/")
        cy.clickLink('MacBook');
        cy.get('h1').should('have.text', 'MacBook')
    })
})