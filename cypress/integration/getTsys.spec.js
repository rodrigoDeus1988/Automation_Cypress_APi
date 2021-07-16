/// <reference types="cypress" />

describe ('Consultar Cartão Tsys', () => { 
    
    before(() => {

    })
    
    beforeEach(() => {
 
    })  


    it('Busca uma lista de declarações', () => {
      
        cy.request({
            method: 'GET', 
            url:'http://statement-microservice.cards.k8s-uat.bancomidway.io/cards/v2/accounts/cards/statements/dates?pageNumber=0&pageSize=10', 
            
            headers: {

              "server": "nginx/1.19.1",
              "date": "Mon, 14 Jun 2021 20:37:51 GMT",
              "transfer-encoding": "chunked",
              "connection": "keep-alive",
              "x-correlation-id": "card-ee23a8a3-5d20-30f2-b927-6b55a9b6f35e",
              "access-control-expose-headers": "x-correlation-id, x-midway-correlation-id",
              "x-midway-correlation-id": "card-ee23a8a3-5d20-30f2-b927-6b55a9b6f35e",
              "accept": "application/json;charset=UTF-8",
              "x-account-cpf": "27430378811",
              "x-account-pan": "4077********7988" 
             
              }

            }).as('response') 
            cy.get('@response').then(res =>{
            console.log("response",res)    
            expect(res.status).to.be.equal(200)
             
        }) 

    })
    
    it('Busca declarações', () => {
      
        cy.request({
            method: 'GET', 
            url:'http://statement-microservice.cards.k8s-uat.bancomidway.io/cards/v2/accounts/cards/statements/transactions?pageNumber=0&pageSize=10', 
            
            headers: {

              "server": "nginx/1.19.1",
              "date": "Mon, 14 Jun 2021 20:37:51 GMT",
              "transfer-encoding": "chunked",
              "connection": "keep-alive",
              "accept": "application/json;charset=UTF-8",
              "x-account-cpf": "27430378811",
              "x-account-pan": "4077********7988"
             
              }

            }).as('response') 
            cy.get('@response').then(res =>{ 
            expect(res.status).to.be.equal(200)
             
        }) 

  
    })  

    

}) 

