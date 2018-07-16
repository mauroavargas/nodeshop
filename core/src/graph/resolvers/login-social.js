import { findByEmail } from '../../services/user';
import * as Token from '../../util/token';
import UnauthorizedError from '../../errors/unauthorized';

export default async (_, args) => {
  try {
    const user = await findByEmail(args.email);
    return user ? Token.create(args.email) : null;
  } catch (e) {
    throw new UnauthorizedError({
      data: {
        reason: e.message,
        code: 401
      }
    });
  }
};
