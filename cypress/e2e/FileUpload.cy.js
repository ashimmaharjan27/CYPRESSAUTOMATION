import 'cypress-file-upload';

describe('File upload', () => {
    it('Single file upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile('test1.txt');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
        cy.get('#uploaded-files').contains('test1.txt');
    })

    it('Single file upload with rename', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.get('#file-upload').attachFile({ filePath: 'test1.txt', fileName: 'newfiletest1.txt' });
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
        cy.get('#uploaded-files').contains('test1.txt');
    })


    it('Single file upload with drag and drop', () => {

        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.wait(1000);
        cy.get('#drag-drop-upload').attachFile('test1.txt', { subjectType: 'drag-n-drop' });
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').contains('test1.txt');

    })

    it.only('multiple file', () => {
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
        cy.wait(1000);
        cy.get('#filesToUpload').attachFile(['test1.txt', 'test2.txt', 'test3.txt']);
        cy.wait(1000);



    })


})