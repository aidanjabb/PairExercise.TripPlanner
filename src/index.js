const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoidHdlYXZlcjEiLCJhIjoiY2tjMG9sbjlyMTNrdDJ5cGo4Y2drZjdoMSJ9.PiPG_QbES5WqNLiebU2r7A";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // Fullstack NY coordinates
  zoom: 12, 
  style: "mapbox://styles/mapbox/streets-v11" // can be changed
});

const marker1 = buildMarker(-74.009, 40.705, 'hotel');
const marker2 = buildMarker(-74.010, 40.7051, 'restaurant');
const marker3 = buildMarker(-74.011, 40.7052, 'activity');

marker1.addTo(map);
marker2.addTo(map);
marker3.addTo(map);
