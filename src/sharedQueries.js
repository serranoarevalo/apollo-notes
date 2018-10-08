import gql from "graphql-tag";
import { NOTE_FRAGMENT } from "./fragments";

export const GET_NOTE = gql`
  query note($id: Int!) {
    note(id: $id) @client {
      id
      title
      content
    }
  }
`;

export const GET_NOTES = gql`
  {
    notes @client {
      ...NoteParts
    }
  }
  ${NOTE_FRAGMENT}
`;
