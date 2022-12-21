import Login from "../PageObjectModel/LoginPage2"

describe("MyTestSuit", () => {

    /*
    it("LoginTest", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //General Method 
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard');
    })
*/

    //using POM
    it.only("LoginTest using POM", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.fixture('orangehrm').then((data)=>{
            const ln = new Login(); // creating object
            ln.setUserName(data.username);
            ln.setPassword(data.password);
            ln.clickSubmit();
            ln.verifyLogin();

        })
       
        
    })
})