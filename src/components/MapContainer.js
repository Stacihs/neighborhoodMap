import React, { Component } from 'react';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper
} from 'google-maps-react';


const API_KEY = 'AIzaSyCqO1E57agaq08dYIgt896lt9ZMqfHA5Mk';
export class MapContainer extends Component {
  state = {
    activeMarker: {},
    selectedPlace: {},
    showingInfoWindow: false,
    mapMarkers: []
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%'
    };

    const locations = [{
        "name": "Southerleigh Fine Food and Brewery",
        "position": {
          "lat": 29.4425381,
          "lng": -98.4806333
        }
      },
      {
        "name": "Hotel Emma",
        "position": {
          "lat": 29.442702,
          "lng": -98.480922
        }
      },
      {
        "name": "Blue Box Bar",
        "position": {
          "lat": 29.4434269,
          "lng": -98.4806148
        }
      },
      {
        "name": "Boiler House",
        "position": {
          "lat": 29.4428184,
          "lng": -98.4805059
        }
      },
      {
        "name": "Jazz, TX",
        "position": {
          "lat": 29.4428481,
          "lng": -98.48055771
        }
      }
    ];

    let mapMarkers = [];

    mapMarkers = locations.map( location => <Marker
      key={location.index}
      name={location.name}
      position={location.position}
    />);

    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={17}
        initialCenter={{
            lat: 29.4428476,
            lng: -98.4800684
        }}
      >
      {mapMarkers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);
