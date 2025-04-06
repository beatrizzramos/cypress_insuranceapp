const { PRICE_SELECTORS } = require('../selectors/price.selectors');

class PricePage {
    validatePricePage() {
        cy.get(PRICE_SELECTORS.PRICE_TABLE).should('be.visible');
    }

    selectPrice(option) {
        const optionLower = option.toLowerCase();
        cy.get(PRICE_SELECTORS.PRICE_OPTIONS[optionLower.toUpperCase()]).should('exist').click({ force: true });
    }

    clickNext() {
        cy.wait(2000);
        cy.get(PRICE_SELECTORS.NEXT_BUTTON).click({ force: true });
    }
}

module.exports = new PricePage(); 