/// <reference types="cypress" />


describe('User journey on the web site', ()=>{

    it("The user clicks on site logo", ()=>{
        cy.visit('https://uat56.pharmoutcomes.org/pharmoutcomes/')
        cy.get("a[title='PharmOutcomes - Delivering Evidence']")
            .click()
            .wait(2000)
    })

    it("The user clicks on gallery link", ()=>{
        cy.visit('https://uat56.pharmoutcomes.org/pharmoutcomes/')
        cy.get("a[title='About the PharmOutcomes Platform and Us']")
            .click()
            .wait(4000)
    })


})

