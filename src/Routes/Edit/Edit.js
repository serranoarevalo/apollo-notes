import React from "react";
import { Query } from "react-apollo";
import Editor from "../../Components/Editor";
import { GET_NOTE } from "../../sharedQueries";

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
            <Editor
              title={data.note.title}
              content={data.note.content}
              onSave={this._editNote}
              id={id}
            />
          ) : null
        }
      </Query>
    );
  }
  _editNote = () => {
    console.log("Edit note...");
  };
}
