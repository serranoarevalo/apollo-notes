import React from "react";
import Editor from "../../Components/Editor";

export default class Add extends React.Component {
  render() {
    return <Editor onSave={this._createNote} />;
  }
  _createNote = () => {
    console.log("Save notes");
  };
}
