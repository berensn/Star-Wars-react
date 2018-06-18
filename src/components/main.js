import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Films from './films';
import People from './people';
import Planets from './planets';
import Species from './species';
import Starships from './starships';
import Vehicles from './vehicles';
import DetailPeople from './detail.people';
import DetailPlanet from './detail.planet';
import DetailSpecies from './detail.species';
import DetailVehicles from './detail.vehicles';
import DetailStarships from './detail.starships';
import DetailFilms from './detail.films';
import '../App.css';

class Main extends Component{
  render(){
    return(
      <div>        
        <div className="routerFlexContainer">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/people' component={People} />
            <Route exact path='/planets' component={Planets} />
            <Route exact path='/species' component={Species} />
            <Route exact path='/vehicles' component={Vehicles} />
            <Route exact path='/starships' component={Starships} />
            <Route exact path='/films' component={Films} />
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