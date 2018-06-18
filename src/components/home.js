import React, { Component } from 'react';
import '../App.css';
import empire from '../assets/img/logo_empire.png';
import rebel from '../assets/img/logo_rebel.png';

class Home extends Component {
  render(){
    return(
      <div className="homeContent">
        <div className='homePageTitle'>
          Begin here your journey does
          </div>
        <div className="homeLogos">
          <div id='empireLogo'>
            <img src={empire} alt={'empire'} id='empire'/>
          </div>
          <div id='rebelLogo'>
            <img src={rebel} alt={'rebel'} id='rebel' />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;