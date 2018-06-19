import React, { Component } from 'react';
import {
  PageTitle,
  HomeLogos,
  EmpireLogo,
  RebelLogo
} from '../styles/home.style';
import '../App.css';
import empire from '../assets/img/logo_empire.png';
import rebel from '../assets/img/logo_rebel.png';

class Home extends Component {
  render(){
    return(
      <div className="homeContent">
        <PageTitle>
          Begin here your journey does
        </PageTitle>
        <HomeLogos>
          <EmpireLogo>
            <img src={empire} alt={'empire'} />
          </EmpireLogo>
          <RebelLogo>
            <img src={rebel} alt={'rebel'} />
          </RebelLogo>
        </HomeLogos>
      </div>
    );
  }
}

export default Home;