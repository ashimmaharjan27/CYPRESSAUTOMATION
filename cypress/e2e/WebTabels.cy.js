describe('Test',()=>{
    it('WebTableHandeling',()=>{

        cy.visit("https://qavbox.github.io/demo/webtable/");
        cy.wait(2000)
        cy.get("table[id='table02']>thead>tr>th").should('have.length','6')
        cy.get("table[id='table02']>tbody>tr").should('have.length','55')
//read the all the data from the table
        cy.get("table[id='table02']>tbody>tr")
        .each(($row,index,$rows)=>{
            cy.wrap($row).within(()=>{
                cy.get("td").each(($col,inxex,$cols)=>{
                    cy.log($col.text());
                })
            })
        })
    })
})