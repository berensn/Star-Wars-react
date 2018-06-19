import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import DetailPeople from './detail.people';
import DetailPlanet from './detail.planet';
import DetailSpecies from './detail.species';
import DetailVehicles from './detail.vehicles';
import DetailStarships from './detail.starships';
import DetailFilms from './detail.films';
import Category from './category';
import '../App.css';

class Main extends Component{
  render(){
    return(
      <div>        
        <div className="routerFlexContainer">
          <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/category/:name' component={Category} />
            <Route path='/people/:name' component={DetailPeople} />
            <Route path='/planets/:name' component={DetailPlanet} />
            <Route path='/species/:name' component={DetailSpecies} />
            <Route path='/vehicles/:name' component={DetailVehicles} />
            <Route path='/starships/:name' component={DetailStarships} />
            <Route path='/films/:name' component={DetailFilms} />
            <Route component={Home} />
          </Switch>
        </div>
      </div>        
    );
  }
}

export default Main;