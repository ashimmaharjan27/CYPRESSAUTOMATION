describe('MyTestSuite',()=>{

    before(()=>{

        cy.log("***** launch app ******");

    })

    after(()=>{
        cy.log("****app quit ******");
    })

    
    beforeEach(()=>{

        cy.log("*****  Login  ******");

    })

    afterEach(()=>{
        cy.log("*** Logout ******");
    })


    it('search', ()=>{

        cy.log(" ***** searching ******");

    })

    it('advance search',()=>{
        cy.log(" ***** advance searching ******");

    }
    )

    it('listingProduct', ()=>{
        cy.log(" ***** Listing product ******");

    })
}



)