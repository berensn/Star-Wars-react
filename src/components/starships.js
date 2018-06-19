import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { categoryDataMap } from './global';
import { PageTitle } from '../styles/category.style';
import '../App.css';

const StarshipQuery = 
gql`{
  starships{
    name
  }
}`

class Starships extends Component {
  render(){
    //console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    return(
			<div>		
				<PageTitle>Starships //</PageTitle>		                  
				{categoryDataMap(this.props.data.starships, false, 'starships')}				 
			</div>
    );
  }
}

export default graphql(StarshipQuery)(Starships);