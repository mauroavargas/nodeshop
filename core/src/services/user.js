import User from '../models/user';

export const findByToken = (token) => {
  return User.findOne({ token });
};

export const findByEmail = (email) => {
  return User.findOne({ email });
};

export const create = async (data) => {
  const user = await findByEmail(data.email);
  if (user) {
    throw new Error('The user is already registered.');
  }
  return User.create(data);
};
