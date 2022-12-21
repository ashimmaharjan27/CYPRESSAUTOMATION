
describe("Drag and drop", () => {
    it('Drag and drop', () => {
        cy.visit("http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html")
        cy.wait(2000)
        cy.get("#box2").drag('box106');
        
    })
})