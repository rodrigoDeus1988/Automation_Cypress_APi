Cypress.Commands.add('dataCy', (value, options = {}) => {
  return cy.get(`[data-cy="${value}"]`, options)
})

Cypress.Commands.add('loginByForm', (username, password, options = {}) => {
  const base = options.baseUrl || Cypress.config('baseUrl') || Cypress.env('webBaseUrl')
  if (!base) throw new Error('Missing baseUrl or webBaseUrl')
  cy.visit(base + '/login')
  cy.get('input[name="username"]').clear().type(username)
  cy.get('input[name="password"]').clear().type(password, { log: false })
  cy.get('button[type="submit"]').click()
})

Cypress.Commands.add('logout', () => {
  const base = Cypress.config('baseUrl') || Cypress.env('webBaseUrl')
  if (!base) throw new Error('Missing baseUrl or webBaseUrl')
  cy.visit(base + '/logout')
})

