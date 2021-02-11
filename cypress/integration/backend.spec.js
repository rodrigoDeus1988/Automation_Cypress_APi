/// <reference types="cypress" />


describe ('Should test at a funcional level', () => {
    before(() => {

    })
    
    beforeEach(() => {
 
    }) 


    it('Should create an account', () => {
      cy.request({
          method: 'POST',
          url:'https://barrigarest.wcaquino.me/signin', 
          body:{
              email: "a@a",    
              redirecionar: false,  
              senha: "a"  
          } 

      }).its('body.token').should('not.be.empty')
      .then(token => {    
        cy.request({
              url:'https://barrigarest.wcaquino.me/contas', 
              method: 'POST',
              headers:{ Authorization: 'bearer ${token}' } ,     
              body: {  
                nome:'Conta para saldo' 
               } 
         }).as('response')

      })  
      cy.get('@response').then(res =>{
          expect(res.status).to.be.equal(201)
          expect(res.status).to.have.property('id')
          expect(res.status).to.have.property('nome','Conta para saldo')
      })
    })   


    it ('Should upadate an account', () => {

        
    })

}) 

