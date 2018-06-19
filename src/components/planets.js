import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { categoryDataMap } from './global';
import { PageTitle } from '../styles/category.style';
import '../App.css';

const PlanetQuery = 
gql`{
  planets{
    name
  }
}`

class Planets extends Component {
  render(){
    //console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
		}
    return(
      <div>		
        <PageTitle>Planets //</PageTitle>		                  
        {categoryDataMap(this.props.data.planets, false, 'planets')}				 
      </div>
    );
  }
}

export default graphql(PlanetQuery)(Planets);