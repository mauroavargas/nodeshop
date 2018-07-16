/* eslint no-unused-vars: off */
import React, { Component } from 'react';
import { actions } from '../store';
import * as Auth from '../services/auth';
import Brand from '../components/brand';
import TopBar from '../components/topbar';

export default class extends Component {
  componentWillMount() {
    if (Auth.isLogged()) {
      actions.aboutMe();
    }
  }

  componentWillUpdate() {
    if (Auth.isLogged()) {
      actions.aboutMe();
    }
  }

  render() {
    return (
      <main className="layout">
        <Brand />
        <TopBar key="br4nd" />
        { this.props.children }
      </main>
    );
  }
}
