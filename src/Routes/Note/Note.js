import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_NOTE = gql`
  query {
    note(id: 1) @client {
      id
    }
  }
`;

export default () => (
  <Query query={GET_NOTE}>{({ data }) => <h2>llal</h2>}</Query>
);
