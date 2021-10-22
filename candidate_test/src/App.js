import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewCustomer from "./pages/NewCustomer";
import Cards from "./pages/Cards";
import "./App.css";

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
