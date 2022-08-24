import React, { Component } from 'react';
import Die from './Die.js'
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <Die face="five"/>
      <Die face="three"/>
    </div>
  }
}

export default App;
