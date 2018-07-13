import jwt from 'jsonwebtoken';
import signale from 'signale';

const SECRET = process.env.SECRET || 'N0d3sh0p!';

export const create = (email) => {
  return jwt.sign({ email }, SECRET, { expiresIn: '1y' });
};

export const verify = (token, email) => {
  try {
    const data = jwt.verify(token, SECRET);
    if (data === email) {
      return true;
    }
    return false;
  } catch (e) {
    signale.error(e.message);
    return false;
  }
};
