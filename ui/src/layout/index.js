/* eslint no-unused-vars: off */
import React, { Component } from 'react';
import Brand from '../components/brand';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false
    };
  }

  componentDidMount() {
    const sessionToken = localStorage.getItem('session-token');
    if (sessionToken) {
      // TODO make request to the API to get the user info
    }
  }

  render() {
    return (
      <main className="container">
        <Brand key="br4nd" logged={this.state.logged} />
        { this.props.children }
      </main>
    );
  }
}
