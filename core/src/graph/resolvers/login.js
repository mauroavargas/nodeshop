import { login } from '../../services/user';
import * as Token from '../../util/token';
import UnauthorizedError from '../../errors/unauthorized';

export default async (_, args) => {
  try {
    await login(args.email, args.password);
    return Token.create(args.email);
  } catch (e) {
    throw new UnauthorizedError({
      data: {
        reason: e.message,
        code: 401
      }
    });
  }
};
