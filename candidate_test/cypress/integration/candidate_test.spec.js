// TODO: Work out how I can actually use Cypress to my advantage here??

describe("Form unit tests", () => {
  it("stores user data correctly into an object", () => {
    // cypress code goes here e.g.
    cy.visit("http://localhost:3000");

    // Name section
    // test the drop down
    cy.get('[data-testid="titleSelect"]').select("Mr");
    cy.get('[data-testid="firstName"]') // specify what part of the page is being manipulated
      .type("Ollie");
    cy.get('[data-testid="lastName"]').type("Murphree");

    // Date of birth
    cy.get('[data-testid="dayOfBirth"]').type("01"); // check if this should be a string or number
    cy.get('[data-testid="monthOfBirth"]').type("07");
    cy.get('[data-testid="yearOfBirth"]').type("1970");

    // Employment
    cy.get('[data-testid="employmentStatusSelect"]').select("fullTime");
    cy.get('[data-testid="annualIncome"]').type("34000");

    // Address
    cy.get('[data-testid="houseNumber"]').type("700");
    cy.get('[data-testid="postcode"]').type("PH12 8UW");

    // press continue
    cy.get('[data-testid="submit"]').click();

    // Check data... but how?
  });
});
