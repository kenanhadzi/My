import Login from "../PageObjects/LoginPage.js"
describe("Login", ()=>{

    it("LoginTest",()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")
        
         let ln = new Login();
         ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();
    })
})