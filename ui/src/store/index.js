import createStore from 'react-waterfall';
import auth from '../states/auth';
import login from '../actions/login';
import aboutMe from '../actions/about-me';

const config = {
  initialState: {
    auth
  },
  actionsCreators: {
    login,
    aboutMe
  }
};

export const {
  Provider,
  connect,
  actions,
  subscribe,
  getState
} = createStore(config);
