import axios from "axios";
import React, { useEffect, useState } from "react";
import { CreditCard } from "../CreditCard";

export default function Cards() {
  const [customer, setCustomer] = useState([]);
  const id = "1";
  // const parsedCustomer = JSON.parse(customer); // STOPS RENDERING WITH THIS

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

  const filterCards = (customer) => {
    const anywhereCard = new CreditCard("Anywhere Card", 18.9, 0, 6, 1200);
    const studentLifeCard = new CreditCard("Student Life", 33.9, 0, 0, 300);
    const liquidCard = new CreditCard("Liquid Card", 33.9, 12, 6, 3000);
    const cardList = [anywhereCard];

    if (customer.employmentStatus === "student") {
      cardList.push(studentLifeCard);
    }
    if (customer.annualIncome > 16000) {
      cardList.push(liquidCard);
    }
    return cardList;
  };

  const filteredCardList = filterCards(customer);

  return (
    <div className="App">
      {filteredCardList.map((card) => (
        <div className="card">
          <p>{card.name}</p>
          <p>{card.apr}</p>
          <p>{card.balanceTransferOfferDuration}</p>
          <p>{card.purchaseOfferDuration}</p>
          <p>{card.availableCredit}</p>
        </div>
      ))}
    </div>
  );
}
