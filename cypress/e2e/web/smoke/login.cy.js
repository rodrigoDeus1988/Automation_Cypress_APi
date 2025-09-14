const { LoginPage, DashboardPage } = require('../../../pageObjects')

describe('Login Smoke', () => {
  beforeEach(() => {
    cy.fixture('users').as('users')
  })

  it('logs in with valid credentials', function () {
    const { username, password } = this.users.valid
    LoginPage.login(username, password)
    DashboardPage.assertLoggedIn()
  })
})
