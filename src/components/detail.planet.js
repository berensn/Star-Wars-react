import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import '../App.css';


const DetailQuery = gql`
{
  planets{
    name
    gravity
    population
    diameter
    terrain
    orbital_period
    rotation_period
    surface_water
    climate
    residents{
      name
    }
    films{
      title
    }
  }
}`

class DetailPlanet extends Component {
  render(){
    var details = null;
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.planets.forEach(s =>{
      if (s.name === decodeURIComponent(this.props.match.params.name)){
        details = s;
        console.log(details);
        this.props.data.planets.forEach(p =>{ 
        })
      } 
    });
    return(
      <div className="detailContainer">
        <div className="pageTitle">Planet // Detail //</div>
        <div className="detailPageTitle">
          {details.name}
          <br/>
        </div>
        <div className="detailList">
          <span>Gravity: {details.gravity}</span><br/>
          <span>Population: {details.population}</span><br/>
          <span>Diameter: {details.diameter}</span><br/>
          <span>Terrain: {details.terrain}</span><br/>
          <span>Orbital Period: {details.orbital_period}</span><br/>
          <span>Rotation Period: {details.rotation_period}</span><br/>
          <span>Surface Water: {details.surface_water}</span><br/>
          <span>Climate: {details.climate}</span><br/>          
        </div>
        <span className="detailItemListTitle">Residents</span><br/>
        {details.residents.length !==0 ?
          details.residents.map(v =>
          <li key={v.name}>{v.name}</li>
        ) : <li>None</li>}
        <span className="detailItemListTitle">Films</span><br/>
        {details.films.length !== 0 ?
          details.films.map(v =>
          <li key={v.title}>{v.title}</li>
        ) : <li>None</li>}<br/>
				<div className="back"><Link to='/planets'>Back</Link></div>
			</div>
    );
  }
}

export default graphql(DetailQuery)(DetailPlanet);