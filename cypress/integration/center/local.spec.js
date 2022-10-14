/// <reference types="cypress"/>

import loc from '../../support/locators'

describe("Work with locals", () => {

    beforeEach(() => {
        cy.visit("https://center.umov.me")
        cy.login('trindade', 'cypress', 'a')
        cy.get(loc.MAIN.MENU_LOCALS).click()
    })

    it("Should be created new local", () => {
        const descriptionLocal = 'Vivo - ' + Math.floor(Math.random() * 1001);
        const descriptionCorporateName = 'Shopping' + Math.floor(Math.random() * 1001);

        cy.get(loc.LIST_LOCALS.BTN_NEW_LOCAL).click()
        cy.get(loc.DETAILS_LOCAL.TF_DESCRIPTION).type(descriptionLocal)
        cy.get(loc.DETAILS_LOCAL.TF_COMPANY_NAME).type(descriptionCorporateName)
        cy.get(loc.DETAILS_LOCAL.BTN_SAVE).click()

        cy.get(loc.LIST_LOCALS.TF_SEARCH).type(descriptionLocal)
        cy.get(loc.LIST_LOCALS.BTN_SEARCH).click()

        cy.xpath(loc.LIST_LOCALS.FN_XP_FIND_LOCAL(descriptionLocal)).should("exist")

    })

    it("Edit local", () => {
        const descriptionLocal = 'Claro - ' + Math.floor(Math.random() * 1001);
        const descriptionCorporateName = 'Loja' + Math.floor(Math.random() * 1001);
        //Preenche Cadastro e salva
        cy.get(loc.LIST_LOCALS.BTN_NEW_LOCAL).click()
        cy.get(loc.DETAILS_LOCAL.TF_DESCRIPTION).type(descriptionLocal)
        cy.get(loc.DETAILS_LOCAL.TF_COMPANY_NAME).type(descriptionCorporateName)
        cy.get(loc.DETAILS_LOCAL.BTN_SAVE).click()

        //Pesquisa local casdatrado
        cy.get(loc.LIST_LOCALS.TF_SEARCH).type(descriptionLocal)
        cy.get(loc.LIST_LOCALS.BTN_SEARCH).click()

        //Abre edição
        cy.get(loc.LIST_LOCALS.FN_EDIT).click()

        const descriptionEdit = descriptionLocal + 'Edit'
        
        //Pesquisa local editado
        cy.get(loc.DETAILS_LOCAL.TF_DESCRIPTION).clear().type(descriptionEdit)
        cy.get(loc.DETAILS_LOCAL.BTN_SAVE).click()

        //Assert locator nome variavel
        cy.xpath(loc.LIST_LOCALS.FN_XP_FIND_LOCAL(descriptionEdit)).should("exist")

    })

    it("Delete Local", () => {

        const descriptionLocal = 'Panvel - ' + Math.floor(Math.random() * 1001);
        const descriptionCorporateName = 'Farmacia' + Math.floor(Math.random() * 1001);
        //Preenche Cadastro e salva
        cy.get(loc.LIST_LOCALS.BTN_NEW_LOCAL).click()
        cy.get(loc.DETAILS_LOCAL.TF_DESCRIPTION).type(descriptionLocal)
        cy.get(loc.DETAILS_LOCAL.TF_COMPANY_NAME).type(descriptionCorporateName)
        cy.get(loc.DETAILS_LOCAL.BTN_SAVE).click()

        //Pesquisa local casdatrado
        cy.get(loc.LIST_LOCALS.TF_SEARCH).type(descriptionLocal)
        cy.get(loc.LIST_LOCALS.BTN_SEARCH).click()

        //Abre edição e inativa o cadastro
        cy.get(loc.LIST_LOCALS.FN_EDIT).click()
        cy.get(loc.DETAILS_LOCAL.BOX_ACTIVE).click()
        cy.get(loc.DETAILS_LOCAL.BTN_SAVE).click()
        cy.xpath(loc.LIST_LOCALS.FN_XP_FIND_LOCAL(descriptionLocal)).should("not.be.exist")
    })
})