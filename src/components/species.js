import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { categoryDataMap } from './global';
import { PageTitle } from '../styles/category.style';
import '../App.css';

const SpeciesQuery = 
gql`{
  species{
    name
  }
}`

class Species extends Component {
  render(){
    //console.log(this.props);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
		}
    return(
			<div>		
				<PageTitle>Species //</PageTitle>		                  
				{categoryDataMap(this.props.data.species, false, 'species')}				 
			</div>
    );
  }
}

export default graphql(SpeciesQuery)(Species);