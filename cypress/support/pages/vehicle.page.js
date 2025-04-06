const { VEHICLE_SELECTORS } = require('../selectors/vehicle.selectors');

class VehiclePage {
    validateVehiclePage() {
        cy.get('#make').should('be.visible').should('not.be.disabled');
    }

    fillVehicleData(vehicleData) {
        cy.get('#make').select(vehicleData.make);
        cy.get(VEHICLE_SELECTORS.ENGINE_PERFORMANCE).type(vehicleData.enginePerformance);
        cy.get(VEHICLE_SELECTORS.DATE_OF_MANUFACTURE).type(vehicleData.dateOfManufacture);
        cy.get(VEHICLE_SELECTORS.NUMBER_OF_SEATS).select(vehicleData.numberOfSeats);
        cy.get(VEHICLE_SELECTORS.FUEL_TYPE).select(vehicleData.fuelType);
        cy.get(VEHICLE_SELECTORS.LIST_PRICE).type(vehicleData.listPrice);
        cy.get(VEHICLE_SELECTORS.LICENSE_PLATE_NUMBER).type(vehicleData.licensePlateNumber);
        cy.get(VEHICLE_SELECTORS.ANNUAL_MILEAGE).type(vehicleData.annualMileage);
    }

    clickNext() {
        cy.wait(2000);
        cy.get(VEHICLE_SELECTORS.NEXT_BUTTON).click({ force: true });
    }
}

module.exports = new VehiclePage();
