import mapboxgl from 'mapbox-gl'
const d3 = require('d3');

class Viz {
  constructor() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibmFveWFzaGlnYSIsImEiOiJjaXQzaHowdWIwMDBqMm50ZHI5NHVlMWxxIn0.f3mzT9G6kQUy5Kgangtc9g';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/light-v9',
      zoom: 12,
      center: [-122.447303, 37.753574]
    });

  }
}

new Viz()
