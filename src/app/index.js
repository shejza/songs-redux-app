import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./scenes/auth/scenes/login";
import Register from "./scenes/auth/scenes/register";
import Application from "./scenes/application";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/app/*" component={Application} />
        </Fragment>
      </Router>
    );
  }
}
