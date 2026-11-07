const { LoginPage } = require('../pageObjects')
const { requiredEnv } = require('../utils/env')

Cypress.Commands.add('loginByForm', (username, password) => {
  LoginPage.visit()
  return LoginPage.login(username, password)
})

Cypress.Commands.add('consultaCnpj', (cnpj) => {
  const baseUrl = requiredEnv('apiBaseUrl').replace(/\/+$/, '')
  return cy.request({
    method: 'GET',
    url: baseUrl + '/cnpj/' + encodeURIComponent(cnpj),
    headers: { accept: 'application/json' },
    failOnStatusCode: false,
    retryOnNetworkFailure: false,
    retryOnStatusCodeFailure: false,
  })
})
