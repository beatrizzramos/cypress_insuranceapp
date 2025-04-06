const { INSURANT_SELECTORS } = require('../selectors/insurant.selectors');

class InsurantPage {
    validateInsurantPage() {
        cy.get(INSURANT_SELECTORS.FIRST_NAME).should('be.visible').should('not.be.disabled');
    }

    fillInsurantData(insurantData) {
        cy.get(INSURANT_SELECTORS.FIRST_NAME).type(insurantData.firstName);
        cy.get(INSURANT_SELECTORS.LAST_NAME).type(insurantData.lastName);
        cy.get(INSURANT_SELECTORS.BIRTH_DATE).type(insurantData.birthDate);
        cy.get(INSURANT_SELECTORS.GENDER).click({ force: true });
        cy.get(INSURANT_SELECTORS.STREET_ADDRESS).type(insurantData.streetAddress);
        cy.get(INSURANT_SELECTORS.COUNTRY).select(insurantData.country);
        cy.get(INSURANT_SELECTORS.ZIP_CODE).type(insurantData.zipCode);
        cy.get(INSURANT_SELECTORS.CITY).type(insurantData.city);
        cy.get(INSURANT_SELECTORS.OCCUPATION).select(insurantData.occupation);
        insurantData.hobbies.forEach(hobby => {
            cy.get(`#${hobby.toLowerCase()}`).click({ force: true });
        });
        cy.get(INSURANT_SELECTORS.WEBSITE).type(insurantData.website);
        if (insurantData.picture) {
            cy.get(INSURANT_SELECTORS.PICTURE).attachFile(insurantData.picture);
        }
    }

    clickNext() {
        cy.wait(2000);
        cy.get(INSURANT_SELECTORS.NEXT_BUTTON).click({ force: true });
    }
}

module.exports = new InsurantPage(); 