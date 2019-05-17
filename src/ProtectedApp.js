/**
 * Created by chamathbogahawatta on 14/04/2019.
 */
import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./pages/login/login";
import AdminHome from "./pages/admin/home/home";
import Home from "./pages/user/home";
import CreateClient from "./pages/admin/client/CreateClient";
import CreateVendor from "./pages/admin/vendor/CreateVendor";
import CreateRegulatory from "./pages/admin/regulatory/CreateRegulatory";

export default class ProtectedApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };

    // dummy login process just to determine the logged in user role as 'user' or 'admin'
    if (sessionStorage.getItem("role") !== null) {
      if (sessionStorage.getItem("role").includes("user")) {
        this.state.isLoggedIn = true;
      } else if (sessionStorage.getItem("role").includes("admin")) {
        this.state.isLoggedIn = true;
      }
    }

  }

  render() {
    return (
      <div>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            path="/home"
            component={this.state.isLoggedIn ? Home : Login}
          />
          <Redirect exact from="/admin" to="/admin/home" />
          <Route
            path="/admin/home"
            component={this.state.isLoggedIn ? AdminHome : Login}
          />
          <Route
            path="/admin/manage/add-client"
            component={this.state.isLoggedIn ? CreateClient : Login } />
          <Route
            path="/admin/manage/add-vendor"
            component={this.state.isLoggedIn ? CreateVendor : Login } />
          <Route
            path="/admin/manage/add-regulatory"
            component={this.state.isLoggedIn ? CreateRegulatory : Login } />
          <Route
            path="/login"
            component={Login} />
        </Switch>
      </div>
    );
  }
}