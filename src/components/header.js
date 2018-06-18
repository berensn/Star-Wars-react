import React, { Component } from 'react';
import '../App.css';

class Header extends Component{
    render(){
        return(
            <div className="App">
              <header className="App-header">
                <span className="App-title">Star Wars Factoids</span>
              </header>
            </div>
        );
    }
}

export default Header;