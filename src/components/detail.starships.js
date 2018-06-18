import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import { 
  DetailContainer,
  DetailPageTitle,
  DetailItemListTitle,
  DetailItem,
  DetailLeft,
  DetailRight, 
  DetailListContainer} from '../styles/detail.style';
import '../App.css';


const DetailQuery = gql`
{
  starships{
    name
    model
    manufacturer
    starship_class
    length
    max_atmosphering_speed
    hyperdrive_rating
    MGLT
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

class DetailStarships extends Component {
  render(){
    var details = null;
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.starships.forEach(s =>{
      if (s.name === decodeURIComponent(this.props.match.params.name)){
        details = s;
        //console.log(details);
      } 
    });
    return(
      <DetailContainer>
        <div className="pageTitle">Starship // Detail //</div>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            <DetailItem>Model: </DetailItem><br/>
            <DetailItem>Manufacturer: </DetailItem><br/>
            <DetailItem>Starship Class: </DetailItem><br/>
            <DetailItem>Length: </DetailItem><br/>
            <DetailItem>Max Atmosphering Speed: </DetailItem><br/>
            <DetailItem>Hyperdrive Rating: </DetailItem><br/>
            <DetailItem>MGLT: </DetailItem><br/>
            <DetailItem>Cargo Capacity: </DetailItem><br/>
            <DetailItem>Crew: </DetailItem><br/>
            <DetailItem>Passengers: </DetailItem><br/>  
            <DetailItem>Cost in Credits: </DetailItem><br/>        
          </DetailLeft>
          <DetailRight>
            {details.model}<br/>
            {details.manufacturer}<br/>
            {details.starship_class}<br/>
            {details.length}<br/>
            {details.max_atmosphering_speed}<br/>
            {details.hyperdrive_rating}<br/>
            {details.MGLT}<br/>
            {details.cargo_capacity}<br/>
            {details.crew}<br/>
            {details.passengers}<br/>
            {details.cost_in_credits}<br/>
          </DetailRight>
        </DetailListContainer>
        <DetailItemListTitle>Pilots</DetailItemListTitle><br/>
          {details.pilots.length !== 0 ?
            details.pilots.map(v =>
            <li key={v.name}>{v.name}</li>
          ) : <li>None</li>}
        <DetailItemListTitle>Films</DetailItemListTitle><br/>
          {details.films.length !== 0 ?
            details.films.map(v =>
            <li key={v.title}>{v.title}</li>
          ) : <li>None</li>}<br/>
				<div><Link to='/starships'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailStarships);