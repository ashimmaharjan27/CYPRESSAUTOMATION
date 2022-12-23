import 'cypress-iframe';

describe("Iframe Demo2", () => {

    it("Switching iframes", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr")// load the frame
        cy.iframe("#mce_0_ifr").clear().wait(2000).type('Welcome to approch 3{ctrl+a}'); // select the text
        cy.get("[aria-label='Bold']").click(); // bold the text
        //cy.frameLoaded("#mce_0_ifr");
        cy.iframe("#mce_0_ifr").should('have.text','Welcome to approch 3');
        })

})
