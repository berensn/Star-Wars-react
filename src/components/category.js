import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { Redirect } from 'react-router-dom';
import { PageTitle } from '../styles/category.style';
import { categoryDataMap, firstLetterUpper } from './global';
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
    let categoryData = {empty: true};
    let pageTitle = '';
    let bool = false;
    //console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    //console.log(this.props.match.params.name);
    switch(this.props.match.params.name){
      case 'people': 
        categoryData = this.props.data.people;
        break;
      case 'planets': 
        categoryData = this.props.data.planets;
       break; 
      case 'species': 
        categoryData = this.props.data.species;
        break;
      case 'vehicles': 
        categoryData = this.props.data.vehicles;
        break;
      case 'starships': 
        categoryData = this.props.data.starships;
        break;
      case 'films': 
        categoryData = this.props.data.films;
        bool = true;
        break;
      default:
        console.log('default');
        break;
    }
    if (categoryData.empty){
      return <Redirect to="/home" />
    }
    return(
			<div>		
				<PageTitle>{firstLetterUpper(this.props.match.params.name)} &#47;&#47;</PageTitle>    	                  
        {categoryDataMap(categoryData, bool, this.props.match.params.name)}
			</div>
    );
  }
}

export default graphql(UberQuery)(Category);