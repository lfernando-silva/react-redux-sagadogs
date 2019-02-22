import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dogs from './Components/Dogs/index';
import Breeds from './Components/Breeds/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Dogs} />
            <Route exact path="/breeds" component={Breeds} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
