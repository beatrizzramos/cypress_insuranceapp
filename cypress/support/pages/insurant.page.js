const { insurantSelectors } = require('../selectors/insurant.selectors');

class InsurantPage {
    validateInsurantPage() {

        cy.get(insurantSelectors.firstName).should('be.visible').should('not.be.disabled');
    }

    fillInsurantData(insurantData) {

        cy.get(insurantSelectors.firstName).type(insurantData.firstName);
        cy.get(insurantSelectors.lastName).type(insurantData.lastName);
        cy.get(insurantSelectors.birthDate).type(insurantData.birthDate);
        cy.get(insurantSelectors.gender).click({ force: true });
        cy.get(insurantSelectors.streetAddress).type(insurantData.streetAddress);
        cy.get(insurantSelectors.country).select(insurantData.country);
        cy.get(insurantSelectors.zipCode).type(insurantData.zipCode);
        cy.get(insurantSelectors.city).type(insurantData.city);
        cy.get(insurantSelectors.occupation).select(insurantData.occupation);

        insurantData.hobbies.forEach(hobby => {
            cy.get(`#${hobby.toLowerCase()}`).click({ force: true });
        });

        cy.get(insurantSelectors.website).type(insurantData.website);

        if (insurantData.picture) {
            cy.get(insurantSelectors.picture).attachFile(insurantData.picture);
        }
    }

    clickNext() {
        cy.wait(2000); 
        cy.get(insurantSelectors.nextButton).click({ force: true });
    }
}

module.exports = new InsurantPage(); 