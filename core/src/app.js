import Hapi from 'hapi';
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi';
import signale from 'signale';
import makeSchema from './graph';
import connect from './database';

/**
 * Entry point of the application.
 * This function will start the
 * application using the configuration
 * stored as environments variables.
 */
const run = async () => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 4000,
  });
  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: makeSchema(),
      },
      route: {
        cors: true,
      },
    },
  });
  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql',
      },
    },
  });
  await server.start();
};

const onSuccess = () => {
  signale.success('API started at :4000');
};

const onFail = (e) => {
  signale.fatal(`Core failed to start: ${e.message}`);
  process.exit();
};

run().then(onSuccess).then(connect).catch(onFail);
