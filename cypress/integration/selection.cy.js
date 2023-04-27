require('@4tw/cypress-drag-drop')

// describe('handle dropdown', () => { 
//     it('Dropdown with select', () => {

//         cy.visit("https://www.zoho.com/commerce/free-demo.html")

//         cy.get("#zcf_address_country")
//             .select("Italy")
//             .should("have.value", "Italy")
        
//     });

//     it('Auto suggest dropdown', () => {
//         cy.visit('https://www.wikipedia.org/')
//         cy.get("#searchInput").type('Paris')

//         cy.get('.suggestion-title').contains('Paris-Roubaix').click()
//     })

//     it('Inputs and dropdown', () => {
//         cy.visit("https://itera-qa.azurewebsites.net/home/automation")
//         cy.get("#name").type('Fred')
//         cy.get("#phone").type('010110010110')
//         cy.get("#email").type('fred@paris.com')
//         cy.get("#password").type('123456')
//         cy.get("#address").type('Paris')
//         // cy.get("button[type='submit']").click()

//         cy.get(".custom-select")
//             .select("Potugal")
//             .should("have.value", "5")
//     })

//     it.only("Checking radio buttons", () =>{
//         cy.visit("https://itera-qa.azurewebsites.net/home/automation")

//         //Visibilité des radio buttons
//         // cy.get("input#male").should('be.visible');
//         // cy.get("input#female").should('be.visible');

//         // Séléctionner les radio buttons
//         // cy.get("input#male").check().should('be.checked');
//         // cy.get("input#female").should('not.be.checked');

//         // Visibilité de la checkbox
//     //    cy.get("input#monday").should('be.visible');

//        //Selection de la checkbox
//     //    cy.get("input#monday").check().should('be.checked');

//        //Desélection checkbox
//     //    cy.get("input#monday").uncheck().should('not.be.checked');

//     // Séléctionner tout les checkboxes
        
//         // cy.get("input.form-check-input[type='checkbox']").check().should('be.checked');
//         // cy.get("input.form-check-input[type='checkbox']").uncheck().should('be.checked');
//         cy.get("input.form-check-input[type='checkbox']").first().check();
//         cy.get("input.form-check-input[type='checkbox']").last().check();



//     })

//     it("check all boxies" , () =>{

//         cy.visit("https://demoqa.com/automation-practice-form")
//         cy.get("input#gender-radio-1").check({force: true}).should("be.checked")

//         cy.get("input.custom-control-input[type=checkbox]").check({force: true}).should("be.checked")

//     })

//  })

// describe('Table gestion', () =>{

//     beforeEach('Login', () =>{
//         cy.visit("https://demo.opencart.com/admin/");
//         cy.get("#input-username").type("demo")
//         cy.get("#input-password").type("demo")
//         cy.get("button[type=submit]").click();

        
//         cy.get(".btn-close").click();
//         cy.get("#menu-customer >a").click();
//         cy.get("#menu-customer>ul>li:first-child").click();
//     });

//     it('Check Number Rows & Columns', () => {
//         //Objectif : afficher 10 lignes
//         cy.get('tbody > tr').should('have.length', 10)
//         //Afficher les 7 collones du tableau
//         cy.get('thead > tr > td').should('have.length', 7)

//     })

//     it('Check cell data from specific row & column', () => {
//         cy.get('tbody > :nth-child(5) > :nth-child(3)').contains("princytrainings4@gmail.com");
//     })

//     it('Read all the rows & colums data in the first page', () => {
//         cy.get('tbody > tr')
//             .each(($row, $index, $rows)=> {
//                 cy.wrap($row).within( () =>{
//                     cy.get("td").each(($col, index, $cols)=> {
//                         cy.log($col.text());
//                     });
//                 })
//             })
//     })

//     it('Pagination', () => {
//         //Récuperation de la totalité des pages
//         // let totalPages;
//         // cy.get(".col-sm-6.text-end").then( (elem) =>{
//         //     let mytext = elem.text();
//         //    totalPages = mytext.substring(mytext.indexOf("(")+1, mytext.indexOf('Pages'));
//         //    cy.log("total pages : " + totalPages);
//         // })

//         let totalPages = 5;
//         for(let i = 1; i <= totalPages; i++) {

//             if(totalPages >1){
//                 cy.log("Active pages is : " + i);

//                 cy.get(':nth-child('+i+') > .page-link').click();
//                 cy.wait(3000);
//                 cy.get('tbody > tr')
//                 .each(($row, $index, $rows)=> {
//                     cy.wrap($row).within( () =>{
//                         cy.get("td:nth-child(3)").then((elem) => {
//                             cy.log(elem.text());
//                         })
//                     })
//                 })
//             }
//         }

//     })

// })

describe("Mouse Operations", () => {
    it('Action MouseOver', () => {
        cy.visit("https://demo.opencart.com");

        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(1) > .nav-link').should("be.visible")
    })

    it('Right click', () =>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        //premiere façon :
        cy.get('.context-menu-one').trigger('contextmenu');
        cy.get('.context-menu-list').should('be.visible');

        //deuxieme façon
        // cy.get('.context-menu-one').rightclick();
        // cy.get('.context-menu-list').should('be.visible');


    })
    it.only('Double click', ()=>{
        cy.visit("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondblclick")
        cy.get("#accept-choices").click()
        cy.frameLoaded('#iframeResult') //load iframe result

        // cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").trigger('dblclick')
        // cy.iframe('#iframeResult').find("#demo").should('be.visible')

        cy.iframe('#iframeResult').find("p[ondblclick='myFunction()']").dblclick();
        cy.iframe('#iframeResult').find("#demo").should('be.visible')
    })

    //Drag and drop
    it('Drag and drop using plugin', () => {
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.get('#box7').should("be.visible")
        cy.get('#box107').should("be.visible")


        cy.wait(3000);
        cy.get("#box7").drag("#box107", {force: true})
    })
    it.only('Scrolling page', () =>{
        cy.visit('https://en.wikipedia.org/wiki/Paris')
        cy.get('#International_relations').scrollIntoView({duration: 2000});
        cy.get("#International_relations").should("be.visible");

    })

})

