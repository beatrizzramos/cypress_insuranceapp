const { Given, When, Then, And } = require('cypress-cucumber-preprocessor/steps');
const homePage = require('../pages/home.page');
const vehiclePage = require('../pages/vehicle.page');
const insurantPage = require('../pages/insurant.page');
const productPage = require('../pages/product.page');
const pricePage = require('../pages/price.page');
const quotePage = require('../pages/quote.page');
const { 
    generateVehicleData, 
    generateInsurantData,
    generateProductData,
    generateQuoteData 
} = require('../fakers/dataFakers');

Given('que estou na página inicial do simulador', () => {
    homePage.visit();
});

When('preencho todos os dados do veículo', () => {
    homePage.clickAutomobileInsurance();
    vehiclePage.validateVehiclePage();
    const vehicleData = generateVehicleData();
    vehiclePage.fillVehicleData(vehicleData);
});

And('clico em próximo', () => {
    vehiclePage.clickNext();
});

And('preencho todos os dados do segurado', () => {
    const insurantData = generateInsurantData();
    insurantPage.fillInsurantData(insurantData);
});

And('clico em próximo após preencher os dados do segurado', () => {
    insurantPage.clickNext();
});

And('preencho todos os dados do produto', () => {
    const productData = generateProductData();
    productPage.fillProductData(productData);
});

And('clico em próximo após preencher os dados do produto', () => {
    productPage.clickNext();
});

And('seleciono a opção de preço', () => {
    const options = ['Silver', 'Gold', 'Platinum', 'Ultimate'];
    const selectedOption = options[Math.floor(Math.random() * options.length)];
    pricePage.selectPrice(selectedOption);
});

And('clico em próximo após selecionar a opção de preço', () => {
    pricePage.clickNext();
});

And('envio a cotação', () => {
    const quoteData = generateQuoteData();
    quotePage.fillQuoteData(quoteData);
    cy.on('uncaught:exception', (err, runnable) => {
        // Retorna false para evitar que o Cypress falhe o teste
        return false;
    });
    quotePage.sendQuote();
});

Then('devo ver a mensagem de sucesso', () => {
    cy.contains('Sending e-mail success!').should('be.visible');
})