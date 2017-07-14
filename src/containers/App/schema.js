export const typeDefs = `

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