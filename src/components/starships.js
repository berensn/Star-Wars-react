import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { Link } from 'react-router-dom';
import '../App.css';

const StarshipQuery = 
gql`{
  starships{
    name
  }
}`

class Starships extends Component {
  render(){
    console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    return(
			<div>		
				<div className="pageTitle">Starships //</div>		                  
				{this.props.data.starships.map(starship =>
					<div className="flexChild" key={starship.name}>
						<div className= "flexItem">
							{starship.name}						
						</div>	
						<div className="flexItemDetail"><Link to={`/starships/${starship.name}`}>+ Details</Link></div>
					</div>					
				)}				 
			</div>
    );
  }
}

export default graphql(StarshipQuery)(Starships);