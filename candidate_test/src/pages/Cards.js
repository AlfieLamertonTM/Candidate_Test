import axios from "axios";
import React, { useEffect, useState } from "react";
import { CreditCard } from "../CreditCard";
import Header from "../Header";

export default function Cards() {
  const [customer, setCustomer] = useState([]);
  const [showDetails, setShowDetails] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const id = "1";
  let totalAvailableCredit = 0;

  const showCardDetails = (cardName) => {
    setOpenCards([...openCards, cardName]);
    if (showDetails && openCards.includes(cardName)) {
      const filteredCards = [
        ...new Set(openCards.filter((item) => item !== cardName)), // This is buggy, https://stackoverflow.com/questions/58106099/react-onclick-not-firing-on-first-click-second-click-behaves-as-expected-simpl
      ];
      setOpenCards(filteredCards);
      setShowDetails(filteredCards.includes(cardName) ? false : true);
      updateTotalAvailableCredit(openCards);
    }
    if (openCards.includes(cardName)) {
      setShowDetails(true);
      updateTotalAvailableCredit(openCards, filteredCardList);
    }
    return openCards;
  };

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
    // const boujeeCard = new CreditCard("Boujee Card", 33.9, 12, 6, 40000);
    // show them this

    const cardList = [anywhereCard];

    if (customer.employmentStatus === "student") {
      cardList.push(studentLifeCard);
    }
    if (customer.annualIncome > 16000) {
      cardList.push(liquidCard);
    }
    return cardList;
  };

  const updateTotalAvailableCredit = (cardNameList) => {
    for (let i in cardNameList) {
      for (let j in filteredCardList) {
        if (cardNameList[i] === filteredCardList[j].name) {
          totalAvailableCredit += filteredCardList[j].availableCredit;
        }
      }
    }
    return totalAvailableCredit;
  };

  const filteredCardList = filterCards(customer);
  totalAvailableCredit = updateTotalAvailableCredit(openCards);

  console.log(openCards);

  return (
    <div className="App">
      <Header />
      <h2 className="smallHeader">Cards Available to You</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredCardList.map((card) => (
          <div
            onClick={() => showCardDetails(card.name)}
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
              openCards.includes(card.name) && ( // add const checkifcontainscardname
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
      <p>{totalAvailableCredit}</p>
    </div>
  );
}
