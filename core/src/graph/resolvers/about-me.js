import signale from 'signale';
import * as UserService from '../../services/user';

export default (_, args) => {
  const { token } = args;
  signale.info(`Token: ${token}`);
  return UserService.findByToken(token);
};
