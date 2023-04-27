import 'cypress-file-upload'

describe('File upload', () => {
    it('Single File Upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("sample.pdf")
        cy.get("#file-submit").click();
        cy.wait(3000);
        cy.get("h3").should("have.text", "File Uploaded!")

    })
    it('File Upload - Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile({filePath: 'sample.pdf', fileName: 'myfile.pdf'})
        cy.get("#file-submit").click();
        cy.wait(3000);
        cy.get("h3").should("have.text", "File Uploaded!")
    })

    it('File Upload - Drag and drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload")
        
        cy.get("#drag-drop-upload").attachFile("sample.pdf", {subjectType: 'drag-n-drop'})
    
        cy.wait(3000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("sample.pdf");
    })

    it('Multiple files Upload', () => {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get("#filesToUpload").attachFile(['sample.pdf', 'dummy.pdf']);
        cy.wait(3000);
        cy.get('#fileList > :nth-child(1)').should('contain.text', 'sample.pdf')
        cy.get('#fileList > :nth-child(2)').should('contain.text', 'dummy.pdf')

    })

    it('Upload DemoQa', ()=>{
        cy.visit('https://demoqa.com/upload-download')
        cy.get("#uploadFile").attachFile("sample.pdf")
        cy.wait(3000);
        // cy.get('#uploadedFilePath').should("contain.txt", "C:\fakepath\sample.pdf")
    })

    it.only('rename DemoQa', () =>{
        cy.visit('https://demoqa.com/upload-download')
        cy.get("#uploadFile").attachFile({filePath: "sample.pdf", fileName: "mySuperFile.pdf"})
        cy.wait(3000);
    })

    it.only('File Upload - Drag and drop Demoqa', () => {
        cy.visit("https://demoqa.com/droppable");
        cy.get("#droppable").attachFile("sample.pdf", {subjectType: 'drag-n-drop'})
        cy.get('#acceptDropContainer > #droppable > p').should("contain.text", "Dropped!")
    })
})