
/// <reference types="cypress" />

let url:string = 'https://maximum.md/ro/Apple/'

describe('User journey on the web site', ()=>{


    beforeEach('open homepage', ()=> {
        cy.openHomePage()
    })

    it.only("The user changes the language on russian", ()=>{
        cy.get("a[title='Schimbă limba']")
            .click()
            .wait(2000)
    })

    it('The user click on the logo icon', ()=>{
        cy.get("img[title='Pagina principală']")
            .click()
    })

    it("The user clicks on the next arrow on the carousel", ()=>{
        cy.get("button[title='Next']")
            .click()
            .wait(300)
            .click()
            .wait(300)
            .click()
            // .wait(300)
            // .click()

    })

    it("The user search a product in the search bar", ()=>{
        cy.get("input[title='Căutare']")
            .click()
            .type("Samsung")
        cy.get("button[title='Introduceți codul sau modelul produsului']")
            .click()
    })

    it("The user search for the product in the category nav bar", ()=>{
        cy.get("span").contains(" Toate produsele ").trigger("mouseover")
        cy.get("span").contains(" Apple ")
            .click({force:true})

        cy.url().should('eq', url)
    })


})

