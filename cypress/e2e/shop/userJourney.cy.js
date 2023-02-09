/// <reference types="cypress" />


describe('User journey on the web site', ()=>{

    beforeEach('open homepage', ()=> {
        cy.openHomePage()
    })

    it("The user search a product in the search bar", ()=>{
        cy.get("input[title='Căutare']")
            .click()
            .type("Samsung")
        cy.get("button[title='Introduceți codul sau modelul produsului']")
            .click()
    })

    it('The user click on the logo icon', ()=>{
        cy.get("img[title='Pagina principală']")
            .click()
    })


    it.only("The user search for the product in the category nav bar", ()=>{
        cy.get("span").contains(" Toate produsele ").trigger("mouseover")
        cy.get("span").contains(" Apple ")
            .click({force:true})
            //.trigger("mouseover", {force:true})

            //cy.get("img[alt='Apple']").eq(2)
            // .trigger('mouseover', {force:true})
            // .click({force:true})

            // .realHover('mouse')
            // .trigger("mouseright", { which: 1, pageX: 600, pageY: 600 ,force:true })
            // .invoke('show')
            // .click({force:true})
            // .url().should('include','https://maximum.md/ro/Apple/')
            .wait(1000)


        cy.get("span").contains(" Apple ")

        // cy.get("span").contains(" Apple ").realHover('mouse')
        //cy.get("span").contains(" Apple ").realClick({force:true})


        // cy.get("a").contains(" Smartphone Apple iPhone ").trigger("mouseover",{force:true})
        // cy.get("a[data-id='40188']").contains(" Smartphone Apple iPhone ").click({force:true})

        // cy.get("span").contains(" Apple ").click({force:true})
        // cy.get("img[alt='Apple']").trigger("mouseover")
        // cy.get("a[data-id='40184']").eq(1).trigger("mouseover", {force:true})
        //cy.get("a").contains(" Smartphone Apple iPhone ").trigger("mouseover")
    })

})

