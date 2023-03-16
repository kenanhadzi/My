describe('Xpathlocators', () =>{

    it('Find number of products', () =>{
        cy.visit("https://www.sportvision.rs/aktivni-ves/za-muskarce+unisex/za-odrasle/")
        cy.xpath("//ul[@class='pagination']/li").should('have.length',5)


    })
})