describe("mytestsuite",()=>{

    it("datadrivetest",()=>{

        cy.fixture("kenan").then((data)=>{

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
            data.forEach((userdata)=>{
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.pasword);
                cy.get("button[type='submit']").click()
                
                if(userdata.username=="Admin" && userdata.pasword=="admin123")
                {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text",userdata.expected);
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > header:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1)").click();

                }
                else{
                    cy.get('.oxd-alert-content > .oxd-text').should("have.text",userdata.expected);
                }
            })
        })
    })
})
