import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/nodeshop', { useNewUrlParser: true });
};
