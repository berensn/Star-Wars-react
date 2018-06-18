import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css'

class Nav extends Component {
  render(){
    return(
      <div>
        <nav className="navElements">
          <span className="navItem"><NavLink to='/' activeClassName='navSelected'>Home</NavLink></span>
          <span className="navItem"><NavLink to='/people' activeClassName='navSelected'>People</NavLink></span> 
          <span className="navItem"><NavLink to='/planets' activeClassName='navSelected'>Planets</NavLink></span> 
          <span className="navItem"><NavLink to='/species' activeClassName='navSelected'>Species</NavLink></span> 
          <span className="navItem"><NavLink to='/vehicles' activeClassName='navSelected'>Vehicles</NavLink></span> 
          <span className="navItem"><NavLink to='/starships' activeClassName='navSelected'>Starships</NavLink></span> 
          <span className="navItem"><NavLink to='/films' activeClassName='navSelected'>Films</NavLink></span> 
        </nav>
      </div>
    );
  }
}

export default Nav;