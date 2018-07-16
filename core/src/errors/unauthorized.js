import { createError } from 'apollo-errors';

export default createError('UnauthorizedError', {
  message: 'You don\'t need rights to this operation'
});
