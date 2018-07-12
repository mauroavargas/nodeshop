import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { makeExecutableSchema } from 'graphql-tools'
import signale from 'signale'
import aboutMe from './resolvers/about-me'
import register from './resolvers/register'

/**
 * Return the processed GraphQL information,
 * like resolvers and schemas.
 */
export default () => {
  // Structure the resolvers
  const resolvers = {
    Query: {
      aboutMe
    },
    Mutation: {
      register
    }
  }
  const typeDefs = `
  ${joinTypes()}
  ${joinQueries()}
  ${joinMutations()}
  `

  return makeExecutableSchema({
    typeDefs, resolvers
  })
}

const joinTypes = () => {
  const folderPath = join(__dirname, 'types')
  return readdirSync(folderPath).reduce((acc, file) => {
    const content = readFileSync(`${folderPath}/${file}`, 'utf8')
    return acc + `${content}\n`
  }, '')
}

const joinQueries = () => {
  const folderPath = join(__dirname, 'queries')
  const queries = readdirSync(folderPath).reduce((acc, file) => {
    const content = readFileSync(`${folderPath}/${file}`, 'utf8')
    return acc + `${content}\n`
  }, '')
  return `
  type Query {
    ${queries}
  }
  `
}

const joinMutations = () => {
  const folderPath = join(__dirname, 'mutations')
  const mutations = readdirSync(folderPath).reduce((acc, file) => {
    const content = readFileSync(`${folderPath}/${file}`, 'utf8')
    return acc + `${content}\n`
  }, '')
  return `
  type Mutation {
    ${mutations}
  }
  `
}
