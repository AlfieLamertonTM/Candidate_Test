export class Customer {
  constructor(
    id,
    title,
    firstName,
    lastName,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    employmentStatus,
    annualIncome,
    houseNumber,
    postcode
  ) {
    this.id = id;
    this.title = title;
    this.firstName = firstName;
    this.lastName = lastName;
    this.dayOfBirth = dayOfBirth;
    this.monthOfBirth = monthOfBirth;
    this.yearOfBirth = yearOfBirth;
    this.employmentStatus = employmentStatus;
    this.annualIncome = annualIncome;
    this.houseNumber = houseNumber;
    this.postcode = postcode;
  }
}
