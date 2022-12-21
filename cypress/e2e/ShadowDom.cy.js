describe('ShadowDome Test', ()=>{

    it('Shadow Dome Approch',()=>
    {
        cy.visit('https://the-internet.herokuapp.com/shadowdom');
        cy.get('li:nth-child(1)',{includeShadowDom:true}).then((shadowtext)=>{
            let innertext = shadowtext.text();
            let expecttext = "Let's have some different text!";
            cy.log(innertext);
            assert.equal(innertext,expecttext);
        })
    })
})