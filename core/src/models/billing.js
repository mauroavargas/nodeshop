import mongoose, { Schema } from 'mongoose';

const schema = new Schema({
  creditCard: {
    type: Schema.Types.String,
    required: true
  },
  expirationDate: {
    type: Schema.Types.String,
    required: true
  },
  securityCode: {
    type: Schema.Types.Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

export default mongoose.model('Billing', schema);
