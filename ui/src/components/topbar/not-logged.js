/* eslint no-unused-vars: off */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/login">log in</NavLink> <span className="text">or</span> <NavLink to="/signup">sign up</NavLink>
      </div>
    );
  }
}
