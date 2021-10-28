// TODO: Work out how I can actually use Cypress to my advantage here??

describe("Testing the customer examples", () => {
  it("Returns Anywhere Card and Liquid Card when Ollie Murphree's details are submitted", () => {
    cy.visit("http://localhost:3000");
    cy.reload();

    cy.get('[data-testid="titleSelect"]').select("Mr");
    cy.get('[data-testid="firstName"]').type("Ollie");
    cy.get('[data-testid="lastName"]').type("Murphree");

    cy.get('[data-testid="dayOfBirth"]').type("01");
    cy.get('[data-testid="monthOfBirth"]').type("07");
    cy.get('[data-testid="yearOfBirth"]').type("1970");

    cy.get('[data-testid="employmentStatusSelect"]').select("Full Time");
    cy.get('[data-testid="annualIncome"]').type("34000");

    cy.get('[data-testid="houseNumber"]').type("700");
    cy.get('[data-testid="postcode"]').type("BS14 9PR");

    cy.get('[data-testid="submit"]').click();

    cy.wait(500);
    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
    cy.wait(500);
    cy.get('[data-testid="CardDiv"]').get("h2").contains("Liquid Card");
    cy.get('[data-testid="CardDiv"]')
      .get("h2")
      .contains("Student Life")
      .should("not.exist");
  });

  it("Returns Anywhere Card, Liquid Card and Student Card when Elizabeth Edmundson's details are submitted", () => {
    cy.visit("http://localhost:3000");
    cy.reload();

    cy.get('[data-testid="titleSelect"]').select("Miss");
    cy.get('[data-testid="firstName"]').type("Elizabeth");
    cy.get('[data-testid="lastName"]').type("Edmundson");

    cy.get('[data-testid="dayOfBirth"]').type("29");
    cy.get('[data-testid="monthOfBirth"]').type("06");
    cy.get('[data-testid="yearOfBirth"]').type("1984");

    cy.get('[data-testid="employmentStatusSelect"]').select("Student");
    cy.get('[data-testid="annualIncome"]').type("17000");

    cy.get('[data-testid="houseNumber"]').type("177");
    cy.get('[data-testid="postcode"]').type("PH12 8UW");

    cy.get('[data-testid="submit"]').click();
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Student Life");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Liquid Card");
  });

  it("Returns Anywhere Card when Trevor Rieck's details are submitted", () => {
    cy.visit("http://localhost:3000");
    cy.reload();

    cy.get('[data-testid="titleSelect"]').select("Mr");
    cy.get('[data-testid="firstName"]').type("Trevor");
    cy.get('[data-testid="lastName"]').type("Rieck");

    cy.get('[data-testid="dayOfBirth"]').type("07");
    cy.get('[data-testid="monthOfBirth"]').type("09");
    cy.get('[data-testid="yearOfBirth"]').type("1990");

    cy.get('[data-testid="employmentStatusSelect"]').select("Part Time");
    cy.get('[data-testid="annualIncome"]').type("15000");

    cy.get('[data-testid="houseNumber"]').type("343");
    cy.get('[data-testid="postcode"]').type("TS25 2NF");

    cy.get('[data-testid="submit"]').click();
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
  });
});

describe("Testing a new card", () => {
  it("Returns Anywhere Card, Liquid Card, and Big Stacks Card when Alfie In5years' details are submitted", () => {
    cy.visit("http://localhost:3000");
    cy.reload();

    cy.get('[data-testid="titleSelect"]').select("Mr");
    cy.get('[data-testid="firstName"]').type("Alfie");
    cy.get('[data-testid="lastName"]').type("In5years");

    cy.get('[data-testid="dayOfBirth"]').type("14");
    cy.get('[data-testid="monthOfBirth"]').type("07");
    cy.get('[data-testid="yearOfBirth"]').type("2000");

    cy.get('[data-testid="employmentStatusSelect"]').select("Full Time");
    cy.get('[data-testid="annualIncome"]').type("100000");

    cy.get('[data-testid="houseNumber"]').type("343");
    cy.get('[data-testid="postcode"]').type("BS1 6UG");

    cy.get('[data-testid="submit"]').click();
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Liquid Card");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Big Stacks Card");
  });
});

describe("Testing a new employment status", () => {
  it("Stores a customer correctly when they select one of the new titles", () => {
    cy.visit("http://localhost:3000");
    cy.reload();

    cy.get('[data-testid="titleSelect"]').select("Mr");
    cy.get('[data-testid="firstName"]').type("Alfie");
    cy.get('[data-testid="lastName"]').type("In19years");

    cy.get('[data-testid="dayOfBirth"]').type("14");
    cy.get('[data-testid="monthOfBirth"]').type("07");
    cy.get('[data-testid="yearOfBirth"]').type("2000");

    cy.get('[data-testid="employmentStatusSelect"]').select("Retired");
    cy.get('[data-testid="annualIncome"]').type("200000");

    cy.get('[data-testid="houseNumber"]').type("343");
    cy.get('[data-testid="postcode"]').type("BS1 6UG");

    cy.get('[data-testid="submit"]').click();
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Anywhere Card");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Liquid Card");
    cy.wait(500);

    cy.get('[data-testid="CardDiv"]').get("h2").contains("Big Stacks Card");
  });
});
