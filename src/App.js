import React, { Component } from 'react';
import MapView from './components/MapView';
import locations from './data/locations';
import './App.css';

class App extends Component {
  state = {
    lat: 29.4428476,
    lon: -98.4800684,
    zoom: 14,
    locations: locations
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>The Pearl Neighborhood</h1>
          <h2>San Antonio, TX</h2>
        </div>
        <MapView
          lat={this.state.lat}
          lon={this.state.lon}
          zoom={this.state.zoom}
        />
      </div>
      
    );
  }
}

export default App;
  