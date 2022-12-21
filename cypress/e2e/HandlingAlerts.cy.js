describe("Alert", () => {

    // it('Js Alert',()=>{

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.get("button[onclick='jsAlert()']").click()
    //     //alert window automatically closed by cypress
    //     cy.on('window:alert',(t)=>{
    //         expect(t).to.contain('I am a JS Alert')
    //     })
    //     cy.get('#result').should('have.text','You successfully clicked an alert')
    // })

    // it('Js Alert', () => {

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.get(':nth-child(2) > button').click()
    //     //alert window automatically closed by cypress
    //     cy.on('window:confirm', (t) => {
    //         expect(t).to.contain('I am a JS Confirm')
    //     })
    //     cy.get('#result').should('have.text', 'You clicked: Ok')
    // })

    // it('Js Alert-cancle', () => {

    //     cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    //     cy.get(':nth-child(2) > button').click()
    //     //alert window automatically closed by cypress
    //     cy.on('window:confirm', (t) => {
    //         expect(t).to.contain('I am a JS Confirm')
    //     })
    //     cy.on('window:confirm', (t) => false)

    //     cy.get('#result').should('have.text', 'You clicked: Cancel')
    // })

    it('Js prompt alert', () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome')
        })
        cy.get(':nth-child(3) > button').click()
        //alert window automatically closed by cypres
        cy.on('window:prompt', (t) => {
            expect(t).to.contain('I am a JS prompt')
        })
       // cy.on('window:confirm', (t) => false)

        cy.get('#result').should('have.text', 'You entered: Welcome')
    })

})