export const defaults = {
  notes: [
    {
      __typename: "Note",
      id: 1,
      title: "This is nice",
      content: "Love me",
      createdAt: "Today",
      updatedAt: "Now"
    },
    {
      __typename: "Note",
      id: 2,
      title: "This is nice",
      content: "Love me",
      createdAt: "Today",
      updatedAt: "Now"
    }
  ]
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
        title: String!
        content: String!
        createdAt: String!
        updatedAt: String!
    }
`
];
