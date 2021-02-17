/// <reference types="cypress" />


describe ('Should test at a funcional level', () => {
    let token

    before(() => {
      cy.getToken('a@a','a') 
      .then(tkn => { 
        token = tkn  
      }) 
    })
    
    beforeEach(() => {
       cy.resetRest() 
    }) 


    it('Should create an account', () => {
      
        cy.request({
              url:'https://barrigarest.wcaquino.me/contas',  
              method: 'POST',
              headers:{ Authorization: `JWT ${token}` } ,       
              body: {  
                nome:'TESTE123' 
               } 
         }).as('response')

         cy.get('@response').then(res =>{
          expect(res.status).to.be.equal(201)
          expect(res.body).to.have.property('id')
          expect(res.body).to.have.property('nome', 'TESTE123')
      }) 

  
    }) 
})   

