/// <reference types="cypress"/>

it("Numbers", () => {

    const val1 = 5

    expect(val1).equal(5)
    expect(val1, "Deveria ser 5").equal(5)
    expect(val1).to.be.equal(5)
    expect(val1).not.to.be.equal(10)
})

it("Work with Strings", () => {
    const name = "Curso de Cypress"

    expect(name).to.be.equal("Curso de Cypress")
    expect(name).to.be.have.length(16)
    expect(name).contains("Cypress")

    expect(name).to.match(/^Curso/)
    expect(name).to.match(/Cypress$/)
    expect(name).to.match(/\D{16}/)

})

it("Numbers float", () => {
    const number1 = 5.45615467864

    expect(number1).to.be.equal(5.45615467864)
    //Valida acima de
    expect(number1).to.be.above(5.3)
    //Valida abaixo de
    expect(number1).to.be.below(5.5)
    //Valida com margem de erro de
    expect(number1).to.be.closeTo(5.4, 0.1)

})

it("List values", () => {
    const values = ["Teclado", "Mouse", "Fone"]
    //valida os valores da lista
    expect(values).to.include.members(["Teclado", "Mouse"])
})

it("Compare Objects", () => {
    const obj1 = [1, 2, 3]
    const obj2 = [1, 2, 3]

    //Compara o conteúdo de dois objetos
    expect(obj1).to.be.deep.equal(obj2)
})
