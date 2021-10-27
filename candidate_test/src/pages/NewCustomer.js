import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";

export default function NewCustomer() {
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
      <div className="colour-box">
        <div className="form-box">
          <form>
            <h3>Name</h3>
            <label>
              <select
                className="select"
                data-testid="titleSelect"
                name="titleSelect"
                onChange={(event) => handleChange(event, "title")}
              >
                <option value="Title">Title</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                <option value="Rev">Rev</option>
              </select>
            </label>

            <input
              type="text"
              name="firstName"
              data-testid="firstName"
              placeholder="First Name"
              onChange={(event) => handleChange(event, "firstName")}
            ></input>

            <input
              type="text"
              name="lastName"
              data-testid="lastName"
              placeholder="Last Name"
              onChange={(event) => handleChange(event, "lastName")}
            ></input>
            <br />

            <h3>Date of Birth</h3>
            <div className="tableDiv">
              <div className="tableCellDiv">
                <input
                  className="dayOfBirth"
                  type="text"
                  name="dayOfBirth"
                  data-testid="dayOfBirth"
                  placeholder="DD"
                  onChange={(event) => handleChange(event, "dayOfBirth")}
                ></input>
              </div>

              <div className="tableCellDiv">
                <input
                  className="monthOfBirth"
                  type="text"
                  name="monthOfBirth"
                  data-testid="monthOfBirth"
                  placeholder="MM"
                  onChange={(event) => handleChange(event, "monthOfBirth")}
                ></input>
              </div>

              <div className="tableCellDiv">
                <input
                  className="yearOfBirth"
                  type="text"
                  name="yearOfBirth"
                  data-testid="yearOfBirth"
                  placeholder="YYYY"
                  onChange={(event) => handleChange(event, "yearOfBirth")}
                ></input>
              </div>
            </div>
            <br />
            {/* TODO: it's cool when DOB forms select the next text area for you */}

            <h3>Finances</h3>
            <label>
              <select
                className="select"
                data-testid="employmentStatusSelect"
                name="employmentStatusSelect"
                onChange={(event) => handleChange(event, "employmentStatus")}
              >
                <option
                  value="selectEmploymentStatus"
                  data-testid="selectEmploymentStatus"
                >
                  Employment Status
                </option>
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="student">Student</option>
                {/* The lines below exist to demonstrate extensibility */}
                {/* <option value="retired">Retired</option> */}
                {/* <option value="homemaker">Homemaker</option> */}
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
              onChange={(event) => {
                handleChange(event, "houseNumber");
              }}
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
              className="submit"
              type="submit"
              name="submit"
              value="submit"
              data-testid="submit"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
