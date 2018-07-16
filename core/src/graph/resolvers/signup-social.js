import BadRequestError from '../../errors/bad-request';
import * as UserService from '../../services/user';
import * as Token from '../../util/token';

export default async (_, args) => {
  try {
    await UserService.create(args);
    return Token.create(args.email);
  } catch (e) {
    throw new BadRequestError({
      data: {
        reason: e.message,
        code: 400
      }
    });
  }
};
