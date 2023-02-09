

describe('Check elements', ()=>{

    it ('Checking radio buttons', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get("#female").should('be.visible')

        cy.get("#male").should('be.visible')
    })
    it('selecting radio buttons', ()=>{
        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')
        cy.get(".form-check-input[type='checkbox']").check()
        cy.get("#friday").uncheck()

    })
}) 