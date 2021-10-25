// TODO: Work out how I can actually use Cypress to my advantage here??

describe("Testing the customer examples", () => {
  it("Returns Anywhere Card and Liquid Card when Ollie Murphree's details are submitted", () => {
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
    cy.get('[data-testid="postcode"]').type("BS14 9PR");

    // press continue
    cy.get('[data-testid="submit"]').click();

    // Check that correct cards are present on cards page
    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");

    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Liquid Card");
  });

  it("Returns Anywhere Card, Liquid Card and Student Card when Elizabeth Edmundson's details are submitted", () => {
    // cypress code goes here e.g.
    cy.visit("http://localhost:3000");

    cy.reload();
    // Name section
    // test the drop down
    cy.get('[data-testid="titleSelect"]').select("Miss");
    cy.get('[data-testid="firstName"]') // specify what part of the page is being manipulated
      .type("Elizabeth");
    cy.get('[data-testid="lastName"]').type("Edmundson");

    // Date of birth
    cy.get('[data-testid="dayOfBirth"]').type("29"); // check if this should be a string or number
    cy.get('[data-testid="monthOfBirth"]').type("06");
    cy.get('[data-testid="yearOfBirth"]').type("1984");

    // Employment
    cy.get('[data-testid="employmentStatusSelect"]').select("student");
    cy.get('[data-testid="annualIncome"]').type("17000");

    // Address
    cy.get('[data-testid="houseNumber"]').type("177");
    cy.get('[data-testid="postcode"]').type("PH12 8UW");

    // press continue
    cy.get('[data-testid="submit"]').click();

    // Check that correct cards are present on cards page
    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Student Life");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Liquid Card");
  });

  it("Returns Anywhere Card when Trevor Rieck's details are submitted", () => {
    // cypress code goes here e.g.
    cy.visit("http://localhost:3000");

    cy.reload();
    // Name section
    // test the drop down
    cy.get('[data-testid="titleSelect"]').select("Mr");
    cy.get('[data-testid="firstName"]') // specify what part of the page is being manipulated
      .type("Trevor");
    cy.get('[data-testid="lastName"]').type("Rieck");

    // Date of birth
    cy.get('[data-testid="dayOfBirth"]').type("07"); // check if this should be a string or number
    cy.get('[data-testid="monthOfBirth"]').type("09");
    cy.get('[data-testid="yearOfBirth"]').type("1990");

    // Employment
    cy.get('[data-testid="employmentStatusSelect"]').select("partTime");
    cy.get('[data-testid="annualIncome"]').type("15000");

    // Address
    cy.get('[data-testid="houseNumber"]').type("343");
    cy.get('[data-testid="postcode"]').type("TS25 2NF");

    // press continue
    cy.get('[data-testid="submit"]').click();

    // Check that correct cards are present on cards page
    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
  });
});
