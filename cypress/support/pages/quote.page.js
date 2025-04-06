const { quoteSelectors } = require('../selectors/quote.selectors');

class QuotePage {
    validateQuotePage() {
        cy.get(quoteSelectors.email).should('be.visible').should('not.be.disabled');
    }

    fillQuoteData(quoteData) {
        cy.get(quoteSelectors.email).should('be.visible').type(quoteData.email);
        cy.get(quoteSelectors.phone).should('be.visible').type(quoteData.phone);
        cy.get(quoteSelectors.username).should('be.visible').type(quoteData.username);
        cy.get(quoteSelectors.password).should('be.visible').type(quoteData.password);
        cy.get(quoteSelectors.confirmPassword).should('be.visible').type(quoteData.password);
        cy.get(quoteSelectors.comments).should('be.visible').type(quoteData.comments);
    }

    sendQuote() {
        cy.get(quoteSelectors.sendButton).should('be.visible').should('not.be.disabled').click({ force: true });
    }
}

module.exports = new QuotePage(); 