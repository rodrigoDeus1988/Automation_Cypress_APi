class LoginPage {
  visit() {
    cy.visit(Cypress.env('webBaseUrl'))
  }

  username() {
    return cy.get('[data-testid="login-email"]')
  }

  password() {
    return cy.get('[data-testid="login-password"]')
  }

  submit() {
    return cy.get('[data-testid="login-submit"]')
  }

  login(username, password) {
    this.visit()
    this.username().clear().type("teste@gmail.com")
    this.password().clear().type("Rds@123", { log: false })
    this.submit().click()
  }
}

module.exports = new LoginPage()

