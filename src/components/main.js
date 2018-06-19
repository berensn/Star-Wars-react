import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
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
            <Route component={Home} />
          </Switch>
        </div>
      </div>        
    );
  }
}

export default Main;