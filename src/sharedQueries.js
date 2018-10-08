import gql from "graphql-tag";

export const GET_NOTE = gql`
  query note($id: Int!) {
    note(id: $id) @client {
      id
      title
      content
    }
  }
`;
