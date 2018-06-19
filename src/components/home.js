import React, { Component } from 'react';
import styled from 'styled-components';
import '../App.css';
import empire from '../assets/img/logo_empire.png';
import rebel from '../assets/img/logo_rebel.png';

const PageTitle = styled.div`
  font-size: 3em;
  font-weight: 600;
  color: #ebebeb;
  padding: 20px 0px 50px 0px;
`;
const HomeLogos = styled.div`
  width: 90%;
  text-align: center;
  display: inline;
`;
const EmpireLogo = styled.div`
  width: 30%;
  float: left;
  padding-left: 12%;
`;
const RebelLogo = styled.div`
  width: 30%;
  float: right;
  padding-right: 12%;
`;

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