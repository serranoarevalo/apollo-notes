import React from "react";
import styled from "styled-components";
import MarkdownRenderer from "react-markdown-renderer";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  margin-bottom: 50px;
`;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
`;

const ContentInput = styled(TextareaAutosize)`
  font-size: 18px;
  margin-top: 15px;
`;

export default class Add extends React.Component {
  state = {
    title: "",
    content: ""
  };
  render() {
    const { title, content } = this.state;
    return (
      <>
        <TitleInput
          value={title}
          onChange={this._onInputChange}
          placeholder={"Untitled..."}
          name={"title"}
        />
        <ContentPreview>
          <ContentInput
            value={content}
            onChange={this._onInputChange}
            placeholder={"# This supports markdown!"}
            name={"content"}
          />
          <MarkdownRenderer
            markdown={content}
            skipHtml={true}
            className={"markdown"}
          />
        </ContentPreview>
      </>
    );
  }
  _onInputChange = event => {
    const {
      target: { value, name }
    } = event;
    this.setState({
      [name]: value
    });
  };
}
