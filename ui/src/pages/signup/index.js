/* eslint no-unused-vars: off */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/card';
import { InputSimple, InputComposed } from '../../components/input';
import Icon from '../../components/icon';

export default class extends React.Component {
  render() {
    return (
      <div className="signup page">
        <Card level={1}>
          <form className="form">
            <h3>Sign up</h3>
            <hr className="separator"/>
            <article className="form-body">
              <InputComposed
                type="text"
                placeholder="First name"
                icon={<Icon name="person_outline"/>}
              />
              <InputComposed
                type="text"
                placeholder="Last name"
                icon={<Icon name="sentiment_satisfied_alt"/>}
              />
              <InputComposed
                type="email"
                placeholder="Email"
                icon={<Icon name="alternate_email" />}
              />
              <InputComposed
                type="password"
                placeholder="Password"
                icon={<Icon name="lock_outline" />}
              />
            </article>
            <footer className="form-footer">
              <button className="button button--success">Sign up</button>
            </footer>
          </form>
        </Card>
      </div>
    );
  }
}

/*
<section className="row">
  <InputSimple placeholder="First name" />
  <InputSimple placeholder="Last name" />
</section>
<section className="row">
  <InputSimple placeholder="Email" />
  <InputSimple placeholder="Password" />
</section>
*/
