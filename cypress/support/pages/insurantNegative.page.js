class InsurantNegativePage {
    fillInsurantDataWithFutureDate() {
        cy.get('#firstname').type('Thelma');
        cy.get('#lastname').type('Braun');
        cy.get('#birthdate').clear().type('12/25/2025');
        cy.get('#gendermale').click({force: true});
        cy.get('#streetaddress').type('718 S Broadway');
        cy.get('#country').select('Italy');
        cy.get('#zipcode').type('98015845');
        cy.get('#city').type('East Deangelo');
        cy.get('#occupation').select('Unemployed');
        cy.get('#skydiving').click({force: true});
        cy.get('#website').type('https://jaunty-analogy.org/');
        cy.wait(3000);
    }

    validateBirthdateError() {
        cy.get('#birthdate').should('have.class', 'error');
        cy.log('Data de nascimento futura identificada com sucesso');
        cy.wait(3000);
    }
}

module.exports = new InsurantNegativePage(); 