describe("Candidate test", () => {
    it("Displays the signup form and stores user data", () {
        // cypress code goes here e.g. 
        cy.visit('http//localhost:3000');

        // test the drop down
        
        // first name
        cy.get('[data-testid="firstName"]')
        .type('Ollie');

        // last name
        cy.get('[data-testid="lastName"]')
        .type('Murphree')

        // continue for rest of form
    });
});