describe("Form unit tests", () => {
    it("stores user data correctly into an object", () => {
        // cypress code goes here e.g. 
        cy.visit('http//localhost:3000');

        // Name section
        // test the drop down
        cy.get('titleSelect')
        .select('Mr')
        cy.get('[data-testid="firstName"]') // specify what part of the page is being manipulated
        .type('Ollie');
        cy.get('[data-testid="lastName"]')
        .type('Murphree')

        // Date of birth
        cy.get('[data-testid="dobDay"]')
        .type('01')                         // check if this should be a string or number
        cy.get('[data-testid="dobMonth"]')
        .type('07')
        cy.get('[data-testid="dobYear"]')
        .type('1970')   
        
        // Employment
        cy.get('insertNameOfEmploymentStatusDropdownHere')
        .select('Full Time')
        cy.get('data-testid="annualIncome')
        .type('34000')

        // Address
        cy.get('[data-testid="houseNumber"]')
        .type('700')
        cy.get('[data-testid="postcode"]')
        .type('PH12 8UW') 

        // press continue
        cy.get('[data-testid="continue"')
        .click()

        // check name
        cy.get('insertNameOfCustomerObjectHere')
        .contains('Mr')
        cy.get('insertNameOfCustomerObjectHere')
        .contains('Ollie')
        cy.get('insertNameOfCustomerObjectHere')
        .contains('Murphree')
        // check dob
        cy.get('insertNameOfCustomerObjectHere')
        .contains('01')
        cy.get('insertNameOfCustomerObjectHere')
        .contains('07')
        cy.get('insertNameOfCustomerObjectHere')
        .contains('1970')
        // check employment status
        cy.get('insertNameOfCustomerObjectHere')
        .contains('Full Time')
        cy.get('insertNameOfCustomerObjectHere')
        .contains('34000')
        // check address
        cy.get('insertNameOfCustomerObjectHere')
        .contains('700')
        cy.get('insertNameOfCustomerObjectHere')
        .contains('PH12 8UW')

    });
});

