const { PRODUCT_SELECTORS } = require('../selectors/product.selectors');

class ProductPage {
    validateProductPage() {
        cy.get(PRODUCT_SELECTORS.START_DATE).should('be.visible').should('not.be.disabled');
    }

    validateStartDate(date) {
        const today = new Date();
        const inputDate = new Date(date);
        return inputDate > today ? date : this.getNextDay(today);
    }

    getNextDay(date) {
        const nextDay = new Date(date);
        nextDay.setDate(date.getDate() + 1);
        return nextDay.toISOString().split('T')[0];
    }

    fillProductData(productData) {
        const validStartDate = this.validateStartDate(productData.startDate);
        cy.get(PRODUCT_SELECTORS.START_DATE).type(validStartDate);
        cy.get(PRODUCT_SELECTORS.INSURANCE_SUM).select(productData.insuranceSum);
        cy.get(PRODUCT_SELECTORS.MERIT_RATING).select(productData.meritRating);
        cy.get(PRODUCT_SELECTORS.DAMAGE_INSURANCE).select(productData.damageInsurance);
        
        cy.wait(1000);
        if (productData.optionalProducts.includes('EuroProtection')) {
            cy.get(PRODUCT_SELECTORS.OPTIONAL_PRODUCTS.EURO_PROTECTION).should('exist').click({ force: true });
        }
        if (productData.optionalProducts.includes('LegalDefenseInsurance')) {
            cy.get(PRODUCT_SELECTORS.OPTIONAL_PRODUCTS.LEGAL_DEFENSE).should('exist').click({ force: true });
        }

        cy.get(PRODUCT_SELECTORS.COURTESY_CAR).select(productData.courtesyCar);
    }

    clickNext() {
        cy.wait(2000); 
        cy.get(PRODUCT_SELECTORS.NEXT_BUTTON).click({ force: true });
    }
}

module.exports = new ProductPage(); 