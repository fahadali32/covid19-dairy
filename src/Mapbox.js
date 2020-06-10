import React from 'react';
import './style.css';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZmFoYWQyNDciLCJhIjoiY2tiNjBrbmpoMWFlZDMzcGxtN25zMWhtbiJ9.B6XwxGqjVJ5W0Tm0nhTlRg';


class Mapbox extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  lng: 94.1285,
  lat: 22.7017,
  zoom: 2
  };
}


componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      attributionControl: false
      
    });
    
    map.addControl(new mapboxgl.FullscreenControl());

    
    
    fetch("https://www.trackcorona.live/api/countries")
      .then(res => res.json())
      .then(
        (result) => {
         
          result.data.forEach(elm => {
          
          const lat = elm.latitude
          const lon = elm.longitude
          
          var popup = new mapboxgl.Popup({ closeOnClick: false })
            .setHTML('<b>location</b>:'+elm.location+'<br/><b>Confirmed:</b>'+elm.confirmed+'<br/><b>Dead</b>:'+elm.dead+'<br/><b>Recovered:</b>'+elm.recovered)
          
            var el = document.createElement('div');
            el.className = 'marker';
          
          new mapboxgl.Marker(el)
            .setLngLat([lon,lat])
            .setPopup(popup)
            .addTo(map)
          });

        },
         (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        })
  

  }

 
  
  render() {
    
  const mystyle = {
  width:'100%',
  heigth:'300px',
  };

    return(
    <div className="maparea">
    <div ref={el => this.mapContainer = el} style={mystyle}>j</div>
</div>);
  }
}

export default Mapbox;