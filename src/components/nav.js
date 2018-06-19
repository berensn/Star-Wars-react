import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
  NavItem,
  NavElements
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
          <NavItem><NavLink to='/home' >Home</NavLink></NavItem>
          <NavItem><NavLink to={`/category/${people}/`} >People</NavLink></NavItem> 
          <NavItem><NavLink to={`/category/${planets}/`} >Planets</NavLink></NavItem> 
          <NavItem><NavLink to={`/category/${species}/`} >Species</NavLink></NavItem> 
          <NavItem><NavLink to={`/category/${vehicles}/`} >Vehicles</NavLink></NavItem> 
          <NavItem><NavLink to={`/category/${starships}/`} >Starships</NavLink></NavItem> 
          <NavItem><NavLink to={`/category/${films}/`} >Films</NavLink></NavItem>
         </NavElements>
      </div>
    );
  }
}

export default Nav;