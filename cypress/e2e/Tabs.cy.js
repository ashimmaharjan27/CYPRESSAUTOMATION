describe('Handle Tap ', () => {

    it('Approch1', () => {

        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.wait(3000)
        cy.get('div.example>a').invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
    }
    )
    // it('Approch2', () => {

    //     cy.visit("https://the-internet.herokuapp.com/windows")
    //     cy.wait(3000)
    //     cy.get('div.example>a').then((e)=>{
    //         let url = e.prop('href')
    //         cy.visit(url)
    //     })
    //     cy.url().should('eq', 'https://the-internet.herokuapp.com/windows/new')
    //     cy.wait(3000)
    //     cy.go('back')
    // }
    // )



}
)