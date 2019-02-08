import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
// import locations from './data/locations.json'
// import ListView from './components/ListView';
import './App.css'

class App extends Component {
  state = {
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>The Pearl Neighborhood - San Antonio,TX</h1>
        </div>
        <MapContainer
        />
        {/* <ListView
        /> */}
      </div>
      
    );
  }
}

export default App;
  