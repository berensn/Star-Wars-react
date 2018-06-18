import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { Link } from 'react-router-dom';
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
				<div className="pageTitle">Species //</div>		                  
				{this.props.data.species.map(speci =>
					<div className="flexChild" key={speci.name}>
						<div className= "flexItem">
							{speci.name}						
						</div>	
						<div className="flexItemDetail"><Link to={`/species/${encodeURIComponent(speci.name)}`}>+ Details</Link></div>
					</div>					
				)}				 
			</div>
    );
  }
}

export default graphql(SpeciesQuery)(Species);