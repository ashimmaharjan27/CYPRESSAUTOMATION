describe('CSSLocators',()=>{
    it('csslocator', ()=>{

        cy.visit("https://demo.nopcommerce.com/")
        cy.get("input[type='text']").type("Fahrenheit 451 by Ray Bradbury")
        cy.get("button[type='submit']").click()
        cy.get("body > div.master-wrapper-page").contains("Fahrenheit 451 by Ray Bradbury")//Assertion

    })
})