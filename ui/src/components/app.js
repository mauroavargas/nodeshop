/* eslint no-unused-vars: off */
import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import FadeTransition from '../transitions/fade';
import Layout from '../layout';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
import NotFound from '../pages/not-found';

class App extends Component {
  render() {
    return (
      <Route render={({ location }) => (
        <Layout>
          <TransitionGroup
            key={uuid.v4()}
            component="article"
            className="content"
          >
            <FadeTransition>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route paeh="/signup" component={Signup} />
                <Route component={NotFound} />
              </Switch>
            </FadeTransition>
          </TransitionGroup>
        </Layout>
      )}
      />
    );
  }
}

export default withRouter(App);
