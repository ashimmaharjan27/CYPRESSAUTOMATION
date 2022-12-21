describe('Mousehover demo', () => {
    // it('Mousehover', ()=>{

    //     cy.visit("https://demo.opencart.com/");
    //     cy.wait(3000);
    //     cy.xpath('//*[@id="narbar-menu"]/ul/li[1]/div/div/ul/li[2]/a').should('not.be.visible');
    //     cy.xpath("//*[text()='Desktops']").trigger('mousehover').click(); // mousehover
    //     cy.xpath('//*[@id="narbar-menu"]/ul/li[1]/div/div/ul/li[2]/a').should('be.visible');
    //     cy.xpath("//*[text()='Desktops']").trigger('contextmenu'); //right click
    // })

    // it('Mousehover', () => {

    //     cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
    //     cy.wait(3000);
    //     cy.getIframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick');
    //     cy.getIframe('#iframeResult').find("#field2").should('have.value', 'Hello World!');
    // })

    it('Mousehover', () => {

        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
        cy.wait(3000);
        var newframe = cy.get('#iframeResult')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
            newframe.find("button[ondblclick='myFunction()']").trigger('dblclick');
            cy.wait(3000);
         //   newframe.find('input#field2').should('have.value', 'Hello World!');
    })

})