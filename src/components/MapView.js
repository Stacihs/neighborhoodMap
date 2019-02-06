import React, { Component } from 'react';
import {Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

const mapKey = 'AIzaSyA3THyJjtkXAsI9yRvIMcAAjuzFKSkUqKI';


export class MapContainer extends Component {
  render() {
    return (
        <Map
          google={this.props.google}
          style={mapStyles}
          zoom={15}
          initialCenter={{
              lat: 29.4428476,
              lng: -98.4800684
          }}
        />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: mapKey
})(MapContainer);