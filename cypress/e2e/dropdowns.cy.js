




describe("Dropdowns", ()=>{

  
    it("dropdown4", ()=>{

        cy.visit("https://www.google.com/")
        cy.get(".gLFyf").type("cypress automation")
        cy.get(".wM6W7d>span").should("have.length",11)
        cy.get(".wM6W7d>span").each(($el, index, $list)=>{
            if($el.text()=="cypress automation tutorial")
            {
                cy.wrap($el).click()
            }
          
        }
       
        )
        cy.get(".gLFyf").should("have.value", "cypress automation tutorial")  

    })
})