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

And('E clico em próximo', () => {
    vehiclePage.clickNext();
});

And('preencho todos os dados do segurado', () => {
    const insurantData = generateInsurantData();
    insurantPage.fillInsurantData(insurantData);
});

And('preencho todos os dados do produto', () => {
    const productData = generateProductData();
    productPage.fillProductData(productData);
});

And('seleciono a opção de preço', () => {
    // Seleciona aleatoriamente uma das opções disponíveis
    const options = ['Silver', 'Gold', 'Platinum', 'Ultimate'];
    const selectedOption = options[Math.floor(Math.random() * options.length)];
    pricePage.selectPrice(selectedOption);
});

And('envio a cotação', () => {
    const quoteData = generateQuoteData();
    quotePage.fillQuoteData(quoteData);
    quotePage.sendQuote();
});

And('clico em próximo', () => {
    cy.wait(2000);
    cy.url().then(url => {
        if (url.includes('enterinsurantdata')) {
            insurantPage.clickNext();
        } else if (url.includes('enterproductdata')) {
            productPage.clickNext();
        } else if (url.includes('selectpriceoption')) {
            pricePage.clickNext();
        } else {
            vehiclePage.clickNext();
        }
    });
});

Then('devo ver a mensagem de sucesso', () => {
    cy.contains('Sending e-mail success!').should('be.visible');
}); 