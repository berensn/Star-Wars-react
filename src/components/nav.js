import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

class Nav extends Component {
  render(){
    return(
      <div>
        <nav className="navElements">
          <span className="navItem"><Link to='/'>Home</Link></span>
          <span className="navItem"><Link to='/people'>People</Link></span> 
          <span className="navItem"><Link to='/planets'>Planets</Link></span> 
          <span className="navItem"><Link to='/species'>Species</Link></span> 
          <span className="navItem"><Link to='/vehicles'>Vehicles</Link></span> 
          <span className="navItem"><Link to='/starships'>Starships</Link></span> 
          <span className="navItem"><Link to='/films'>Films</Link></span> 
        </nav>
      </div>
    );
  }
}

export default Nav;