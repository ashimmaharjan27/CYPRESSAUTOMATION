describe("DropDownhandling", () => {
  // it("Dropdown with select",()=>{

  //     cy.visit("https://www.zoho.com/commerce/free-demo.html")
  //   //  cy.get("#zcf_address_country").select("Nepal").should('have.value','Nepal')
  //     cy.get("#zcf_address_country").select("Nepal").should('eq','Nepal')

  // })
  //     it("Dropdown without select",()=>{

  //         cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
  //         cy.xpath("//*[@id='billing_country_field']//span[@aria-label='Country']").click()
  //         cy.get('.select2-search__field').type('Nepal').type('{enter}')
  //         cy.get('#select2-billing_country-container').should('have.text','Nepal')

  //     })
  it("Dynamic dropdown", () => {

    cy.visit("https://www.google.com/")
    cy.get("input[name='q']").type('cypress automation')
    cy.wait(3000)
    cy.get('div.wM6W7d>span').should('have.length','11') //Assertion 
      //using js function to itterate the 
    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
      if ($el.text() == 'cypress automation salary') {
        cy.wrap($el).click()
      }
    })
  })
})