export const defaults = {
  notes: []
};
export const resolvers = {};
export const typeDefs = [
  `
    schema { 
        query: Query
    }
    type Query {
        notes: [Note]!
        note: Note
    }
    type Note{
        id: String!
        content: String!
        createdAt: String!
        updatedAt: String!
    }
`
];
