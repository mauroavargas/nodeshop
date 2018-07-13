import gql from 'graphql-tag';

export default (email) => {
  return gql`
    query {
      findByEmail(email: "${email}") {
        firstName,
        lastName,
        email
      }
    }
  `;
};
