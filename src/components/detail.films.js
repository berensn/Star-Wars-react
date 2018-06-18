import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import '../App.css';


const DetailQuery = gql`
{
  films{
    title
    episode_id
    opening_crawl
    director
    producer
    release_date
    characters{
      name
    }
    planets{
      name
    }
    starships{
      name
    }
    vehicles{
      name
    }
    species{
      name
    }
  }
}`

class DetailFilms extends Component {
  render(){
    var details = null;
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    this.props.data.films.forEach(s =>{
      if (s.title === this.props.match.params.name){
        details = s;
        console.log(details);
      } 
    });
    return(
      <div className="detailContainer">
        <div className="pageTitle">Film // Detail //</div>
        <div className="detailPageTitle">
          {details.title}
          <br/>
        </div>
        <div className="detailList">
          <span className="detailItemListTitle">Opening Crawl:</span><br/>
          <span>{details.opening_crawl}</span><br/><br/>
          <span>Episode ID: {details.episode_id}</span><br/>
          <span>Director: {details.director}</span><br/>
          <span>Producer: {details.producer}</span><br/>
          <span>Release Date: {details.release_date}</span><br/>         
        </div>
        <span className="detailItemListTitle">Planets</span><br/>
        {details.planets.length !== 0 ?
          details.planets.map(v =>
          <li key={v.name}>{v.name}</li>
        ) : <li>None</li>}
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
        <span className="detailItemListTitle">Species</span><br/>
        {details.species.length !== 0 ?
          details.species.map(v =>
          <li key={v.name}>{v.name}</li>
        ) : <li>None</li>}<br/>
				<div className="back"><Link to='/films'>Back</Link></div>
			</div>
    );
  }
}

export default graphql(DetailQuery)(DetailFilms);