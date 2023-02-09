import 'cypress-file-upload';
describe("file upload",()=>{

    it("single file upload",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile("TASK2.docx");
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!");
        
    })
    it("file rename",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#file-upload").attachFile({filePath:"TASK2.docx",fileName:"MYFILE.docx"});
        cy.get("#file-submit").click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should("have.text","File Uploaded!");

    })
    it("File upload drag and drop",()=>{
        cy.visit("http://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile("TASK2.docx",{subjectType:"drag-n-drop"});
        cy.wait(5000);
     cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains("TASK2.docx");
    })
    it("shadow dom",()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("TASK2.docx");
        cy.wait(5000);
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("TASK2.docx");

    })
})