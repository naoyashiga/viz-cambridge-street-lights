import mapboxgl from 'mapbox-gl'
const d3 = require('d3');

class Viz {
  constructor() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibmFveWFzaGlnYSIsImEiOiJjaXQzaHowdWIwMDBqMm50ZHI5NHVlMWxxIn0.f3mzT9G6kQUy5Kgangtc9g';

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/dark-v9',
      zoom: 14,
      pitch: 60,
      center: [-71.1168604, 42.3767846]
    });

    d3.json('./assets/INFRA_StreetLights.geojson', (error, geojson) => {
      // console.log(geojson);

      this.map.on('load', () => {

        this.map.addSource('lights', {
          'type': 'geojson',
          'data': geojson
        });

        this.map.addLayer({
          'id': 'lights',
          'type': 'circle',
          'source': 'lights',
          'paint': {
            'circle-radius': 2,
            'circle-color': "#F8F89E"
            }
          });
        });
      })
    }
  }

  new Viz()
