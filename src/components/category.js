import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { PageTitle } from '../styles/category.style';
import { categoryDataMap } from './global';
import '../App.css';

const UberQuery = 
gql`{
  people{
		name
  }
  planets{
    name
  }
  species{
    name
  }
  vehicles{
    name
  }
  starships{
    name
  }
  films{
    title
  }
}`
class Category extends Component {
  render(){
    var categoryData = '';
    var pageTitle = '';
    var path = '';
    var bool = false;
    //console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    //console.log(this.props.match.params.name);
    switch(this.props.match.params.name){
      case 'people': 
        categoryData = this.props.data.people;
        pageTitle = 'People';
        path = 'people';
        break;
      case 'planets': 
        categoryData = this.props.data.planets;
        pageTitle = 'Planets';
        path = 'planets';
       break; 
      case 'species': 
        categoryData = this.props.data.species;
        pageTitle = 'Species';
        path = 'species';
        break;
      case 'vehicles': 
        categoryData = this.props.data.vehicles;
        pageTitle = 'Vehicles';
        path = 'vehicles';
        break;
      case 'starships': 
        categoryData = this.props.data.starships;
        pageTitle = 'Starships';
        path = 'starships';
        break;
      case 'films': 
        categoryData = this.props.data.films;
        pageTitle = 'Films';
        path = 'films';
        bool = true;
        break;
      default:
        console.log('default');
        break;
    }
    return(
			<div>		
				<PageTitle>{pageTitle} &#47;&#47;</PageTitle>    	                  
        {categoryDataMap(categoryData, bool, path)}
			</div>
    );
  }
}

export default graphql(UberQuery)(Category);