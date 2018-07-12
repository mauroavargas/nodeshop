import Hapi from 'hapi'
import { graphqlHapi, graphiqlHapi } from 'apollo-server-hapi'
import signale from 'signale'
import makeSchema from './graph'
import connect from './database'

/**
 * Entry point of the application.
 * This function will start the
 * application using the configuration
 * stored as environments variables.
 */
const run = async () => {
  const server = new Hapi.Server({
    host: 'localhost',
    port: 3000
  })
  await server.register({
    plugin: graphqlHapi,
    options: {
      path: '/graphql',
      graphqlOptions: {
        schema: makeSchema()
      },
      route: {
        cors: true
      }
    }
  })
  await server.register({
    plugin: graphiqlHapi,
    options: {
      path: '/graphiql',
      graphiqlOptions: {
        endpointURL: '/graphql'
      }
    }
  })
  await server.start()
}

const onSuccess = () => {
  connect()
  signale.success('Core started')
}

const onFail = (e) => {
  signale.fatal(`Core failed to start: ${e.message}`)
  process.exit(-1)
}

run().then(onSuccess).catch(onFail)
