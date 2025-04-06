import { homeSelectors } from '../selectors/home.selectors';

class HomePage {
    visit() {
        cy.visit('/101/index.php');
    }

    clickAutomobileInsurance() {
        cy.get(homeSelectors.automobileInsuranceButton).click();
    }
}

export default new HomePage();
