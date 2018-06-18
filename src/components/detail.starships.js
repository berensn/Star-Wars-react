import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
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
      <div className="detailContainer">
        <div className="pageTitle">Starship // Detail //</div>
        <div className="detailPageTitle">
          {details.name}
          <br/>
        </div>
        <div className="detailList">
          <span>Model: {details.model}</span><br/>
          <span>Manufacturer: {details.manufacturer}</span><br/>
          <span>Starship Class: {details.starship_class}</span><br/>
          <span>Length: {details.length}</span><br/>
          <span>Max Atmosphering Speed: {details.max_atmosphering_speed}</span><br/>
          <span>Hyperdrive Rating: {details.hyperdrive_rating}</span><br/>
          <span>MGLT: {details.MGLT}</span><br/>
          <span>Cargo Capacity: {details.cargo_capacity}</span><br/>
          <span>Crew: {details.crew}</span><br/>
          <span>Passengers: {details.passengers}</span><br/>  
          <span>Cost in Credits: {details.cost_in_credits}</span><br/>        
        </div>
        <span className="detailItemListTitle">Pilots</span><br/>
        {details.pilots.length !== 0 ?
          details.pilots.map(v =>
          <li key={v.name}>{v.name}</li>
        ) : <li>None</li>}
        <span className="detailItemListTitle">Films</span><br/>
        {details.films.length !== 0 ?
          details.films.map(v =>
          <li key={v.title}>{v.title}</li>
        ) : <li>None</li>}<br/>
				<div className="back"><Link to='/starships'>Back</Link></div>
			</div>
    );
  }
}

export default graphql(DetailQuery)(DetailStarships);