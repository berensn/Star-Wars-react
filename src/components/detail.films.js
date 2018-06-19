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
        <PageTitle>Film // Detail //</PageTitle>
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
          {detailDataMap(details.planets, false)}
        <DetailItemListTitle>Vehicles</DetailItemListTitle><br/>
          {detailDataMap(details.vehicles, false)}
        <DetailItemListTitle>Starships</DetailItemListTitle><br/>
          {detailDataMap(details.starships, false)}
        <DetailItemListTitle>Species</DetailItemListTitle><br/>
          {detailDataMap(details.species, false)}<br/>
				<div><Link to='/films'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailFilms);