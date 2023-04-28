import 'cypress-file-upload'

describe('Register qual form', () =>{
        it.only('demoqa form', () =>{
            cy.visit("https://qavbox.github.io/demo/signup/")
            
            cy.fixture('quavForm').then((data) =>{
                data.forEach((user) => {
                    cy.get("#username").type(user.username)
                    cy.get("#email").type(user.email)
                    cy.get("#tel").type(user.tel)
                    cy.get(':nth-child(13) > input').attachFile(user.attachedfile)
                    cy.get(':nth-child(15) > select').select(user.gender)
                    cy.get('[value="two"]').click()
                    cy.get('[value="Webdriverio"]').click()
                    cy.get("#submit").click();

                })
          


            });

    })
})