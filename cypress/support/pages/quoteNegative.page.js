class QuoteNegativePage {
    fillQuoteDataWithDifferentPasswords() {
        cy.get('#email').type('teste.accenture@teste.com', {force: true});
        cy.get('#phone').type('991245789', {force: true});
        cy.get('#username').type('bia', {force: true});
        cy.get('#password').type('negativo123', {force: true});
        cy.get('#confirmpassword').type('456', {force: true});
        cy.get('#Comments').type('Sunt subito dedico arx verto a deleniti.', {force: true});
        cy.wait(3000);
        cy.get('#sendemail').click({force: true});
        cy.wait(3000);
    }

    validatePasswordError() {
        cy.get('#confirmpassword').should('have.class', 'error');
        cy.log('Senhas diferentes identificadas com sucesso');
        cy.wait(3000);
    }
}

module.exports = new QuoteNegativePage(); 