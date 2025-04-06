const { HOME_SELECTORS } = require('../selectors/home.selectors');

class HomePage {
    visit() {
        cy.visit('/101/index.php');
    }

    clickAutomobileInsurance() {
        cy.get(HOME_SELECTORS.AUTOMOBILE_INSURANCE_BUTTON).click();
    }
}

module.exports = new HomePage();
