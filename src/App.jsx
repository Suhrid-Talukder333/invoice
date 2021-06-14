import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import InvoicePage from "./pages/Invoice/InvoicePage";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/invoice">
        <InvoicePage />
      </Route>
    </Switch>
  );
};

export default App;
