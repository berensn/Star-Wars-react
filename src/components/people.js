import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
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
				<div className="pageTitle">People //</div>		                  
				{this.props.data.people.map(person =>
					<div className="flexChild" key={person.name}>
						<div className= "flexItem" >
							{person.name}						
						</div>	
						<div className="flexItemDetail"><Link to={`/people/${encodeURIComponent(person.name)}`}>+ Details</Link></div>
					</div>					
				)}				 
			</div>
		);
	}
}

export default graphql(PeopleQuery)(People);