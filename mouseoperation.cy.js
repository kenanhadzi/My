require("@4tw/cypress-drag-drop")
describe("mouse operations", ()=>{

    it("Mouse over action", ()=>{
        cy.visit("https://demo.opencart.com/");
        cy.get(".nav > :nth-child(1) > .dropdown-toggle").trigger("mouseover").click();
        cy.get("body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)").should("be.visible");
    })
    it("Right click", ()=>{
        cy.visit("http://swisnl.github.io/jQuery-contextMenu/demo.html");
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should("be.visible");
    })
    it("drag and drop",()=>{
        cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
        cy.get("#box6").drag("#box106",{force:true});
    })
    it.only("scrolling page",()=>{
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        cy.get("img[alt='Flag of Norway']").scrollIntoView({duration:2000});
        cy.get("img[alt='Flag of Croatia']").scrollIntoView({duration:2000});
        cy.get("#footer").scrollIntoView({duration:2000});
    })
})