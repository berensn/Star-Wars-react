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
    return(
      <DetailContainer>
        <div className="pageTitle">Species // Detail //</div>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            <DetailItem>Designation: </DetailItem><br/>
            <DetailItem>Classification: </DetailItem><br/>
            <DetailItem>Average Lifespan: </DetailItem><br/>
            <DetailItem>Hair Colors: </DetailItem><br/>
            <DetailItem>Eye Colors: </DetailItem><br/>
            <DetailItem>Skin Colors: </DetailItem><br/>
            <DetailItem>Average Height: </DetailItem><br/>
            <DetailItem>Homeworld: </DetailItem><br/>  
            <DetailItem>Language: </DetailItem><br/> 
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
          {details.people.length !== 0 ?
            details.people.map(v =>
            <li key={v.name}>{v.name}</li>
          ) : <li>None</li>}
        <DetailItemListTitle>Films</DetailItemListTitle><br/>
          {details.films.length !== 0 ?
            details.films.map(v =>
            <li key={v.title}>{v.title}</li>
          ) : <li>None</li>}<br/>
				<div><Link to='/people'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailSpecies);