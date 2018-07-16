import gql from 'graphql-tag';

export default ({
  firstName,
  lastName,
  email,
  photo,
}) => {
  return gql`
    mutation {
      signupSocial(
        firstName: "${firstName}",
        lastName: "${lastName}",
        email: "${email}",
        photo: "${photo}")
    }
  `;
};
