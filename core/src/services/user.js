import User from '../models/user'

export const findByToken = (token) => {
  return User.findOne({ token })
}

export const create = (data) => {
  return User.create(data)
}
