import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
import  gql  from 'graphql-tag';
import { detailDataMap } from './global';
import { 
  DetailContainer,
  DetailPageTitle,
  DetailItemListTitle,
  DetailLeft,
  DetailRight, 
  DetailListContainer
} from '../styles/detail.style';
import { PageTitle } from '../styles/category.style';
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
    let details = {empty: true};
    let homeworld = 'No Data';
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.species.forEach(s =>{
      if (s.name === decodeURIComponent(this.props.match.params.name)){
        details = s;
        //console.log(details);
        this.props.data.planets.forEach(p =>{
          if (p.url === s.homeworld){
            homeworld = p.name;
          } 
        })
      } 
    });
    if (details.empty){
      return <Redirect to="/home" />
    }
    return(
      <DetailContainer>
        <PageTitle>Species // Detail //</PageTitle>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            Designation: <br/>
            Classification: <br/>
            Average Lifespan: <br/>
            Hair Colors: <br/>
            Eye Colors: <br/>
            Skin Colors: <br/>
            Average Height: <br/>
            Homeworld: <br/>  
            Language: <br/> 
          </DetailLeft>
          <DetailRight>
            {details.designation}<br/>
            {details.classification}<br/>
            {details.average_lifespan}<br/>
            {details.hair_colors}<br/>
            {details.eye_colors}<br/>
            {details.skin_colors}<br/>
            {details.average_height}<br/>          
            {homeworld}<br/>
            {details.language}<br/>
          </DetailRight>       
        </DetailListContainer>
        <DetailItemListTitle>People</DetailItemListTitle><br/>
          {detailDataMap(details.people, false)}
        <DetailItemListTitle>Films</DetailItemListTitle><br/>
          {detailDataMap(details.films, true)}<br/>
				<div><Link to='/category/people'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailSpecies);