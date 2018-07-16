import * as UserService from '../../services/user';

export default (_, args) => {
  return UserService.findByToken(args.token);
};
