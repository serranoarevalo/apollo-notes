import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const TitleInput = styled(TextareaAutosize)`
  font-size: 50px;
  font-weight: 600;
  width: 100%;
  &::placeholder {
    color: #e1e1e0;
  }
`;

const ContentInput = styled(TextareaAutosize)``;

const ContentPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 50px;
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
            placeholder={"Notes"}
            name={"content"}
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
