function requiredEnvValues(names) {
  const values = Object.fromEntries(names.map((name) => [name, Cypress.env(name)]))
  const missing = names.filter((name) => {
    const value = values[name]
    return typeof value !== 'string' || !value.trim()
  })

  if (missing.length) {
    throw new Error(
      'Configuração ausente: ' + missing.join(', ') +
      '. Preencha no cypress.env.json da raiz ou nas variáveis CYPRESS_<nome> do ambiente.'
    )
  }
  return values
}

function requiredEnv(name) {
  return requiredEnvValues([name])[name]
}

function loginCredentials() {
  const values = requiredEnvValues(['loginUsername', 'loginPassword'])
  return { username: values.loginUsername, password: values.loginPassword }
}

module.exports = { requiredEnv, loginCredentials }
