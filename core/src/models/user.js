import mongoose from 'mongoose'
import { hashPwd } from '../util/password'

const { Types } = mongoose.Schema

const schema = new mongoose.Schema({
  firstName: {
    type: Types.String,
    required: true
  },
  lastName: {
    type: Types.String,
    required: true
  },
  email: {
    type: Types.String,
    required: true
  },
  password: {
    type: Types.String,
    required: true
  }
})

/**
 * before save the user, we need to hash his
 * password first.
 */
schema.pre('save', async function () {
  this.password = await hashPwd(this.password)
})

export default mongoose.model('User', schema)
