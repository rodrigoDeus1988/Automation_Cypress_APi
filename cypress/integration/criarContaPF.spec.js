/// <reference types="cypress" />

describe('Banco Digital Midway', () => {

    before(() => {

    })

    beforeEach(() => {

    })


    it('Criar uma conta PF', () => {

        cy.request({
            method: 'POST',
            url: 'https://api-qa.bancomidway.com.br/channel-mass-engine-v1/payment-account',


            body: {
                "password": "102030",
                "documentNumber":"80286335875",
                "hasLimit": true
            },

            headers: {

                "x-api-key": "UfICeQf7eY1jB9oKwtqJ6jxu33sdiha1FtJFpWsd",
                "deviceId": "0558bbc48581453a",

            }

        }).as('response')
        cy.get('@response').then(res => {
            console.log("response", res)
            expect(res.status).to.be.equal(200)

        })

    })


})

