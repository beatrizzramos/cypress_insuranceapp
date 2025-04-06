const { vehicleSelectors } = require('../selectors/vehicle.selectors');

class VehiclePage {
    validateVehiclePage() {
        // Verifica se o campo make está visível e interativo
        cy.get('#make')
            .should('be.visible')
            .should('not.be.disabled');
    }

    fillVehicleData(vehicleData) {
        // Marca
        cy.get('#make')
            .select(vehicleData.make);

        // Desempenho do Motor
        cy.get(vehicleSelectors.enginePerformance)
            .type(vehicleData.enginePerformance);

        // Data de Fabricação
        cy.get(vehicleSelectors.dateOfManufacture)
            .type(vehicleData.dateOfManufacture);

        // Número de Assentos
        cy.get(vehicleSelectors.numberOfSeats)
            .select(vehicleData.numberOfSeats);

        // Tipo de Combustível
        cy.get(vehicleSelectors.fuelType)
            .select(vehicleData.fuelType);

        // Preço de Lista
        cy.get(vehicleSelectors.listPrice)
            .type(vehicleData.listPrice);

        // Número da Placa
        cy.get(vehicleSelectors.licensePlateNumber)
            .type(vehicleData.licensePlateNumber);

        // Quilometragem Anual
        cy.get(vehicleSelectors.annualMileage)
            .type(vehicleData.annualMileage);
    }

    clickNext() {
        cy.wait(2000); // Aguarda um tempo para garantir que a página está pronta
        cy.get(vehicleSelectors.nextButton).click({ force: true });
    }
}

module.exports = new VehiclePage();
