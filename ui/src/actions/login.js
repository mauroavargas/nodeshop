import * as Auth from '../services/auth';

export default (state, actions, token) => {
  Auth.saveSession(token);
  return {
    ...state,
    auth: {
      ...state.auth,
      logged: true
    }
  };
};
