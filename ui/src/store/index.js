import createStore from 'react-waterfall';
import _states from './states';
import _actions from './actions';

const config = {
  initialState: _states,
  actionsCreators: _actions
};

export const {
  Provider,
  connect,
  actions,
  subscribe,
  getState
} = createStore(config);
