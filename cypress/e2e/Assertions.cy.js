describe("AssertionDemo", () => {
    // it("implicit assertion", () => {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     //should and 
    //     // cy.url().should('include','orangehrmlive.com');//Asserstion
    //     // cy.url().should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    //     // cy.url().should('contain','orangehrm');

    //     // cy.url().should('include','orangehrmlive.com')
    //     // .should('eq',"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //     // .should('contain','orangehrm')

    //     cy.url().should('include', 'orangehrmlive.com')
    //         .and('eq', "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    //         .and('contain', 'orangehrm')
    //         .and('not.contain', 'greenhrm')//negative assertion

    //     cy.title().should('include', "OrangeHRM")
    //         .and('not.include', 'orangeHRM')

    //     cy.get('.orangehrm-login-branding > img').should('be.visible') //Visibiltiy asserstion
    //     cy.get('.orangehrm-login-branding > img').should('exist') // existance asserstion

    //     cy.xpath('//a').should('have.length', '5')//# of thelinks present or not
    //     cy.xpath("//input[@name='username']").type('Admin')
    //     cy.xpath("//input[@name='username']").should('have.value', 'Admin')

    //     // cy.xpath("//input[@name='password']").type('admin123');
    //     // cy.xpath("//button").click();

    // })
    it("Explicit assertion", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type('Admin')
        cy.xpath("//input[@name='password']").type('admin123')
        cy.xpath("//button").click();

        let expName = "Paul Collings"

        cy.get(".oxd-userdropdown-name").then((x) => {
            let actName = x.text()
            //BDD sytle
            expect(actName).to.equal(expName)
            //expect(actName).to.not.equal(expName)

            //TDD style
            assert.equal(actName, expName)
            //assert.not.equal(actName, expName)
        })


    })
})