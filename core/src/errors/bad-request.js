import { createError } from 'apollo-errors';

export default createError('BadRequest', {
  message: 'Something went wrong with your request'
});
