import React from "react";
import {BrowserRouter as Router , Switch , Route} from "react-router-dom";

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ForgetPasswordPage from './components/ForgetPasswordPage';
import HomePage from './components/HomePage';

const App = () =>  {
  return (
    <Router>
      <Switch>
        <Route  path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/forget-password" component={ForgetPasswordPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}
export default App;
