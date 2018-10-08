import React from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import Editor from "../../Components/Editor";
import { GET_NOTES } from "../../sharedQueries";

const ADD_NOTE = gql`
  mutation addNote($title: String!, $content: String!) {
    addNote(title: $title, content: $content) @client {
      id
    }
  }
`;

export default class Add extends React.Component {
  render() {
    return (
      <Mutation mutation={ADD_NOTE}>
        {addNote => {
          this.addNote = addNote;
          return <Editor onSave={this._createNote} />;
        }}
      </Mutation>
    );
  }
  _createNote = (title, content) => {
    this.addNote({
      variables: {
        title,
        content
      }
    });
  };
}
