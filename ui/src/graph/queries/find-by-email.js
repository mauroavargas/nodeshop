import gql from 'graphql-tag';

export default (email) => {
  return gql`
    query {
      aboutSomeone(email: "${email}") {
        firstName,
        lastName,
        email
      }
    }
  `;
};
