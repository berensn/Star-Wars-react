import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import styled from 'styled-components';
import './App.css';

const MainDisplay = styled.div`
  width: 90%;
  margin: auto;
  background-color: #222;
`;

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <MainDisplay>
          <Main/>
        </MainDisplay>
      </div>
    );
  }
}

export default App;