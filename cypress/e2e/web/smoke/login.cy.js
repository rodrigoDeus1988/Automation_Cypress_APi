const { loginCredentials, requiredEnv } = require('../../../utils/env')

describe('Login smoke', () => {
  it('redireciona o usuário autenticado para a página esperada', () => {
    const { username, password } = loginCredentials()
    const successPath = requiredEnv('loginSuccessPath')
    cy.loginByForm(username, password)
    cy.location('pathname').should('eq', successPath)
  })
})
