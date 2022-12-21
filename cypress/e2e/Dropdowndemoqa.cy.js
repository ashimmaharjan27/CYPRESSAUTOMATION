describe("DropDown demo", () => {
    it('StateChoose', () => {
        cy.visit("https://demoqa.com/automation-practice-form")

        cy.wait(2000)
        cy.get('.css-yk16xz-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer').click()

        cy.wait(2000)

        cy.get('#react-select-3-option-2').click()//.should('have.text','Haryana')



    })
})