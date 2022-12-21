describe('MyFrist Test', ()=>{
    it('test1-verifing title-positive test', () =>{
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

       cy.title().should('eq','OrangeHRM')//Asserstion

    })
    it('test2-verifing title-negative test', () =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
        cy.title().should('eq','OrangeHRM123')//Asserstion
 
     }
    )
})
