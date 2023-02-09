

describe('My First Test', () =>{

     it('verify title-positive', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')   
     })

     it('verify title-Negative test', () =>{
      
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.visit().should('eq', 'OrangeHRM123')

     })



 })