/// <reference types="cypress" />
export {}

declare global {
  namespace Cypress {
    interface CnpjResponse {
      status: 'OK' | 'ERROR'
      cnpj?: string
      nome?: string
      message?: string
    }
    interface Chainable {
      /** Abre o login e preenche as credenciais fornecidas. */
      loginByForm(username: string, password: string): Chainable<JQuery<HTMLElement>>
      /** Consulta real, sem repetir requisições em caso de falha. */
      consultaCnpj(cnpj: string): Chainable<Response<CnpjResponse>>
    }
  }
}

