import gql from 'graphql-tag';

export default (token) => {
  return gql`
    query {
      aboutMe(token: "${token}") {
        firstName,
        lastName,
        email,
        photo
      }
    }
  `;
};
