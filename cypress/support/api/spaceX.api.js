Cypress.Commands.add('requisicaoSpaceX', () => {
    cy.request({
        method: 'POST',
        url: 'https://spacex-production.up.railway.app/',
        headers: {
            'Content-Type': 'application/json'
        },
        body:{
            query: `query Rockets {
                rockets {
                    type
                    active
                    country
                    name
                }
            }`
        }
    }).then(response => {
        Cypress.env('responseData', response)
        cy.log(Cypress.env('responseData'))
    })
})

Cypress.Commands.add('validarRequisicaoSpaceX', () => {
    const response = Cypress.env('responseData')
    const {status, body} = response 
    expect(status).to.eq(200)
    let corpo = JSON.stringify(body)
    expect(corpo).to.include('Starship')
    cy.log('Status: ' + status)
    cy.log('Corpo: ' + corpo)
})