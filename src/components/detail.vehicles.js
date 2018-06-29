import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
import  gql  from 'graphql-tag';
import { detailDataMap } from './global';
import { 
  DetailContainer,
  DetailPageTitle,
  DetailItemListTitle,
  DetailLeft,
  DetailRight, 
  DetailListContainer
} from '../styles/detail.style';
import { PageTitle } from '../styles/category.style';
import '../App.css';


const DetailQuery = gql`
{
  vehicles{
    name
    model
    manufacturer
    vehicle_class
    length
    max_atmosphering_speed
    cargo_capacity
    crew
    passengers
    cost_in_credits
    pilots{
      name
    }
    films{
      title
    }
  }
}`

class DetailVehicles extends Component {
  render(){
    let details = {empty: true};
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.vehicles.forEach(s =>{
      //console.log(this.props.match.params.name);
      if (s.name === decodeURIComponent(this.props.match.params.name)){
        details = s;
        //console.log(details);
      } 
    });
    if (details.empty){
      return <Redirect to="/home" />
    }
    return(
      <DetailContainer>
        <PageTitle>Vehicles // Detail //</PageTitle>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            Model: <br/>
            Manufacturer: <br/>
            Vehicle Class: <br/>
            Length: <br/>
            Max Atmosphering Speed: <br/>
            Cargo Capacity: <br/>
            Crew: <br/>
            Passengers: <br/>  
            Cost in Credits: <br/>        
          </DetailLeft>
          <DetailRight>
            {details.model}<br/>
            {details.manufacturer}<br/>
            {details.vehicle_class}<br/>
            {details.length}<br/>
            {details.max_atmosphering_speed}<br/>
            {details.cargo_capacity}<br/>
            {details.crew}<br/>
            {details.passengers}<br/>
            {details.cost_in_credits}<br/>
          </DetailRight>
        </DetailListContainer>
        <DetailItemListTitle>Pilots</DetailItemListTitle><br/>
          {detailDataMap(details.pilots, false)} 
        <DetailItemListTitle>Films</DetailItemListTitle><br/>
          {detailDataMap(details.films, true)}<br/>
				<div><Link to='/category/vehicles'>Back</Link></div>
			</DetailContainer>
    );
  }

  setEmpty(){
    this.setState(() => {
      return {empty: false};
    });
  }
}

export default graphql(DetailQuery)(DetailVehicles);