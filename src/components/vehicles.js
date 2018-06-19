import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { categoryDataMap } from './global';
import { PageTitle } from '../styles/category.style';
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
				<PageTitle>Vehicles //</PageTitle>		                  
				{categoryDataMap(this.props.data.vehicles, false, 'vehicles')}
			</div>
    );
  }
}

export default graphql(VehicleQuery)(Vehicles);