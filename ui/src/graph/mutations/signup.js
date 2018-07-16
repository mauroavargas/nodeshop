import gql from 'graphql-tag';

export default ({
  firstName,
  lastName,
  email,
  photo,
  password
}) => {
  return gql`
    mutation {
      signup(
        firstName: "${firstName}",
        lastName: "${lastName}",
        email: "${email}",
        password: "${password}",
        photo: "${photo}")
    }
  `;
};
