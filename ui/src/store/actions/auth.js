import * as Auth from '../../services/auth';

export default {
  login(state, actions, token) {
    Auth.saveSession(token);
    return {
      ...state,
      auth: {
        ...state.auth,
        logged: true
      }
    };
  },
  async aboutMe(state, actions, token) {
    try {
      const user = await Auth.aboutMe(token);
      return {
        ...state,
        auth: {
          ...state.auth,
          user
        }
      };
    } catch (e) {
      console.warn(`Error when find your information: ${e.message}`);
      throw e;
    }
  }
};
