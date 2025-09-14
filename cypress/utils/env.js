function baseUrl() {
  return Cypress.config('baseUrl') || Cypress.env('webBaseUrl')
}

module.exports = { baseUrl }

