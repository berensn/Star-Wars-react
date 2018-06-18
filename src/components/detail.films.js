import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';
import  gql  from 'graphql-tag';
import { dataMap } from './global';
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
      if (s.title === decodeURIComponent(this.props.match.params.name)){
        details = s;
        //console.log(details);
      } 
    });
    return(
      <DetailContainer>
        <div className="pageTitle">Film // Detail //</div>
        <DetailPageTitle>
          {details.title}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailItemListTitle>Opening Crawl:</DetailItemListTitle><br/>          
          <span>{details.opening_crawl}</span><br/><br/>
          <DetailLeft>
            <DetailItem>Episode ID: </DetailItem><br/>
            <DetailItem>Director: </DetailItem><br/>
            <DetailItem>Producer: </DetailItem><br/>
            <DetailItem>Release Date: </DetailItem><br/> 
          </DetailLeft>
          <DetailRight>      
            {details.episode_id}<br/>
            {details.director}<br/>
            {details.producer}<br/>
            {details.release_date}<br/>
          </DetailRight>
        </DetailListContainer>
        <DetailItemListTitle>Planets</DetailItemListTitle><br/>
          {details.planets.length !== 0 ?
            dataMap(details.planets, false) : <li>None</li>}
        <DetailItemListTitle>Vehicles</DetailItemListTitle><br/>
          {details.vehicles.length !== 0 ?
            dataMap(details.vehicles, false) : <li>None</li>}
        <DetailItemListTitle>Starships</DetailItemListTitle><br/>
          {details.starships.length !== 0 ?
            dataMap(details.starships, false) : <li>None</li>}
        <DetailItemListTitle>Species</DetailItemListTitle><br/>
          {details.species.length !== 0 ?
            dataMap(details.species, false) : <li>None</li>}<br/>
				<div><Link to='/films'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailFilms);