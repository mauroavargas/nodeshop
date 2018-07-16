import * as Auth from '../services/auth';

export default async (state, actions, token) => {
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
};
