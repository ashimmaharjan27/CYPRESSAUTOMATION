describe("Custom Command Demo", () => {

    it("handling link", () => {
        cy.visit("https://demo.nopcommerce.com/");
        // //  without using custom command
        //         cy.get('body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)').click();
        //         cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
        // Using custom command
        cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })

    it("overwriting existing command", () => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink("APPLE macbook PRO 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');
    })

    it.only("login command", () => {
        cy.visit("https://demo.nopcommerce.com/");
        cy.clickLink('Log in');
        cy.loginApp("xyz", "123");
    })
})