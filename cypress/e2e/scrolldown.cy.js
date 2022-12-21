describe("Scrolldown",()=>{
    it('Scroll it',()=>{

        cy.visit("https://www.opencart.com/");
        cy.wait(2000);
        cy.xpath(" //*[@id='marketplace']//child::a[@class='btn btn-primary btn-xl']").scrollIntoView({duration:2000});
    })
})