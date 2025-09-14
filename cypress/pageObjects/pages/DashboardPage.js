class DashboardPage {
  header() {
    return cy.get('[data-cy="dashboard-header"]')
  }

  assertLoggedIn() {
    this.header().should('exist')
  }
}

module.exports = new DashboardPage()

