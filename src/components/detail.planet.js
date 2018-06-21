import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link, Redirect } from 'react-router-dom';
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
    let details = {empty: true};
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }

    this.props.data.planets.forEach(s =>{
      if (s.name === decodeURIComponent(this.props.match.params.name)){
        details = s;
        //console.log(details);
      } 
    });
    if (details.empty){
      return <Redirect to="/home" />
    }
    return(
      <DetailContainer>
        <PageTitle>Planet // Detail //</PageTitle>
        <DetailPageTitle>
          {details.name}
          <br/>
        </DetailPageTitle>
        <DetailListContainer>
          <DetailLeft>
            <DetailItem>Gravity:</DetailItem><br/>
            <DetailItem>Population:</DetailItem><br/>
            <DetailItem>Diameter:</DetailItem><br/>
            <DetailItem>Terrain:</DetailItem><br/>
            <DetailItem>Orbital Period:</DetailItem><br/> 
            <DetailItem>Rotation Period:</DetailItem><br/>
            <DetailItem>Surface Water:</DetailItem><br/>
            <DetailItem>Climate:</DetailItem><br/>        
          </DetailLeft>
          <DetailRight>
            {details.gravity}<br/>
            {details.population}<br/>
            {details.diameter}<br/>
            {details.terrain}<br/>
            {details.orbital_period}<br/>
            {details.rotation_period}<br/>
            {details.surface_water}<br/>
            {details.climate}<br/> 
          </DetailRight>
        </DetailListContainer>
        <DetailItemListTitle>Residents</DetailItemListTitle><br/>
        {detailDataMap(details.residents, false)}
        <DetailItemListTitle>Films</DetailItemListTitle><br/>
        {detailDataMap(details.films, true)}<br/>
				<div><Link to='/category/planets'>Back</Link></div>
			</DetailContainer>
    );
  }
}

export default graphql(DetailQuery)(DetailPlanet);