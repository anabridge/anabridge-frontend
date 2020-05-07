import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import LandingPage from "./views/components/LandingPage/LandingPage";

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
