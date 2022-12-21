import 'cypress-iframe';

describe('IframeDemo', () => {
    it('Approch 1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);
        iframe.clear().type("Welcome to approch 1 {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })

    it('Approch 2 -using custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.getIframe("#mce_0_ifr").clear().type("Welcome to approch 2 {ctrl+a}");
        cy.get("[aria-label='Bold']").click();
    })

    it.only('Approch 3 -using iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        cy.frameLoaded("#mce_0_ifr")// load the frame
        cy.iframe("#mce_0_ifr").clear().type("Welcome to approch 3 {ctrl+a}"); // select the text
        cy.get("[aria-label='Bold']").click(); // bold the text
    })

})