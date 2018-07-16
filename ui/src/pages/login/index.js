/* eslint no-unused-vars: off */
import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { actions } from '../../store';
import { InputWithIcon } from '../../components/input';
import { Button } from '../../components/button';
import Card from '../../components/card';
import Icon from '../../components/icon';
import Image from '../../components/image';
import Text from '../../components/text';
import SocialAuth from './social';
import * as Auth from '../../services/auth';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const token = await Auth.login(this.state.email, this.state.password);
      actions.login(token);
      this.props.history.push('/');
    } catch (err) {
      // TODO: show the errors
      console.warn(err);
    }
  }

  render() {
    return (
      <div className="login page">
        <Card level={1}>
          <form className="form" onSubmit={this.handleSubmit}>
            <h3>Login</h3>
            <hr className="separator"/>
            <div className="container container--center-hoz image-container">
              <Image
                source="/images/bear-icon.png"
                height={140}
                width={140}
                rounded={100}
              />
            </div>
            <article className="form-body">
              <InputWithIcon
                type="email"
                placeholder="Email"
                icon={<Icon name="alternate_email" />}
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <InputWithIcon
                type="password"
                placeholder="Password"
                icon={<Icon name="lock_outline" />}
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </article>
            <footer className="form-footer">
              <Button type="primary" htmlType="submit">
                <Text color="white" content="Log in"/>
              </Button>
            </footer>
            <SocialAuth />
            <section className="details">
              <NavLink to="/login/forgot_password">Cant remember your password? Click here</NavLink>
            </section>
          </form>
        </Card>
      </div>
    );
  }
}

export default withRouter(Login);

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
