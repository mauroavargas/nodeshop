import BadRequestError from '../../errors/bad-request';
import * as UserService from '../../services/user';

export default async (_, args) => {
  try {
    return await UserService.create(args);
  } catch (e) {
    throw new BadRequestError({
      data: {
        reason: e.message,
        code: 400
      }
    });
  }
};
