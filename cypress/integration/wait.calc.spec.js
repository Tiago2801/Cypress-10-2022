/// <reference types="cypress"/>

describe("Tests work with Waits", () => {

    beforeEach(() => {
        cy.visit("/desafiosoma.html")
    })

    it("Should be sum", () => {

        cy.get('#number1').type("5")
        cy.get('#number2').type("4")
        cy.get('#somar').click()

        //cy.wait(4000)

        cy.get('#total', {timeout: 15000} ).should("have.value", "9")

    })
})