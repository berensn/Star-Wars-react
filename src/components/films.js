import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import  gql  from 'graphql-tag';
import { Link } from 'react-router-dom';
import '../App.css';

const FilmQuery = 
gql`{
  films{
    title
  }
}`

class Films extends Component {
  render(){
    console.log(this.props.data);
    if (this.props.data.loading === true){
			return <div>Loading...</div>;
    }
    return(
			<div>		
				<div className="pageTitle">Films //</div>		                  
				{this.props.data.films.map(film =>
					<div className="flexChild" key={film.title}>
						<div className= "flexItem">
							{film.title}						
						</div>	
						<div className="flexItemDetail"><Link to={`/films/${film.title}`}>+ Details</Link></div>
					</div>					
				)}				 
			</div>
    );
  }
}

export default graphql(FilmQuery)(Films);