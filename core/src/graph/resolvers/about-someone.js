import signale from 'signale';
import * as UserService from '../../services/user';

export default (_, args) => {
  const { email } = args;
  signale.info(`Searching user by: ${email}`);
  return UserService.findByEmail(email);
};
