import React, { Component } from 'react';
import './App.css';
import Team from './components/Team.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Trainer!</h1>
        <Team />
      </div>
    );
  }
}

export default App;
