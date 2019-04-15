import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { history } from "../_helpers/history";
import ErrorBoundary from "../Errors/ErrorBoundary";
import PrivateRoute from "../Login/PrivateRoute";
import Home from "../Home/Home";
import Login from "../Login/Login";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log(history);
    return (
        <Router history={history}>
            <ErrorBoundary>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    {/*<PrivateRoute path="/" component={RestrictedArea} />*/}
                    <PrivateRoute path="/" component={Home} />
                </Switch>
            </ErrorBoundary>
        </Router>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(App);
