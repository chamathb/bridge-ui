/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./component/login";
import Home from "./component/home";

export default class ProtectedApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={this.state.isLoggedIn ? Home : Login} />
          <Route
            path="/login"
            component={Login} />
        </Switch>
      </div>
    );
  }
}