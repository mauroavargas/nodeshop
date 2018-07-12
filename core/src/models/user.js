import mongoose, { Schema } from 'mongoose';
import { hashPwd } from '../util/password';

const schema = new Schema({
  firstName: {
    type: Schema.Types.String,
    required: true
  },
  lastName: {
    type: Schema.Types.String,
    required: true
  },
  email: {
    type: Schema.Types.String,
    required: true
  },
  password: {
    type: Schema.Types.String,
    required: true
  }
});

/**
 * before save the user, we need to hash his
 * password first.
 */
schema.pre('save', async function onPreUserSave() {
  this.password = await hashPwd(this.password);
});

export default mongoose.model('User', schema);
