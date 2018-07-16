import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';
import { makeExecutableSchema } from 'graphql-tools';
import aboutMe from './resolvers/about-me';
// import findByEmail from './resolvers/find-by-email';
import login from './resolvers/login';
import loginSocial from './resolvers/login-social';
import signup from './resolvers/signup';
import signupSocial from './resolvers/signup-social';

/**
 * Returns the processed GraphQL information,
 * like resolvers and schemas.
 */
export default () => {
  // Structure the resolvers
  const resolvers = {
    Query: {
      aboutMe,
      // findByEmail,
      login,
      loginSocial
    },
    Mutation: {
      signup,
      signupSocial
    }
  };
  const typeDefs = `
  ${joinTypes()}
  ${joinQueries()}
  ${joinMutations()}
  `;

  return makeExecutableSchema({
    typeDefs,
    resolvers
  });
};

/**
 * Join only types (schemas)
 */
const joinTypes = () => {
  const folderPath = join(__dirname, 'types');
  return readdirSync(folderPath).reduce((acc, file) => {
    const content = readFileSync(`${folderPath}/${file}`, 'utf8');
    return `${acc}\n${content}`;
  }, '');
};

/**
 * Join only queries
 */
const joinQueries = () => {
  const folderPath = join(__dirname, 'queries');
  const queries = readdirSync(folderPath).reduce((acc, file) => {
    const content = readFileSync(`${folderPath}/${file}`, 'utf8');
    return `${acc}\n${content}`;
  }, '');
  return `
  type Query {
    ${queries}
  }
  `;
};

/**
 * Join only mutations
 */
const joinMutations = () => {
  const folderPath = join(__dirname, 'mutations');
  const mutations = readdirSync(folderPath).reduce((acc, file) => {
    const content = readFileSync(`${folderPath}/${file}`, 'utf8');
    return `${acc}\n${content}`;
  }, '');
  return `
  type Mutation {
    ${mutations}
  }
  `;
};
