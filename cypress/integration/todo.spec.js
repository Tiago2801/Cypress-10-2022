/// <reference types="cypress"/>

describe("Testes with Todo List", () => {

    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo")
    })

    it("Inserir novas tarefas", () => {
        const newTask = "Escrito agora"

        cy.get("ul[class='todo-list'] li").should("have.length", 2)

        cy.get('h1').should("to.be","todos")
        //cy.get(data-test="new-todo"]').type(`${newTask}{enter}`)
        cy.xpath('//input[@class="new-todo"]').type(`${newTask}{enter}`)

        cy.get("ul[class='todo-list'] li").should("have.length", 3)

        cy.get("ul[class='todo-list'] li").last().should("have.text", "Escrito agora")
        
    })

    describe("Tests with todo new task created", () => {
        const newTask = "Escrito agora"

        beforeEach(() => {
            cy.get('[data-test="new-todo"]').type(`${newTask}{enter}`)
        })

        it("Should task check", () => {
            //cy.get(".todo-list li")
            //.last()
            //.find("input")
            //.check()
            //.should("be.checked")

            cy.get(".todo-list").contains(`${newTask}`)
                .parent()
                .find("input")
                .check()
                .should("be.checked")

        })

        it("Should validate complete task filter", () => {
            //check na nova tarefa
            cy.get(".todo-list").contains(`${newTask}`)
            .parent()
            .find("input")
            .check()

            //clica no filtro Completed    
            cy.get('.filters').contains("Completed").click()
            
            //Validações tamanho e titem da lista
            cy.get("ul[class='todo-list'] li").should("have.length", 1)
            cy.get("ul[class='todo-list'] li").should("have.text", "Escrito agora")

        })

        it("Should delete new task", () => {

            cy.get(".todo-list").contains(`${newTask}`)
            .parent()
            .find("input")
            .check()

            cy.get(".todo-list").contains(`${newTask}`)
            .parent()
            .find("button")
            .click({force:true})

            //Validações tamanho e titem da lista
            cy.get("ul[class='todo-list'] li").should("have.length", 2)
            cy.get("ul[class='todo-list'] li").should("not.have.text", `${newTask}`)
 
        })


    })

})