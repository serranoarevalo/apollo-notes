import { NOTE_FRAGMENT } from "./fragments";

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
export const resolvers = {
  Query: {
    note: (_, variables, { cache, getCacheKey }) => {
      const id = getCacheKey({ __typename: "Note", id: variables.id });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id });
      return note;
    }
  }
};
export const typeDefs = [
  `
    schema { 
        query: Query
    }
    type Query {
        notes: [Note]!
        note(id: Int!): Note
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
