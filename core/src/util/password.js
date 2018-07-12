import Bcrypt from 'bcryptjs'

/**
 * Hash a password using Bcrypt algorithm.
 * pwd: plain password of the user
 */
export const hashPwd = (pwd) => {
  return new Promise((resolve, reject) => {
    Bcrypt.genSalt(10, (err, salt) => {
      if (err) { return reject(err) }
      Bcrypt.hash(pwd, salt, (err, hash) => {
        if (err) { return reject(err) }
        resolve(hash)
      })
    })
  })
}

/**
 * Check if a password is correct.
 * pwd: plain entered password
 * hash: stored hashed password
 */
export const checkPwd = (pwd, hash) => {
  return new Promise((resolve, reject) => {
    Bcrypt.compare(pwd, hash, (err, res) => {
      if (err) { return reject(err) }
      return res
    })
  })
}
