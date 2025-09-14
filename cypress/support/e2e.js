import './commands'

Cypress.on('uncaught:exception', () => false)

beforeEach(() => {
  const base = Cypress.config('baseUrl') || Cypress.env('webBaseUrl')
  if (base) Cypress.config('baseUrl', base)
})

