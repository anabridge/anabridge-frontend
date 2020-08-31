import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginPage from './views/pages/LoginPage/LoginPage.js';
import SignupPage from './views/pages/SignupPage/SignupPage.js';
import CareerPage from './views/pages/CareerPage/CareerPage.js';

import 'assets/scss/material-kit-react.scss?v=1.8.0';

import LandingPage from './views/components/LandingPage/LandingPage';

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/sign-up" component={SignupPage} />
        <Route path="/sign-in" component={LoginPage} />
        <Route path="/apply" component={CareerPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </Router>
  );
}

export default App;
