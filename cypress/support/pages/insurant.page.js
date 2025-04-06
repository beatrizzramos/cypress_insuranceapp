const { insurantSelectors } = require('../selectors/insurant.selectors');

class InsurantPage {
    validateInsurantPage() {
        // Verifica se o campo firstName está visível e interativo
        cy.get(insurantSelectors.firstName)
            .should('be.visible')
            .should('not.be.disabled');
    }

    fillInsurantData(insurantData) {
        // Dados Pessoais
        cy.get(insurantSelectors.firstName).type(insurantData.firstName);
        cy.get(insurantSelectors.lastName).type(insurantData.lastName);
        cy.get(insurantSelectors.birthDate).type(insurantData.birthDate);
        cy.get(insurantSelectors.gender).click({ force: true });

        // Endereço
        cy.get(insurantSelectors.streetAddress).type(insurantData.streetAddress);
        cy.get(insurantSelectors.country).select(insurantData.country);
        cy.get(insurantSelectors.zipCode).type(insurantData.zipCode);
        cy.get(insurantSelectors.city).type(insurantData.city);
        cy.get(insurantSelectors.occupation).select(insurantData.occupation);

        // Hobbies
        insurantData.hobbies.forEach(hobby => {
            cy.get(`#${hobby.toLowerCase()}`).click({ force: true });
        });

        // Website
        cy.get(insurantSelectors.website).type(insurantData.website);

        // Picture (opcional)
        if (insurantData.picture) {
            cy.get(insurantSelectors.picture).attachFile(insurantData.picture);
        }
    }

    clickNext() {
        cy.wait(2000); // Aguarda um tempo para garantir que a página está pronta
        cy.get(insurantSelectors.nextButton).click({ force: true });
    }
}

module.exports = new InsurantPage(); 