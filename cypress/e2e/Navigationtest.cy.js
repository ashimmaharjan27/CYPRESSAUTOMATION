describe('mysuite',()=>{
    it('Navigationtest',()=>{

        // cy.visit("https://www.opencart.com/index.php?route=cms/demo");
        // cy.title().should('eq','OpenCart - Demo');
     
        // cy.get("#cms-demo>div.container>div>div.col-sm-6.border-right>div>a").invoke('removeAttr','target').click();
        // cy.wait(5000)

        cy.visit("https://demo.opencart.com/");
        cy.wait(2000)
        cy.xpath("//*[text()='Components']").trigger('mousehover').click();
        cy.xpath("//*[@id='narbar-menu']/ul/li[3]/div/div").should('be.visible');
        cy.xpath("//*[text()='Monitors (2)']").trigger('mousehover').click();
        cy.title().should('eq','Monitors')
        cy.go('back'); // navigating back
        cy.wait(2000)
        cy.go('forward')// navigating forward
        cy.wait(1000)
        cy.go(-1); // navigating back again using -1
        cy.wait(1000)
        cy.go(1);//navigating forward using 1
        cy.reload(); //reloading or refress

    })
})