import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { categoryDataMap } from './global';
import { PageTitle } from '../styles/category.style';
import '../App.css';

const PeopleQuery = 
gql`{
	people{
		name
	}
}`

class People extends Component {
	render(){
		console.log(this.props);
		if (this.props.data.loading === true){
			return <div>Loading...</div>;
		}
		return (
			<div>		
				<PageTitle>People //</PageTitle>		                  
				{categoryDataMap(this.props.data.people, false, 'people')}				 
     </div>
		);
	}
}

export default graphql(PeopleQuery)(People);