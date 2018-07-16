/* eslint import/prefer-default-export: off */
import client from '../graph/client';
import _aboutMe from '../graph/queries/about-me';
import _login from '../graph/queries/login';
import _loginSocial from '../graph/queries/login-social';
import _signup from '../graph/mutations/signup';
import _signupSocial from '../graph/mutations/signup-social';

export const aboutMe = async () => {
  const token = localStorage.getItem('nodeshop-session-token');
  try {
    const {
      data: {
        aboutMe: me
      }
    } = await client.query({
      query: _aboutMe(token)
    });
    return me;
  } catch (e) {
    throw e;
  }
};

export const login = async (email, password) => {
  try {
    const { data } = await client.query({ query: _login(email, password) });
    return data.login;
  } catch (e) {
    throw e;
  }
};

export const loginSocial = async (email) => {
  try {
    const { data } = await client.query({ query: _loginSocial(email) });
    return data.loginSocial;
  } catch (e) {
    throw e;
  }
};

export const signup = async (_data) => {
  try {
    const { data } = await client.mutate({ mutation: _signup(_data) });
    return data.signup;
  } catch (e) {
    throw e;
  }
};

export const signupSocial = async (_data) => {
  try {
    const { data } = await client.mutate({ mutation: _signupSocial(_data) });
    return data.signupSocial;
  } catch (e) {
    throw e;
  }
};

export const loginWithFacebook = () => {
  return new Promise((resolve, reject) => {
    window.FB.login((response) => {
      if (response.authResponse) {
        window.FB.api('/me', {
          fields: 'first_name,last_name,email',
          // access_token: response.authResponse.accessToken
        }, (user) => {
          resolve(user);
        });
      } else {
        reject(new Error('User cancelled login or did not fully authorize.'));
      }
    }, { scope: 'public_profile,email' });
  });
};

export const loginWithGoogle = () => {
  return new Promise((resolve, reject) => {
    window.gapi.load('auth2', () => {
      // initialize the GoogleAuth
      window.gapi.auth2.init({
        client_id: '760916417371-nkkh7884c7vqji0qqfbkdge44cgq0c8i.apps.googleusercontent.com'
      });
      window.gapi.auth2
        .getAuthInstance()
        .signIn({ scope: 'profile email' })
        .then((user) => {
          resolve(user.w3);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

export const saveSession = (token) => {
  localStorage.setItem('nodeshop-session-token', token);
};

export const destroySession = () => {
  localStorage.removeItem('nodeshop-session-token');
};

export const isLogged = () => {
  return localStorage.getItem('nodeshop-session-token') !== null;
};
