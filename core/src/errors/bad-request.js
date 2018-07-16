import { createError } from 'apollo-errors';

export default createError('BadRequestError', {
  message: 'Something went wrong with your request'
});
