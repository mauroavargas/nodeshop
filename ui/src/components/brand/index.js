/* eslint no-unused-vars: off */
import React from 'react';
import Logo from './logo';
import Search from './search';
import User from './user';
import NotLogged from './not-logged';

export default class extends React.Component {
  render() {
    return (
      <header className="brand">
        <Search />
        <Logo />
        {
          this.props.logged ? <User /> : <NotLogged />
        }
      </header>
    );
  }
}
