const cnpjs = require('../../fixtures/cnpjs.json')

describe('ReceitaWS — contrato público de consulta CNPJ', () => {
  it('retorna a empresa correspondente ao CNPJ válido', () => {
    cy.consultaCnpj(cnpjs.valid).then(({ status, headers, body }) => {
      expect(status).to.eq(200)
      expect(headers['content-type']).to.include('application/json')
      expect(body.status).to.eq('OK')
      expect(body.cnpj).to.be.a('string')
      expect(body.cnpj.replace(/\D/g, '')).to.eq(cnpjs.valid)
      expect(body.nome).to.be.a('string').and.not.be.empty
    })
  })

  it('retorna erro de negócio para CNPJ inválido', () => {
    cy.consultaCnpj(cnpjs.invalid).then(({ status, body }) => {
      expect(status).to.eq(400)
      expect(body.status).to.eq('ERROR')
      expect(body.message).to.be.a('string').and.not.be.empty
    })
  })
})
