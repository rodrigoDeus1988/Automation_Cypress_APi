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
              headers:{ Authorization: `JWT ${token}` } ,       
              body: {  
                nome:'TESTE123' 
               } 
         }).as('response')

      })  
      cy.get('@response').then(res =>{
          expect(res.status).to.be.equal(201)
          expect(res.body).to.have.property('id')
          expect(res.body).to.have.property('nome', 'TESTE123')
      }) 
      })   


    it ('Should upadate an account', () => { 

        
    })

}) 

