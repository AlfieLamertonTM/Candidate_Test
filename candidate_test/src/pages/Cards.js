import axios from "axios";
import React, { useEffect, useState } from "react";
import { CreditCard } from "../CreditCard";
import Footer from "../Footer";
import Header from "../Header";

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

    if (customer.employmentStatus == "student") {
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
      <Header />
      <h2 className="smallHeader">Cards Available to You</h2>
      {filteredCardList.map((card) => (
        <div className="CardDiv" data-testid="CardDiv">
          <h2>{card.name}</h2>
          <p>Apr: {card.apr}</p>
          <p>
            Balance Transfer Offer Duration: {card.balanceTransferOfferDuration}
          </p>
          <p>Purchase Offer Duration: {card.purchaseOfferDuration}</p>
          <p>Credit Available: {card.availableCredit}</p>
        </div>
      ))}
    </div>
  );
}
