import React from "react";

class SignupForm extends React.Component {
  // controlled component
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Name</p>
        <label>
          Title
          <select data-testid="titleSelect">
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
        ></input>
        <br />

        <input
          type="text"
          name="lastName"
          data-testid="lastName"
          placeholder="Last Name"
        ></input>
        <br />
      </form>
    );
  }
}

export default SignupForm;
