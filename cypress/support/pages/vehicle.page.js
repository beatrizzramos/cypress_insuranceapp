const { vehicleSelectors } = require('../selectors/vehicle.selectors');

class VehiclePage {
    validateVehiclePage() {
        cy.get('#make')
.should('be.visible').should('not.be.disabled');
    }

    fillVehicleData(vehicleData) {
        cy.get('#make').select(vehicleData.make);
        cy.get(vehicleSelectors.enginePerformance).type(vehicleData.enginePerformance);
        cy.get(vehicleSelectors.dateOfManufacture).type(vehicleData.dateOfManufacture);
        cy.get(vehicleSelectors.numberOfSeats).select(vehicleData.numberOfSeats);
        cy.get(vehicleSelectors.fuelType).select(vehicleData.fuelType);
        cy.get(vehicleSelectors.listPrice).type(vehicleData.listPrice);
        cy.get(vehicleSelectors.licensePlateNumber).type(vehicleData.licensePlateNumber);
        cy.get(vehicleSelectors.annualMileage).type(vehicleData.annualMileage);
    }

    clickNext() {
        cy.wait(2000);
        cy.get(vehicleSelectors.nextButton).click({ force: true });
    }
}

module.exports = new VehiclePage();
