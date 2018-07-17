/* eslint no-unused-vars: off */
import React from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import { InputWithIcon } from '../../components/shared/input';
import Button from '../../components/shared/button';
import Card from '../../components/shared/card';
import Icon from '../../components/shared/icon';
import Image from '../../components/shared/image';
import Text from '../../components/shared/text';
import * as Auth from '../../services/auth';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
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
      const token = await Auth.signup({ ...this.state });
      Auth.saveSession(token);
      this.props.history.push('/');
    } catch (err) {
      // TODO: show the errors
      console.warn(err);
    }
  }

  render() {
    return (
      <div className="signup page">
        <Card level={1}>
          <form className="form">
            <h3>Sign up</h3>
            <hr className="separator"/>
            <div className="container container--center-hoz image-container">
              <Image
                source="/images/write-circle-logo.png"
                height={140}
                width={140}
                rounded={100}
              />
            </div>
            <article className="form-body">
              <InputWithIcon
                type="text"
                placeholder="First name"
                icon={<Icon name="person_outline"/>}
              />
              <InputWithIcon
                type="text"
                placeholder="Last name"
                icon={<Icon name="sentiment_satisfied_alt"/>}
              />
              <InputWithIcon
                type="email"
                placeholder="Email"
                icon={<Icon name="alternate_email" />}
              />
              <InputWithIcon
                type="password"
                placeholder="Password"
                icon={<Icon name="lock_outline" />}
              />
            </article>
            <footer className="form-footer">
              <Button type="secondary" htmlType="submit">
                <Text color="white" content="Sign up" onClick={this.signup}/>
              </Button>
            </footer>
          </form>
        </Card>
      </div>
    );
  }
}

export default withRouter(Signup);

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
