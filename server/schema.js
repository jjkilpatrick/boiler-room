import { makeExecutableSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { resolvers } from './resolvers';

const typeDefs = `

type Recording {
    id: ID!
    name: String!
    location: String
    length: Int
    description: String
    link: String
}

type Query {
    recordings: [Recording]
}

`;
  
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});