import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { Link } from 'react-router-dom';
import '../App.css';

const VehicleQuery =
gql`{
  vehicles{
    name
  }
}`

class Vehicles extends Component {
  render(){
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    return(
			<div>		
				<div className="pageTitle">Vehicles //</div>		                  
				{this.props.data.vehicles.map(vehicle =>
					<div className="flexChild" key={vehicle.name}>
						<div className= "flexItem">
              {vehicle.name}						
						</div>
						<div className="flexItemDetail"><Link to={`/vehicles/${encodeURIComponent(vehicle.name)}`}>+ Details</Link></div>
					</div>					
				)}				 
			</div>
    );
  }
}

export default graphql(VehicleQuery)(Vehicles);