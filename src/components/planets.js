import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { Link } from 'react-router-dom';
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
        <div className="pageTitle">Planets //</div>		                  
        {this.props.data.planets.map(planet =>
          <div className="flexChild"  key={planet.name}>
            <div className= "flexItem">
              {planet.name}						
            </div>	
            <div className="flexItemDetail"><Link to={`/planets/${encodeURIComponent(planet.name)}`}>+ Details</Link></div>
          </div>					
        )}				 
      </div>
    );
  }
}

export default graphql(PlanetQuery)(Planets);