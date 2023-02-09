describe("Handle tables", ()=>{

    beforeEach("login", ()=>{
       cy.visit("https://demo.opencart.com/admin/index.php"); 
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();
        cy.get(".parent[href='#collapse-5']").click();
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click();

    })
    it("number of rows and colums", ()=>{
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should("have.length",10);
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should("have.length",7);
    })
    it("value", ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("princytrainings4@gmail.com");
    })
    it("all rows and colums", ()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
    it.only("paginatiomn", ()=>{
       let totalPages;
        cy.get(".col-sm-6.text-end").then((e)=>{
            let mytext=e.text();
            totalPages=mytext.substring(mytext.indexOf("(")+1,mytext.indexOf("Pages")-1);
            cy.log("Total number of pages in a table=========>"+totalPages);
            for(let p=1;p<=totalPages;p++)
            {
                if(totalPages>1)
                {
                    cy.log("active page is===="+p);
                    cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                    cy.wait(1000);
                    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(($row, index, $rows)=>{
                        cy.wrap($row).within(()=>{
                            cy.get("td:nth-child(3)").then((e)=>{
                                cy.log(e.text());
                            })
    
    
                        })
                    })
                }
            }
            

        })
     
    })
})