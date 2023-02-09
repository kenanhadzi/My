

describe("handle tabs",()=>{

    it("approach1",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").invoke("removeAttr","target").click();
        cy.url().should("include","https://the-internet.herokuapp.com/windows/new");
        cy.wait(5000);
        cy.go("back");
    })

    it ("approach2",()=>{

        cy.visit("https://the-internet.herokuapp.com/windows");
        cy.get("a[href='/windows/new']").then((e)=>{

            const url= e.prop("href");
            cy.visit(url);
            cy.url().should("include","https://the-internet.herokuapp.com/windows/new");
            cy.wait(5000);
            cy.go("back");

        })
    })
})