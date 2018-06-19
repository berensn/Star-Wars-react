import React, { Component } from 'react';
import {
    AppHead,
    AppHeader,
    AppTitle
} from '../styles/header.style';
import '../App.css';

class Header extends Component{
    render(){
        return(
            <AppHead>
              <AppHeader>
                <AppTitle>Star Wars Factoids</AppTitle>
              </AppHeader>
            </AppHead>
        );
    }
}

export default Header;