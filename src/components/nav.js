import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
  NavItem,
  NavElements,
  NavLinq
} from '../styles/nav.style';
import '../App.css'

class Nav extends Component {  
  render(){
    var people = 'people';
    var planets = 'planets';
    var species = 'species';
    var vehicles = 'vehicles';
    var starships = 'starships';
    var films = 'films';
    return(
      <div>
        <NavElements>
          <NavItem><NavLinq to='/home' >Home</NavLinq></NavItem>
          <NavItem><NavLinq to={`/category/${people}/`} >People</NavLinq></NavItem> 
          <NavItem><NavLinq to={`/category/${planets}/`} >Planets</NavLinq></NavItem> 
          <NavItem><NavLinq to={`/category/${species}/`} >Species</NavLinq></NavItem> 
          <NavItem><NavLinq to={`/category/${vehicles}/`} >Vehicles</NavLinq></NavItem> 
          <NavItem><NavLinq to={`/category/${starships}/`} >Starships</NavLinq></NavItem> 
          <NavItem><NavLinq to={`/category/${films}/`} >Films</NavLinq></NavItem>
         </NavElements>
      </div>
    );
  }
}

export default Nav;