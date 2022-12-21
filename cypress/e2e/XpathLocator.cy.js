describe('XpathLocator',()=>{
    it('xpathlocator', ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.xpath("//input[@name='username']").type('Admin');
        cy.xpath("//input[@name='password']").type('admin123');
        cy.xpath("//button").click()
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')// implicit asserstion with should keyword
       cy.xpath("//*[@id='app']").contains('Paul Collings');
             
       
    })
})