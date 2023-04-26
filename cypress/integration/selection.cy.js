describe('handle dropdown', () => { 
    it('Dropdown with select', () => {

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country")
            .select("Italy")
            .should("have.value", "Italy")
        
    });

    it('Auto suggest dropdown', () => {
        cy.visit('https://www.wikipedia.org/')
        cy.get("#searchInput").type('Paris')

        cy.get('.suggestion-title').contains('Paris-Roubaix').click()
    })

    it.only('Inputs and dropdown', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("#name").type('Fred')
        cy.get("#phone").type('010110010110')
        cy.get("#email").type('fred@paris.com')
        cy.get("#password").type('123456')
        cy.get("#address").type('Paris')
        // cy.get("button[type='submit']").click()

        cy.get(".custom-select")
            .select("Potugal")
            .should("have.value", "5")
    })


 })