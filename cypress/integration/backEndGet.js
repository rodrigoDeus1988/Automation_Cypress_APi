/// <reference types="cypress" />

describe ('Consultar filmes/series', () => { 
    before(() => {

    })
    
    beforeEach(() => {
 
    })  


    it ('Cenário: 1', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/series', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    }) 

    it ('Cenário: 2', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/filmes/titulo?nome=cORINGA', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })

    it ('Cenário: 3', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/filmes', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })

    it ('Cenário: 4', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/filmes/genero?nome=Drama', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })

    it ('Cenário: 5', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/filmes/classificacao?cl=18', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })

    it ('Cenário: 6', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/series/genero?gr=Terror', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })

    it ('Cenário: 7', () => { 

        cy.request({
            method: 'GET', 
            url:'https://netfilmes.herokuapp.com/avalicao/nota?n=3', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })

    it ('Cenário: 8', () => { 

        cy.request({
            method: 'GET', 
            url:'https://www.receitaws.com.br/v1/cnpj/60975174000100', 

        }).as('response') 
        cy.get('@response').then(res =>{
            expect(res.status).to.be.equal(200)
             
        }) 

        
    })


}) 

