import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import { detailDataMap } from './global';
import { 
  DetailContainer,
  DetailPageTitle,
  DetailItemListTitle,
  DetailItem,
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
    var details = null;
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
    return(
      <DetailContainer>
        <PageTitle>Starship // Detail //</PageTitle>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            <DetailItem>Model: </DetailItem><br/>
            <DetailItem>Manufacturer: </DetailItem><br/>
            <DetailItem>Vehicle Class: </DetailItem><br/>
            <DetailItem>Length: </DetailItem><br/>
            <DetailItem>Max Atmosphering Speed: </DetailItem><br/>
            <DetailItem>Cargo Capacity: </DetailItem><br/>
            <DetailItem>Crew: </DetailItem><br/>
            <DetailItem>Passengers: </DetailItem><br/>  
            <DetailItem>Cost in Credits: </DetailItem><br/>        
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
				<div><Link to='/starships'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailVehicles);