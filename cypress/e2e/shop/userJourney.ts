/// <reference types="cypress" />

let url:string = 'https://maximum.md/ro/Apple/'

describe('User journey on the web site', ()=>{


    beforeEach('open homepage', ()=> {
        cy.openHomePage()
    })

    // after('Test end', ()=>{
    //     cy.end()
    // })

    it("The user changes the language on russian", ()=>{
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
            .wait(300)
            .click()
            .wait(300)
            .click()
            .wait(300)
            .click()
            .wait(300)
    })

    it("The user search a product in the search bar", ()=>{
        cy.get("input[title='Căutare']")
            .click()
            .type("Samsung")
        cy.get("button[title='Introduceți codul sau modelul produsului']")
            .click()
    })

    it.only("The user search for the product in the category nav bar", ()=>{
        cy.get("span").contains(" Toate produsele ").trigger("mouseover")
        cy.get("span").contains(" Apple ")
            .click({force:true})
            .wait(1000)
            //.trigger("mouseover", {force:true})

            //cy.get("img[alt='Apple']").eq(2)
            // .trigger('mouseover', {force:true})
            // .click({force:true})

            // .realHover('mouse')
            // .trigger("mouseright", { which: 1, pageX: 600, pageY: 600 ,force:true })
            // .invoke('show')
            // .click({force:true})
            // .url().should('include','https://maximum.md/ro/Apple/')

        // cy.get("span").contains(" Apple ")
        // cy.get("span").contains(" Apple ").realHover('mouse')
        //cy.get("span").contains(" Apple ").realClick({force:true})

        // cy.get("a").contains(" Smartphone Apple iPhone ").trigger("mouseover",{force:true})
        // cy.get("a[data-id='40188']").contains(" Smartphone Apple iPhone ").click({force:true})

        cy.url().should('eq', url)
    })




})

