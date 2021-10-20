import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Cards() {
  const [customer, setCustomer] = useState([]);
  const id = "1";

  useEffect(() => {
    getCustomer();
  }, []);

  const getCustomer = () => {
    axios
      .get(
        `https://nixyshi4ub.execute-api.eu-west-1.amazonaws.com/dev/customersTable/${id}`
      )
      .then(function (response) {
        console.log(response);
        setCustomer(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {});
  };

  return (
    <div>
      <h1>Hello, {customer.firstName}</h1>
    </div>
  );
}
