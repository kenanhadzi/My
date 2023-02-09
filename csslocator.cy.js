
describe('CssLocators', () =>{

it("csslocators", () =>{

    cy.visit("https://juventasport.com/")
    cy.get("#__BVID__10").type("Jakne")
    cy.get(".input-group-append").click()
    cy.get(".text-center").contains("There are no products")
    
})

})