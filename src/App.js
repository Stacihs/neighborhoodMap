import React, { Component } from 'react';
import MapView from './components/MapView';
// import ListView from '.components/ListView';  
import './App.css'

class App extends Component {
  state = {
    lat: 29.4428476,
    lng: -98.4800684
  }
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>The Pearl Neighborhood</h1>
          <h2>San Antonio, TX</h2>
        </div>
        <MapView
        />
        {/* <ListView
        /> */}
      </div>
      
    );
  }
}

export default App;
  