import React from "react";
import { CreditCard } from "./CreditCard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCustomer from "./pages/NewCustomer";
import Cards from "./pages/Cards";

export const studentCard = new CreditCard("Student Card", 18.9, 0, 6, 1200);
export const anywhereCard = new CreditCard("Anywhere Card", 33.3, 0, 0, 300);
export const liquidCard = new CreditCard("Liquid Card", 33.9, 12, 6, 3000);

export default function app() {
  // TODO: see if this is still necessary
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <NewCustomer />
          </Route>
          <Route path="/Cards">
            <Cards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
