describe('Data', () => {

    // it.only('FixtureDemoTest', () => {
    //     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    //     cy.get("input[placeholder='Username']").type("Admin");
    //     cy.get("input[placeholder='Password']").type("admin123");
    //     cy.get('.oxd-button').click();

    //     cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', 'Dashboard');
    // })

    let userdata;
    before(() =>{
        cy.fixture('orangehrm').then((data) =>{
            userdata = data
        });
    });
    
    it('FixtureDemoTest', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get('.oxd-button').click();
        
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userdata.expected);
        
    })
    
    it('DataDrivenTest', () => {
        cy.fixture('orangehrm2').then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata) =>{
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get('.oxd-button').click();
                
                if(userdata.username == 'Admin' && userdata.password == 'admin123'){
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text', userdata.expected);
                    cy.get('.oxd-userdropdown-tab').click() //log out
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
                }
                else
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected);
                
            })
            
        })
    })

    // it.only('demoqa form', () =>{
    //     cy.visit("https://demoqa.com/automation-practice-form")
    //     cy.get("#firstName").type("Toto")
    //     cy.get("#lastName").type("Titi")
    //     cy.get("#gender-radio-1").click({force: true})
    //     cy.get("#userNumber").type("0101010101")
    //     cy.get("#submit").click()
    //     cy.wait(3000);
    //     cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
    // })
    it.only('demoqa form', () =>{
        cy.visit("https://demoqa.com/automation-practice-form")

        cy.fixture('demoqa').then((data)=>{
            data.forEach((userdata) =>{
                cy.get("#firstName").type(userdata.firstname)
                cy.get("#lastName").type(userdata.lastname)
                
                if(userdata.gender == "Male")
                    cy.get("#gender-radio-1").click({force: true})
                else if(userdata.gender == "Female")
                    cy.get("#gender-radio-2").click({force: true})
                else
                    cy.get("#gender-radio-3").click({force: true})

                cy.get("#userNumber").type(userdata.number)
                cy.get("#submit").click()
                //cy.wait(3000);
                cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
                cy.get('#closeLargeModal').click();

            });
        })
    })


})