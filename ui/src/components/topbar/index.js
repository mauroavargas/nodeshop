/* eslint no-unused-vars: off */
import React from 'react';
import { connect } from '../../store';
import Logo from './logo';
import Search from './search';
import User from './user';
import NotLogged from './not-logged';

class Topbar extends React.Component {
  render() {
    return (
      <header className="topbar">
        <Search />
        <Logo />
        {
          this.props.auth.logged ? <User /> : <NotLogged />
        }
      </header>
    );
  }
}

export default connect(({ auth }) => ({ auth }))(Topbar);
