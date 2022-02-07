/// <reference types="cypress" />

describe ('Consulta CNPJ', () => { 
    
    before(() => {

    })
    
    beforeEach(() => {
 
    })  


    it('Busca CNPJ', () => {
      
        cy.request({
            method: 'GET', 
            url:'https://www.receitaws.com.br/v1/cnpj/09464032000112', 
            
            headers: {

              "server": "nginx/1.19.1",
              "transfer-encoding": "chunked",
              "connection": "keep-alive",
              "accept": "application/json;charset=UTF-8",
          
             
              }

            }).as('response') 
            cy.get('@response').then(res =>{
            console.log("response",res)    
            expect(res.status).to.be.equal(200)
             
        }) 

    })
    
    
}) 

