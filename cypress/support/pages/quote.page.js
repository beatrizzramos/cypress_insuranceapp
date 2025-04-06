const { QUOTE_SELECTORS } = require('../selectors/quote.selectors');

class QuotePage {
    validateQuotePage() {
        cy.get(QUOTE_SELECTORS.EMAIL).should('be.visible').should('not.be.disabled');
    }

    fillQuoteData(quoteData) {
        cy.get(QUOTE_SELECTORS.EMAIL).should('be.visible').type(quoteData.email);
        cy.get(QUOTE_SELECTORS.PHONE).should('be.visible').type(quoteData.phone);
        cy.get(QUOTE_SELECTORS.USERNAME).should('be.visible').type(quoteData.username);
        cy.get(QUOTE_SELECTORS.PASSWORD).should('be.visible').type(quoteData.password);
        cy.get(QUOTE_SELECTORS.CONFIRM_PASSWORD).should('be.visible').type(quoteData.password);
        cy.get(QUOTE_SELECTORS.COMMENTS).should('be.visible').type(quoteData.comments);
    }

    sendQuote() {
        cy.get(QUOTE_SELECTORS.SEND_BUTTON).should('be.visible').should('not.be.disabled').click({ force: true });
    }
}

module.exports = new QuotePage(); 