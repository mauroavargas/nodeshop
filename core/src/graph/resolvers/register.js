import * as UserService from '../../services/user'

export default (_, args) => {
  return UserService.create(args)
}
