import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

export function NewCustomer(props) {
  // TODO: this can probably be massively shortened since there's no need to reset the state of the form (unless more than one customer's data was to be entered)
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState(0);
  const [monthOfBirth, setMonthOfBirth] = useState(0);
  const [yearOfBirth, setYearOfBirth] = useState(0);
  const [employmentStatus, setEmploymentStatus] = useState("");
  const [annualIncome, setAnnualIncome] = useState(0);
  const [houseNumber, setHouseNumber] = useState(0);
  const [postcode, setPostCode] = useState("");

  const history = useHistory();

  const handleChange = (event, field) => {
    console.log(event.target.value);
    if (field === "title") {
      setTitle(event.target.value);
    }
    if (field === "firstName") {
      setFirstName(event.target.value);
    }
    if (field === "lastName") {
      setLastName(event.target.value);
    }
    if (field === "dayOfBirth") {
      setDayOfBirth(event.target.value);
    }
    if (field === "monthOfBirth") {
      setMonthOfBirth(event.target.value);
    }
    if (field === "yearOfBirth") {
      setYearOfBirth(event.target.value);
    }
    if (field === "employmentStatus") {
      setEmploymentStatus(event.target.value);
    }
    if (field === "annualIncome") {
      setAnnualIncome(event.target.value);
    }
    if (field === "houseNumber") {
      setHouseNumber(event.target.value);
    }
    if (field === "postcode") {
      setPostCode(event.target.value);
    }
  };

  const routeChange = () => {
    let path = `/Cards`;
    history.push(path);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `https://nixyshi4ub.execute-api.eu-west-1.amazonaws.com/dev/customersTable`,
        {
          id: "1",
          title: title,
          firstName: firstName,
          lastName: lastName,
          dayOfBirth: dayOfBirth.toString(),
          monthOfBirth: monthOfBirth.toString(),
          yearOfBirth: yearOfBirth.toString(),
          employmentStatus: employmentStatus,
          annualIncome: annualIncome.toString(),
          houseNumber: houseNumber.toString(),
          postcode: postcode,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    routeChange();
  };

  return (
    <div className="App">
      <Header />
      <form>
        <h3>Name</h3>
        <label>
          Title
          <select
            data-testid="titleSelect"
            name="title"
            onChange={(event) => handleChange(event, "title")}
          >
            <option value="Select Title" data-testid="selectTitle">
              Select Title
            </option>
            <option value="Mr" data-testid="Mr">
              Mr
            </option>
            <option value="Mrs" data-testid="Mrs">
              Mrs
            </option>
            <option value="Miss" data-testid="Miss">
              Miss
            </option>
            <option value="Ms" data-testid="Ms">
              Ms
            </option>
            <option value="Dr" data-testid="Dr">
              Dr
            </option>
            <option value="Rev" data-testid="Rev">
              Rev
            </option>
          </select>
        </label>
        <br />

        <input
          type="text"
          name="firstName"
          data-testid="firstName"
          placeholder="First Name"
          onChange={(event) => handleChange(event, "firstName")}
        ></input>
        <br />

        <input
          type="text"
          name="lastName"
          data-testid="lastName"
          placeholder="Last Name"
          onChange={(event) => handleChange(event, "lastName")}
        ></input>
        <br />

        <h3>Date of Birth</h3>
        <input
          type="text"
          name="dayOfBirth"
          data-testid="dayOfBirth"
          placeholder="DD"
          onChange={(event) => handleChange(event, "dayOfBirth")}
        ></input>

        <input
          type="text"
          name="monthOfBirth"
          data-testid="monthOfBirth"
          placeholder="MM"
          onChange={(event) => handleChange(event, "monthOfBirth")}
        ></input>

        <input
          type="text"
          name="yearOfBirth"
          data-testid="yearOfBirth"
          placeholder="YYYY"
          onChange={(event) => handleChange(event, "yearOfBirth")}
        ></input>
        <br />
        {/* TODO: it's cool when DOB forms select the next text area for you */}

        <h3>Finances</h3>
        <label>
          Employment Status
          <select
            data-testid="employmentStatus"
            name="employmentStatus"
            onChange={(event) => handleChange(event, "employmentStatus")}
          >
            <option
              value="selectEmploymentStatus"
              data-testid="selectEmploymentStatus"
            >
              Select Employment Status
            </option>
            <option value="fullTime" data-testid="fullTime">
              Full Time
            </option>
            <option value="partTime" data-testid="partTime">
              Part Time
            </option>
            <option value="student" data-testid="student">
              Student
            </option>
            {/*TODO: This should be open for extension (O)*/}
          </select>
        </label>
        <br />

        <input
          type="text"
          name="annualIncome"
          data-testid="annualIncome"
          placeholder="Annual Income"
          onChange={(event) => handleChange(event, "annualIncome")}
        ></input>
        <br />

        <h3>Address</h3>
        <input
          type="text"
          name="houseNumber"
          data-testid="houseNumber"
          placeholder="House Number"
          onChange={(event) => handleChange(event, "houseNumber")}
        ></input>
        <br />

        <input
          type="text"
          name="postcode"
          data-testid="postcode"
          placeholder="Postcode"
          onChange={(event) => handleChange(event, "postcode")}
        ></input>
        <br />

        <button
          type="submit"
          onClick={handleSubmit}
          name="submit"
          value="submit"
        >
          Submit
        </button>
      </form>
      {/* <Footer /> */}
    </div>
  );
}

export default NewCustomer;
