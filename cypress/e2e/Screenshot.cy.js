describe('test',()=>{
    it('screenshot',()=>{
        cy.visit("https://demo.nopcommerce.com/");
        cy.screenshot("homepage");
        cy.get('.header-logo > a > img').screenshot("logo");




















        
    })
})