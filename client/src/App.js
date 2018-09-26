import React, { Component } from 'react';
import Repertoire from './components/Repertoire'
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Quatuor</h1>
        <h2>Place to organize your repertoire</h2>
        < Repertoire />
      </div>
    );
  }
}

export default App;
