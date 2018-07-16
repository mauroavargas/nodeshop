import gql from 'graphql-tag';

export default (email) => {
  return gql`
    query {
      loginSocial(email: "${email}")
    }
  `;
};
