import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
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
      <div className="detailContainer">
        <div className="pageTitle">Vehicle // Detail //</div>
        <div className="detailPageTitle">
          {details.name}
          <br/>
        </div>
        <div className="detailList">
          <span>Model: {details.model}</span><br/>
          <span>Manufacturer: {details.manufacturer}</span><br/>
          <span>Vehicle Class: {details.vehicle_class}</span><br/>
          <span>Length: {details.length}</span><br/>
          <span>Max Atmosphering Speed: {details.max_atmosphering_speed}</span><br/>
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
				<div className="back"><Link to='/vehicles'>Back</Link></div>
			</div>
    );
  }
}

export default graphql(DetailQuery)(DetailVehicles);