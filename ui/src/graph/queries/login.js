import gql from 'graphql-tag';

export default (email, password) => {
  return gql`
    query {
      login(email: "${email}", password: "${password}")
    }
  `;
};
