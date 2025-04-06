const { priceSelectors } = require('../selectors/price.selectors');

class PricePage {
    validatePricePage() {
        cy.get(priceSelectors.priceTable).should('be.visible');
    }

    selectPrice(option) {
        const optionLower = option.toLowerCase();
        cy.get(priceSelectors.priceOptions[optionLower]).should('exist').click({ force: true });
    }

    clickNext() {
        cy.wait(2000); 
        cy.get(priceSelectors.nextButton).click({ force: true });
    }
}

module.exports = new PricePage(); 