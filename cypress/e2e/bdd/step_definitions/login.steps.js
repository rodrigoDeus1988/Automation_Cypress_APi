const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor')
const { LoginPage, DashboardPage } = require('../../../pageObjects')

Given('que estou na página de login', () => {
  LoginPage.visit()
})

When('faço login com credenciais válidas', () => {
  cy.fixture('users').then(({ valid }) => {
    const { username, password } = valid
    LoginPage.login(username, password)
  })
})

Then('devo ver o dashboard', () => {
  DashboardPage.assertLoggedIn()
})

