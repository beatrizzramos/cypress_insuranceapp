const { And, Then } = require('cypress-cucumber-preprocessor/steps');
const insurantNegativePage = require('../pages/insurantNegative.page');
const quoteNegativePage = require('../pages/quoteNegative.page');

// Steps específicos para cenários negativos
And('clico em próximo', () => {
    cy.get('button#nextenterinsurantdata,button#nextenterproductdata,button#nextselectpriceoption,button#nextsendquote').click();
    cy.wait(3000);
});

And('preencho os dados do segurado com data de nascimento futura', () => {
    insurantNegativePage.fillInsurantDataWithFutureDate();
});

And('envio a cotação com senhas diferentes', () => {
    quoteNegativePage.fillQuoteDataWithDifferentPasswords();
});

Then('devo ver a mensagem de erro no campo de data de nascimento', () => {
    insurantNegativePage.validateBirthdateError();
});

Then('devo ver a mensagem de erro informando que as senhas não coincidem', () => {
    quoteNegativePage.validatePasswordError();
}); 

