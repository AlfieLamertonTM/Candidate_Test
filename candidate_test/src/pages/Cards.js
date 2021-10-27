import axios from "axios";
import React, { useEffect, useState } from "react";
import { CreditCard } from "../CreditCard";
import Header from "../Header";
import Footer from "../Footer";

export default function Cards() {
  const [customer, setCustomer] = useState([]);
  // const [showDetails, setShowDetails] = useState(false);
  const [openCards, setOpenCards] = useState([]);
  const id = "1";
  let totalAvailableCredit = 0;

  const showCardDetails = (cardName) => {
    if (openCards.includes(cardName)) {
      setOpenCards([...openCards.filter((item) => item !== cardName)]);
    } else {
      setOpenCards([...openCards, cardName]);
    }
    updateTotalAvailableCredit(openCards);
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
    const bigStacksCard = new CreditCard(
      "Big Stacks Card",
      33.9,
      12,
      6,
      100000
    ); // This line is an example of extensible logic

    const cardList = [anywhereCard];

    if (customer.employmentStatus === "student") {
      cardList.push(studentLifeCard);
    }
    if (customer.annualIncome > 16000) {
      cardList.push(liquidCard);
    }
    // This block is an example of extensible logic, too
    if (customer.annualIncome > 100000) {
      cardList.push(bigStacksCard);
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
    <div className="Cards">
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
              height: openCards.includes(card.name) ? "unset" : 100,
            }}
          >
            <h2>{card.name}</h2>
            <p>Click to show more details</p>
            {openCards.includes(card.name) && (
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
      <Footer />
    </div>
  );
}
