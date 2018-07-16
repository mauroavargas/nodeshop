import User from '../models/user';
import * as Jwt from '../util/token';
import { verify } from '../util/password';

export const findByToken = (token) => {
  const { email } = Jwt.verify(token);
  if (!email) {
    return null;
  }
  return findByEmail(email);
};

export const findByEmail = (email) => {
  return User.findOne({ email });
};

export const login = async (email, password) => {
  const user = await findByEmail(email);
  if (user) {
    try {
      const match = await verify(password, user.password);
      if (match) {
        return user;
      }
      throw new Error('Incorrect username or password');
    } catch (e) {
      throw new Error('Incorrect username or password');
    }
  }
  throw new Error('Incorrect username or password');
};

export const create = async (data) => {
  const user = await findByEmail(data.email);
  if (user) {
    throw new Error('The user is already registered.');
  }
  return User.create(data);
};
