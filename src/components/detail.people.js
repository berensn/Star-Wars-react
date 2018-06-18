import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import '../App.css';


const DetailQuery = gql`
{
	people{
		gender
		name
		height
		mass
		hair_color
		eye_color
		skin_color
		birth_year
		homeworld
		vehicles{
			name
		}
		starships{
			name
		}
		films{
			title
		}
  }
  planets{
    url
    name
  }
}`

class DetailPeople extends Component {
  render(){
    var details = null;
    var homeworld = 'No Data';
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.people.forEach(s =>{
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
        <div className="pageTitle">People // Detail //</div>
        <div className="detailPageTitle">
          {details.name}
          <br/>
        </div>
        <div className="detailList">
          <span>Gender: {details.gender}</span><br/>
          <span>Height: {details.height}</span><br/>
          <span>Mass: {details.mass}</span><br/>
          <span>Hair Color: {details.hair_color}</span><br/>
          <span>Eye Color: {details.eye_color}</span><br/>
          <span>Skin Color: {details.skin_color}</span><br/>
          <span>Birth Year: {details.birth_year}</span><br/>
          <span>Homeworld: {homeworld}</span><br/>          
        </div>
        <span className="detailItemListTitle">Vehicles</span><br/>
        {details.vehicles.length !== 0 ?
          details.vehicles.map(v =>
          <li key={v.name}>{v.name}</li>
        ) : <li>None</li>}
        <span className="detailItemListTitle">Starships</span><br/>
        {details.starships.length !== 0 ?
          details.starships.map(v =>
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

export default graphql(DetailQuery)(DetailPeople);