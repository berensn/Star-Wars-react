import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavItem,
  NavElements
} from '../styles/nav.style';
import '../App.css'

class Nav extends Component {
  render(){
    return(
      <div>
        <NavElements>
          <NavItem><NavLink to='/home' activeClassName='navSelected'>Home</NavLink></NavItem>
          <NavItem><NavLink to='/people' activeClassName='navSelected'>People</NavLink></NavItem> 
          <NavItem><NavLink to='/planets' activeClassName='navSelected'>Planets</NavLink></NavItem> 
          <NavItem><NavLink to='/species' activeClassName='navSelected'>Species</NavLink></NavItem> 
          <NavItem><NavLink to='/vehicles' activeClassName='navSelected'>Vehicles</NavLink></NavItem> 
          <NavItem><NavLink to='/starships' activeClassName='navSelected'>Starships</NavLink></NavItem> 
          <NavItem><NavLink to='/films' activeClassName='navSelected'>Films</NavLink></NavItem> 
        </NavElements>
      </div>
    );
  }
}

export default Nav;