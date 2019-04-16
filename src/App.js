import React, { Suspense, lazy } from 'react';
import { Provider } from "react-redux"
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import withRoot from "./withRoot";

import store from './state/store';

import Progress from "./component/Progress";
import Login from "./component/login";

const ProtectedApp = lazy( () => import("./ProtectedApp"));


const styles = theme => ({
  root: {
  }
});



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  render() {
    const { classes } = this.props;
    const { user } = this.state;
    return (
      <Provider store={store}>
      <div className={classes.root}>
        <Suspense fallback={Progress}>
          <Router basename="/bridge">
            <Switch>
              {
                <Route
                  path="/login"
                  render={props => (
                    <Login {...props} updateUser={this.updateUser} />
                  )}
                />
              }
              <Route path="/logout" />
              {!user && <Redirect to={{ pathname: "/login" }} />}
              <Route render={() => <ProtectedApp user={user} />} />
            </Switch>
          </Router>
        </Suspense>
      </div>
      </Provider>
    );
  }
}

export default withRoot(withStyles(styles)(App));
