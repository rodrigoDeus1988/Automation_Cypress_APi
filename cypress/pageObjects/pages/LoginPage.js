const locators = require('../locators/login.locators')

class LoginPage {
  get elements() {
    return {
      email: () => cy.get(locators.email),
      password: () => cy.get(locators.password),
      submit: () => cy.get(locators.submit),
      errorMessage: () => cy.get(locators.errorMessage),
    }
  }

  visit() {
    const url = Cypress.env('loginPath') || Cypress.config('baseUrl')
    if (!url) throw new Error('Configure baseUrl ou webBaseUrl para executar os testes web')
    return cy.visit(url)
  }

  fillEmail(email) {
    return this.elements.email().clear().type(email, {
      log: false,
      parseSpecialCharSequences: false,
    })
  }

  fillPassword(password) {
    return this.elements.password().clear().type(password, {
      log: false,
      parseSpecialCharSequences: false,
    })
  }

  submit() {
    return this.elements.submit().should('be.enabled').click()
  }

  login(username, password) {
    this.fillEmail(username)
    this.fillPassword(password)
    return this.submit()
  }
}

module.exports = new LoginPage()
