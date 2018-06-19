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
  DetailListContainer} from '../styles/detail.style';
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
        <PageTitle>People // Detail //</PageTitle>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            <DetailItem>Gender: </DetailItem><br/>
            <DetailItem>Height: </DetailItem><br/>
            <DetailItem>Mass: </DetailItem><br/>
            <DetailItem>Hair Color: </DetailItem><br/>
            <DetailItem>Eye Color: </DetailItem><br/>
            <DetailItem>Skin Color: </DetailItem><br/>
            <DetailItem>Birth Year: </DetailItem><br/>
            <DetailItem>Homeworld: </DetailItem><br/>    
          </DetailLeft>
          <DetailRight> 
            {details.gender}<br/> 
            {details.height}<br/> 
            {details.mass}<br/> 
            {details.hair_color}<br/> 
            {details.eye_color}<br/> 
            {details.skin_color}<br/> 
            {details.birth_year}<br/> 
            {homeworld}<br/> 
          </DetailRight>     
        </DetailListContainer>
        <DetailItemListTitle>Vehicles</DetailItemListTitle><br/>
          {detailDataMap(details.vehicles, false)}
        <DetailItemListTitle>Starships</DetailItemListTitle><br/>
          {detailDataMap(details.starships, false)}
        <DetailItemListTitle>Films</DetailItemListTitle><br/>
          {detailDataMap(details.films, true)}<br/>
				<div className="back"><Link to='/people'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailPeople);