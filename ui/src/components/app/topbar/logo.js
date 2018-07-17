/* eslint no-unused-vars: off */
import React from 'react';
import { NavLink } from 'react-router-dom';

export default class extends React.Component {
  render() {
    return (
      <NavLink to="/" className="logo">
        <img
          className="image small"
          src={`${process.env.PUBLIC_URL}/images/mongodb.png`} alt="company logo"
        />
      </NavLink>
    );
  }
}
