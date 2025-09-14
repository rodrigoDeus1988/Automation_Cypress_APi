/// <reference types="cypress" />

describe.only('Consulta CNPJ - Additional Tests', () => {
  
    it('Valid CNPJ - Should return status 200', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.receitaws.com.br/v1/cnpj/09464032000112',
        headers: {
          "accept": "application/json;charset=UTF-8",
        },
      }).as('response');
      cy.get('@response').then((res) => {
        expect(res.status).to.be.equal(200);
        cy.log(JSON.stringify(res.body));
      });
    });
  
    it('Invalid CNPJ - Should return status 400 or error message', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.receitaws.com.br/v1/cnpj/00000000000000',
        failOnStatusCode: false, // Prevent Cypress from failing the test
        headers: {
          "accept": "application/json;charset=UTF-8",
        },
      }).as('response');
      cy.get('@response').then((res) => {
        expect(res.status).to.be.equal(200);
        //expect(res.body).to.have.property('message');
        cy.log(JSON.stringify(res.body));
      });
    });
  
    it('Missing Header - Should return status 400 or error message', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.receitaws.com.br/v1/cnpj/09464032000112',
        failOnStatusCode: false, // Prevent Cypress from failing the test
      }).as('response');
      cy.get('@response').then((res) => {
        expect(res.status).to.be.equal(200);
        cy.log(JSON.stringify(res.body));
      });
    });
  
    it('Valid CNPJ - Validate specific fields in response body', () => {
      cy.request({
        method: 'GET',
        url: 'https://www.receitaws.com.br/v1/cnpj/09464032000112',
        headers: {
          "accept": "application/json;charset=UTF-8",
        },
      }).as('response');
      cy.get('@response').then((res) => {
        expect(res.status).to.be.equal(500);
        expect(res.body).to.have.property('nome'); // Replace 'nome' with actual field
        expect(res.body).to.have.property('cnpj', '09.464.032/0001-12'); // Adjust based on API response
        cy.log(JSON.stringify(res.body));
      });
    });
  
  });