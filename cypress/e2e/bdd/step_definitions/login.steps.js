const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { LoginPage } = require('../../../pageObjects')
const { loginCredentials, requiredEnv } = require('../../../utils/env')

Given('que estou na página de login', () => {
  return LoginPage.visit()
})

When('faço login com credenciais válidas', () => {
  const { username, password } = loginCredentials()
  return LoginPage.login(username, password)
})

Then('sou redirecionado para a página autenticada', () => {
  const expectedPath = requiredEnv('loginSuccessPath')
  return cy.location('pathname').should('eq', expectedPath)
})

Then('vejo a mensagem de erro {string}', (message) => {
  return LoginPage.elements.errorMessage()
    .should('be.visible')
    .and('contain.text', message)
})
