import React, { Component } from 'react';
import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import Dogs from './Components/Dogs/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route exact path="/" component={Dogs} />
        </Router>
      </div>
    );
  }
}

export default App;
