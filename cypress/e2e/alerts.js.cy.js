

describe("alerts", ()=>{

    it("js alert",()=>{

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsAlert()']").click();
        cy.on("window:alert",(t)=>{
            expect(t).to.contains("I am a JS Alert");

        })
        cy.get("#result").should("have.text","You successfully clicked an alert");
    })

    it("alert2",()=>{
        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.get("button[onclick='jsConfirm()']").click();
        cy.on("window:confirm",(t)=>{
            expect(t).to.contains("I am a JS Confirm");

        })
        cy.on("window:confirm",()=>false);
        cy.get("#result").should("have.text", "You clicked: Cancel")

    
    })
    it("alert3",()=>{

        cy.visit("http://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then((win)=>{
            cy.stub(win,"prompt").returns("welcome");
        })
        cy.get("button[onclick='jsPrompt()']").click();
        //cy.on("window:prompt",()=>false);
        cy.get("#result").should("have.text","You entered: welcome");
    })
    
})