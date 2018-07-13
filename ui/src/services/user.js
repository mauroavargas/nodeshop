/* eslint import/prefer-default-export: off */
import client from '../graph/client';
import _findByEmail from '../graph/queries/find-by-email';

export const findByEmail = async (email) => {
  try {
    return await client.query({ query: _findByEmail(email) });
  } catch (e) {
    return e.message;
  }
};
