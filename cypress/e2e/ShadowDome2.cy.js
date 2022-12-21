describe("ShadowDome Test2", () => {

    it("ShadowDome_text_input", () => {
        cy.visit("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm");
        cy.get('smart-menu:nth-child(1) > div:nth-child(1) > div:nth-child(3) > smart-menu-items-group:nth-child(1) > div:nth-child(1)', { includeShadowDom: true }).click();
        
    })
})