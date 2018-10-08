import React from "react";
import Editor from "../../Components/Editor";

export default class Edit extends React.Component {
  render() {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    return (
      <Editor
        title={"Something"}
        content={"# Something else"}
        onSave={this._editNote}
        id={id}
      />
    );
  }
  _editNote = () => {
    console.log("Edit note...");
  };
}
