/* eslint no-unused-vars: off */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <div>
        <NavLink to="/login" style={{ color: '#fff' }}>log in</NavLink>
        <span className="text text--white" style={{ margin: '0 5px' }}>or</span>
        <NavLink to="/signup" style={{ color: '#fff' }}>sign up</NavLink>
      </div>
    );
  }
}
