// describe('Alerts', () =>{
//     it('Js alert', () =>{
//         cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
//         cy.get("button[onclick='jsAlert()']").click();
        
//         cy.on('window:alert', (t) => {
//             expect(t).to.contains('I am a JS Alert');
//         })
        
//         cy.get('#result').should('have.text', 'You successfully clicked an alert')
        
//     })
//     it('Js confirm alert', () =>{
//         cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
//         cy.get("button[onclick='jsConfirm()']").click();
        
//         cy.on('window:confirm', (t) => {
//             expect(t).to.contains('I am a JS Confirm');
//         })
        
//         cy.get('#result').should('have.text', 'You clicked: Ok');

//     })
//     //Approche 1
//     it("Authenficated alert", () => {
//         cy.visit("https://the-internet.herokuapp.com/basic_auth", {
//             auth: {
//                 username: "admin",
//                 password: "admin"
//             }
//         })

//         cy.get('.example p').should('have.contain',  'Congratulations')

//     })
//     //approche 2
//     it.only("Authenficated alert approche 2", () => {
//         cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

//         cy.get('.example p').should('have.contain',  'Congratulations')

//     })

// })

describe('Hooks and Tags', ()=>{
    before(()=>{
        cy.log("***** Launch app *********")
    });
    after(()=>{
        cy.log("***** Close app *********")
    });
    beforeEach(()=>{
        cy.log("***** Login *********")
    });
    afterEach(()=>{
        cy.log("***** Logout *********")
    });

    it('search', () => {
        cy.log("******** searching ********")
    });

    it.skip("advanced search", () => {
        cy.log("******** advanced search ********")
    })
    it('listing Products', ()=>{
        cy.log("******** listing Products*************");
    })
});