/* eslint no-unused-vars: off */
import React from 'react';
import { NavLink } from 'react-router-dom';
import Card from '../../components/card';
import { InputSimple, InputComposed } from '../../components/input';
import Icon from '../../components/icon';
import Image from '../../components/image';

export default class extends React.Component {
  render() {
    return (
      <div className="login page">
        <Card level={1}>
          <form className="form">
            <h3>Login</h3>
            <hr className="separator"/>
            <div className="container container--center-hoz image-container">
              <Image
                source="https://bestcheapvpn.com/wp-content/uploads/2017/07/tunnel_bear_cheap_vpn_service.png"
                height={140}
                width={140}
                rounded={100}
              />
            </div>
            <article className="form-body">
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
              <button className="button button--primary">Log in</button>
            </footer>
            <section className="details">
              <NavLink to="/login/forgot_password">Cant remember your password? Click here</NavLink>
            </section>
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
