describe("CheckUIElement", () => {
    // it("Checking Radio Butons",()=>{

    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation")
    //     cy.get("#female").should('be.visible')//visibility of female radio button
    //     cy.get("#male").should('be.visible')//visibility of male radio button

    //     cy.get('#female').click().should('be.checked')
    //     cy.get('#male').click().should('be.checked')
    //     cy.get('#female').should('not.be.checked')

    // })

    it("Checking Radio Butons", () => {

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")
        // Selecting single check boxes

        //cy.xpath("//input[@type='checkbox' and contains(@id,'monday')]").should('be.visible')//visibility of single check box
        //cy.xpath("//input[@type='checkbox' and contains(@id,'monday')]").check().should('be.checked')//selecting the check box
        // cy.xpath("//input[@type='checkbox' and contains(@id,'monday')]").uncheck().should('not.be.checked')//selecting the check box

        //selecting all the check boxes
        //cy.xpath("//input[@type='checkbox' and contains(@id,'day')]").check().should('be.checked')

        // cy.xpath("//input[@type='checkbox' and contains(@id,'day')]").first().check().should('be.checked')
        //cy.xpath("//input[@type='checkbox' and contains(@id,'day')]").last().check().should('be.checked')

        var daychoice = (day)=>{
          cy.get("input.form-check-input[type='checkbox']").each(($el, index, $list) => {
            if ($el.prop('id') == day) {
              cy.wrap($el).click()
            }
          }).should('be.checked')
        }
        daychoice("monday")
    })
})