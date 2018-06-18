import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/nav';
import Main from './components/main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav/>
        <div className= "mainDisplay">
          <Main/>
        </div>
      </div>
    );
  }
}

export default App;