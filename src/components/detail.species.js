import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import '../App.css';


const DetailQuery = gql`
{
  species{
    name
    designation
    classification
    average_lifespan
    hair_colors
    eye_colors
    skin_colors
    average_height
    homeworld
    language
    films{
      title
    }
    people{
      name
    }
  }
  planets{
    url
    name
  }
}`

class DetailSpecies extends Component {
  render(){
    var details = null;
    var homeworld = 'No Data';
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.species.forEach(s =>{
      if (s.name === this.props.match.params.name){
        details = s;
        console.log(details);
        this.props.data.planets.forEach(p =>{
          if (p.url === s.homeworld){
            homeworld = p.name;
          } 
        })
      } 
    });
    return(
      <div className="detailContainer">
        <div className="pageTitle">Species // Detail //</div>
        <div className="detailPageTitle">
          {details.name}
          <br/>
        </div>
        <div className="detailList">
          <span>Designation: {details.designation}</span><br/>
          <span>Classification: {details.classification}</span><br/>
          <span>Average Lifespan: {details.average_lifespan}</span><br/>
          <span>Hair Colors: {details.hair_colors}</span><br/>
          <span>Eye Colors: {details.eye_colors}</span><br/>
          <span>Skin Colors: {details.skin_colors}</span><br/>
          <span>Average Height: {details.average_height}</span><br/>
          <span>Homeworld: {homeworld}</span><br/>  
          <span>Language: {details.language}</span><br/>        
        </div>
        <span className="detailItemListTitle">People</span><br/>
        {details.people.length !== 0 ?
          details.people.map(v =>
          <li key={v.name}>{v.name}</li>
        ) : <li>None</li>}
        <span className="detailItemListTitle">Films</span><br/>
        {details.films.length !== 0 ?
          details.films.map(v =>
          <li key={v.title}>{v.title}</li>
        ) : <li>None</li>}<br/>
				<div className="back"><Link to='/people'>Back</Link></div>
			</div>
    );
  }
}

export default graphql(DetailQuery)(DetailSpecies);