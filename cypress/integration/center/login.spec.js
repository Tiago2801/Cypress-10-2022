/// <reference types="cypress"/>

import loc from '../../support/locators'

describe("Login Tests", () => {

    beforeEach(() => {
        cy.visit("https://center.umov.me")

    })

    it("Should be login", () => {

        //cy.get(loc.LOGN.TF_WORKSPACE).type("trindade")
        //cy.get(loc.LOGN.TF_USER).type("cypress")
        //cy.get(loc.LOGN.TF_PASSWORD).type("a")
        //cy.get(loc.LOGN.BTN_ACCESS).click()
        
        cy.login('trindade', 'cypress', 'a')
        cy.get(loc.MAIN.IMG_MENU).should("to.be.visible")

    })

    it("Should be login invalid", () => {

        cy.login('trindade', 'usuarioerrado', 'senhaerrada')
        cy.get('.nm-text').should("have.text", "Login invalid.")

    })

})