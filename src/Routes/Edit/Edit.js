import React from "react";
import { Query, Mutation } from "react-apollo";
import Editor from "../../Components/Editor";
import { GET_NOTE } from "../../sharedQueries";
import gql from "graphql-tag";

const UPDATE_NOTE = gql`
  mutation updateNote($id: Int!, $title: String!, $content: String!) {
    updateNote(id: $id, title: $title, content: $content) @client
  }
`;

export default class Edit extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Query query={GET_NOTE} variables={{ id }}>
        {({ data }) =>
          data.note ? (
            <Mutation mutation={UPDATE_NOTE}>
              {mutationFn => {
                this.editNote = mutationFn;
                return (
                  <Editor
                    title={data.note.title}
                    content={data.note.content}
                    onSave={this._editNote}
                    id={id}
                  />
                );
              }}
            </Mutation>
          ) : null
        }
      </Query>
    );
  }
  _editNote = (title, content, id) => {
    const {
      history: { push }
    } = this.props;
    if (title !== "" && content !== "" && id !== null) {
      this.editNote({
        variables: {
          id,
          title,
          content
        }
      });
      push(`/`);
    }
  };
}
