class LoginPage {
  visit() {
    cy.visit(Cypress.env('webBaseUrl'))
  }

  username() {
    return cy.get('input[name="username"]')
  }

  password() {
    return cy.get('input[name="password"]')
  }

  submit() {
    return cy.get('button[type="submit"]')
  }

  login(username, password) {
    this.visit()
    this.username().clear().type(username)
    this.password().clear().type(password, { log: false })
    this.submit().click()
  }
}

module.exports = new LoginPage()

