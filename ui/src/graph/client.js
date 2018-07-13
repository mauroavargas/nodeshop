import ApolloClient from 'apollo-boost';
import { GRAPHQL_ENDPOINT_URL } from '../constants/endpoint';

export default new ApolloClient({
  uri: GRAPHQL_ENDPOINT_URL,
});
