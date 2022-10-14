/// <reference types="cypress"/>

describe("Testes com elementos web", () => {

    beforeEach(() => {
        cy.visit("/elementsweb.html")
    })

    it("Deveria acessar o título da página", () => {

        cy.title().should("to.be.equal", "WebElements Test Page Lab")

    })

    it("Deveria escrever o nome", () => {

        cy.get("input[name='txtbox1']")
            .type("Antonio")
            .should("have.value", "Antonio")

        //Type utilizando o force: true
        cy.get(`[name='txtbox2']`)
            .type("Antonio", {force: true})
            .should("have.value", "Antonio")

    })

    it("Deveria validar textfields habilitados", () => {

        cy.get("input[name='txtbox1']")
            .should("be.enabled")

        cy.get(`[name='txtbox2']`)
            .should('be.disabled')
            .should('not.be.enabled')
    })

    it("Deveria validar o texto de um label", () =>{

        cy.get('form > :nth-child(1) > .text-muted')
            .should("have.text", "TextField:")
    })

    it("Validação Radio Group", () => {

        //Valida o primeiro
        cy.get("[name='radioGroup1']").first().check().should("be.checked")

        //Valida o terceiro checkado
        cy.get("[name='radioGroup1']").check("Radio 3").should("be.checked")
        //Valida o último não checkado
        cy.get("[name='radioGroup1']").last().should("not.be.checked")

        //Valida que são 4 radios
        cy.get("[name='radioGroup1']").should("have.length", 4)

    })

    it("Validação check box", () => {

        cy.get("[name='chkbox']").should("have.length",4)

        cy.get("[name='chkbox']")
            .check("Check 2")
            .should("be.checked")
            .uncheck("Check 2")
            .should("not.be.checked")
        
        cy.get("[name='chkbox']").check( {multiple:true} )
        cy.get("[name='chkbox']").first().should("be.checked")
        cy.get("[name='chkbox']").uncheck()
        cy.get("[name='chkbox']").should("not.be.checked")
    })

    it("Valida seleção em um select", () => {

        cy.get("[name='dropdownlist']")
            .select("Item 2")
            .should("have.value", "item2")
        
        cy.get("[name='dropdownlist'] option")
            .first()
            .should("have.value", "item1")
        
        cy.get("[name='dropdownlist'] option").should("have.length", 10)

        //TO DO varrer o componente validando os 10 existentes

    })

    it("Valida seleção multipla em select", () => {

        cy.get("[name='multiselectdropdown']")
            .select(["Item 1", "Item 4", "Item 6"])
        //TO DO Identificar que são esses os valores selecionados    
    })

    it("")
})