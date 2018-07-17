/* eslint no-unused-vars: off */
import React from 'react';
import { withRouter } from 'react-router';
import { actions } from '../../store';
import Button from '../../components/shared/button';
import Image from '../../components/shared/image';
import Text from '../../components/shared/text';
import * as Auth from '../../services/auth';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.loginWithFacebook = this.loginWithFacebook.bind(this);
    this.loginWithGoogle = this.loginWithGoogle.bind(this);
  }

  async loginWithFacebook() {
    try {
      const oAuthUser = await Auth.loginWithFacebook();
      let token = await Auth.loginSocial(oAuthUser.email);
      if (!token) {
        token = await Auth.signupSocial({
          firstName: oAuthUser.first_name,
          lastName: oAuthUser.last_name,
          email: oAuthUser.email,
          photo: await this.getFacebookPhoto(oAuthUser.id)
        });
      }
      actions.login(token);
      actions.aboutMe();
      this.props.history.push('/');
    } catch (e) {
      console.warn(e);
    }
  }

  async loginWithGoogle() {
    try {
      const oAuthUser = await Auth.loginWithGoogle();
      let token = await Auth.loginSocial(oAuthUser.email);
      if (!token) {
        token = await Auth.signupSocial({
          firstName: oAuthUser.ofa,
          lastName: oAuthUser.wea,
          email: oAuthUser.U3,
          photo: oAuthUser.Paa
        });
      }
      actions.login(token);
      actions.aboutMe();
      this.props.history.push('/');
    } catch (e) {
      console.warn(e);
    }
  }

  async getFacebookPhoto(userId) {
    const response = await fetch(`https://graph.facebook.com/v3.0/${userId}/picture?redirect=false&type=large`);
    const { data } = await response.json();
    return data.url;
  }

  render() {
    return (
      <section className="social-login">
        <span className="login-options-separator">Or login with</span>
        <Button
          className="button--facebook"
          htmlType="button"
          onClick={this.loginWithFacebook}
        >
          <Image
            source={`${process.env.PUBLIC_URL}/images/facebook-logo.svg`}
            height={18}
            width={18}
          />
          <Text color="white" content="Login with Facebook"/>
        </Button>
        <Button
          className="button--google"
          htmlType="button"
          style={{ marginTop: 10 }}
          onClick={this.loginWithGoogle}
        >
          <Image
            source={`${process.env.PUBLIC_URL}/images/google-logo-small.svg`}
            height={18}
            width={18}
          />
          <Text content="Login with Google"/>
        </Button>
      </section>
    );
  }
}

export default withRouter(Social);
