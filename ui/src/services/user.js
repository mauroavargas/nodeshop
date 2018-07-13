/* eslint import/prefer-default-export: off */
import client from '../graph/client';
import findByEmail from '../graph/queries/find-by-email';

export const aboutSomeone = async (email) => {
  try {
    return await client.query({ query: findByEmail(email) });
  } catch (e) {
    return e.message;
  }
};
