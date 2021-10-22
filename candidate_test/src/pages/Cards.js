import axios from "axios";
import React, { useEffect, useState } from "react";
import { CreditCard } from "../CreditCard";
import Header from "../Header";

// TODO: make this into a working component instead of a function
export default function Cards() {
  const [customer, setCustomer] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const id = "1";

  // const calculateTotalAvailableCredit = (cardList) => {
  //   const totalAvailableCredit = 0;
  //   for (let card in cardList) {
  //     totalAvailableCredit += card.availableCredit;
  //   }
  //   return totalAvailableCredit;
  // };

  const clickForDetails = (cardName) => {
    setOpenCards([...openCards, cardName]);
    if (showDetails && openCards.includes(cardName)) {
      const filteredCards = [
        ...new Set(openCards.filter((item) => item !== cardName)),
      ];
      setOpenCards(filteredCards);
      setShowDetails(filteredCards.includes(cardName) ? false : true);
      return;
    }
    if (openCards.includes(cardName)) {
      setShowDetails(true);
      return;
    }
  };
  console.log(openCards);

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
    const boujeeCard = new CreditCard("Boujee Card", 33.9, 12, 6, 40000);
    // show them this

    const cardList = [anywhereCard, boujeeCard];

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
      <Header />
      <h2 className="smallHeader">Cards Available to You</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredCardList.map((card) => (
          <div
            onClick={() => clickForDetails(card.name)}
            key={card.name}
            className="CardDiv"
            data-testid="CardDiv"
            style={{
              height:
                showDetails && openCards.includes(card.name) ? "unset" : 75,
            }}
          >
            <h2>{card.name}</h2>
            {showDetails &&
              openCards.includes(card.name) && ( // add const checkifcontinsblahblah
                <div>
                  <p>Apr: {card.apr}</p>
                  <p>
                    Balance Transfer Offer Duration:{" "}
                    {card.balanceTransferOfferDuration}
                  </p>
                  <p>Purchase Offer Duration: {card.purchaseOfferDuration}</p>
                  <p>Credit Available: {card.availableCredit}</p>
                </div>
              )}
          </div>
        ))}
      </div>
      <h2 className="smallHeader">Total Available Credit</h2>
    </div>
  );
}
