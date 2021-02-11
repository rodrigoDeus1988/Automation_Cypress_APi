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
    }) 

    it ('Should upadate an account', () => {

        
    })

})
