const { productSelectors } = require('../selectors/product.selectors');

class ProductPage {
    validateProductPage() {
        cy.get(productSelectors.startDate)
            .should('be.visible')
            .should('not.be.disabled');
    }

    validateStartDate(date) {
        const inputDate = new Date(date.split('/').reverse().join('-'));
        const today = new Date();
        
        // Cria uma data 1 mês no futuro para comparação
        const oneMonthFromNow = new Date();
        oneMonthFromNow.setMonth(oneMonthFromNow.getMonth() + 1);
        
        if (inputDate <= oneMonthFromNow) {
            throw new Error('A data de início deve ser mais de 1 mês no futuro');
        }
        return date;
    }

    fillProductData(productData) {
        // Valida e preenche a data de início
        const validStartDate = this.validateStartDate(productData.startDate);
        cy.get(productSelectors.startDate).type(validStartDate);

        // Preenche os outros campos
        cy.get(productSelectors.insuranceSum).select(productData.insuranceSum);
        cy.get(productSelectors.meritRating).select(productData.meritRating);
        cy.get(productSelectors.damageInsurance).select(productData.damageInsurance);
        
        // Aguarda um momento para garantir que a página está pronta
        cy.wait(1000);
        
        // Optional Products
        if (productData.optionalProducts.includes('EuroProtection')) {
            cy.get(productSelectors.optionalProducts.euroProtection)
                .should('exist')
                .click({ force: true });
        }
        if (productData.optionalProducts.includes('LegalDefenseInsurance')) {
            cy.get(productSelectors.optionalProducts.legalDefense)
                .should('exist')
                .click({ force: true });
        }

        cy.get(productSelectors.courtesyCar).select(productData.courtesyCar);
    }

    clickNext() {
        cy.wait(2000); // Aguarda um tempo para garantir que a página está pronta
        cy.get(productSelectors.nextButton).click({ force: true });
    }
}

module.exports = new ProductPage(); 