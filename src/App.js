import React, { Component } from 'react';
import MapContainer from './components/MapContainer';
// import ListView from './components/ListView';
import './App.css'

class App extends Component {
  state = {
    map: null,
  }

  
  
  render() {
    return (
      <div className="App">
        <div>
          <h1>The Pearl Neighborhood - San Antonio,TX</h1>
        </div>
        <MapContainer
          map={this.state.map}
        />
        {/* <ListView
        /> */}
      </div>
    );
  }
}

export default App;
  