const { quoteSelectors } = require('../selectors/quote.selectors');

class QuotePage {
    validateQuotePage() {
        cy.get(quoteSelectors.email)
            .should('be.visible')
            .should('not.be.disabled');
    }

    fillQuoteData(quoteData) {
        // E-mail
        cy.get(quoteSelectors.email)
            .should('be.visible')
            .type(quoteData.email);

        // Telefone
        cy.get(quoteSelectors.phone)
            .should('be.visible')
            .type(quoteData.phone);

        // Nome de Usuário
        cy.get(quoteSelectors.username)
            .should('be.visible')
            .type(quoteData.username);

        // Senha
        cy.get(quoteSelectors.password)
            .should('be.visible')
            .type(quoteData.password);

        // Confirmar Senha
        cy.get(quoteSelectors.confirmPassword)
            .should('be.visible')
            .type(quoteData.password);

        // Comentários
        cy.get(quoteSelectors.comments)
            .should('be.visible')
            .type(quoteData.comments);
    }

    sendQuote() {
        cy.get(quoteSelectors.sendButton)
            .should('be.visible')
            .should('not.be.disabled')
            .click({ force: true });
    }
}

module.exports = new QuotePage(); 