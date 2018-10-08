import React, { Component } from "react";
import styled from "styled-components";
import { Query } from "react-apollo";

import gql from "graphql-tag";

const GET_NOTES = gql`
  {
    notes @client {
      id
      title
      updatedAt
    }
  }
`;

const Header = styled.div`
  padding: 50px 0px;
`;

const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
  margin: 0;
  margin-bottom: 30px;
`;

const Subtitle = styled.h2`
  color: #a2a19e;
`;

const Notes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Note = styled.div`
  padding: 10px;
  padding-left: 5px;
  transition: background-color 0.1s linear;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #eeeeee;
  }
`;

const NoteTitle = styled.span`
  padding-bottom: 5px;
  font-weight: 600;
  font-size: 20px;
`;

class App extends Component {
  render() {
    return (
      <>
        <Header>
          <Title>Nomad Notes</Title>
          <Subtitle>Taking notes while we learn.</Subtitle>
        </Header>
        <Query query={GET_NOTES}>
          {({ data }) => (
            <Notes>
              {data.notes.map(note => (
                <Note key={data.id}>
                  <NoteTitle>{note.title}</NoteTitle>
                </Note>
              ))}
            </Notes>
          )}
        </Query>
      </>
    );
  }
}

export default App;
