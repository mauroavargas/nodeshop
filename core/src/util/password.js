import Bcrypt from 'bcryptjs';

/**
 * Hash a password using Bcrypt algorithm.
 * pwd: plain password of the user
 */
export const hashPwd = (pwd) => {
  return new Promise((resolve, reject) => {
    Bcrypt.genSalt(10, (err, salt) => {
      if (err) { reject(err); }
      else {
        Bcrypt.hash(pwd, salt, (hashErr, hash) => {
          if (err) { reject(hashErr); }
          resolve(hash);
        });
      }
    });
  });
};

/**
 * Check if a password is correct.
 * pwd: plain entered password
 * hash: stored hashed password
 */
export const verify = (pwd, hash) => {
  return new Promise((resolve, reject) => {
    Bcrypt.compare(pwd, hash, (err, res) => {
      if (err) { reject(err); }
      else { resolve(res); }
    });
  });
};
