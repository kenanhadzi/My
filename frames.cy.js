

describe("handling frames", ()=>{


    it("approach1",()=>{

        cy.visit("http://the-internet.herokuapp.com/iframe");


        const iframe=cy.get("#mce_0_ifr")
             .its('0.contentDocument.body')
             .should('be.visible')
             
             .then(cy.wrap);

        iframe.clear().type("Welcome {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })
})