import * as UserService from '../../services/user';

export default async (_, args) => {
  try {
    const user = await UserService.create(args);
    return {
      status: 200,
      data: user
    };
  } catch (e) {
    return {
      status: 400,
      error: e.message
    };
  }
};
