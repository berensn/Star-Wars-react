import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { categoryDataMap } from './global';
import { PageTitle } from '../styles/category.style';
import '../App.css';

const FilmQuery = 
gql`{
  films{
    title
  }
}`

class Films extends Component {
  render(){
    //console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    return(
			<div>		
				<PageTitle>Films //</PageTitle>		                  
				{categoryDataMap(this.props.data.films, true, 'films')}				 
     </div>
    );
  }
}

export default graphql(FilmQuery)(Films);