import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavItem,
  NavElements,
  NavLinq
} from '../styles/nav.style';
import '../App.css'

class Nav extends Component {
  render(){
    return(
      <div>
        <NavElements>
          <NavItem><NavLinq to='/home' activeClassName='navSelected'>Home</NavLinq></NavItem>
          <NavItem><NavLinq to='/people' activeClassName='navSelected'>People</NavLinq></NavItem> 
          <NavItem><NavLinq to='/planets' activeClassName='navSelected'>Planets</NavLinq></NavItem> 
          <NavItem><NavLinq to='/species' activeClassName='navSelected'>Species</NavLinq></NavItem> 
          <NavItem><NavLinq to='/vehicles' activeClassName='navSelected'>Vehicles</NavLinq></NavItem> 
          <NavItem><NavLinq to='/starships' activeClassName='navSelected'>Starships</NavLinq></NavItem> 
          <NavItem><NavLinq to='/films' activeClassName='navSelected'>Films</NavLinq></NavItem> 
        </NavElements>
      </div>
    );
  }
}

export default Nav;