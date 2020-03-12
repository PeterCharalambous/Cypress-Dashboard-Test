describe('Nav site', () => {
    it('Should nav to home', () => {
        cy.visit('/');
        cy.get('h1').contains('Homepage');
    })

    it('Should nav to about', () => {
        cy.get('a').contains('About').click();
        cy.get('h1').contains('About');
    })

    it('Should nav to contact', () => {
        cy.get('a').contains('Contact').click();
        cy.get('h1').contains('Contact');
    })

    // it('Should fail on purpose', () => {
    it('Should pass', () => {
        cy.get('a').contains('Home').click();
        // cy.get('h1').contains('Fail');
        cy.get('h1').contains('Homepage');
    })
})