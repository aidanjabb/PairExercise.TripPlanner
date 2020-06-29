//console.log("YO - index.js");
const mapboxgl = require("mapbox-gl");
const marker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoidHdlYXZlcjEiLCJhIjoiY2tjMG9sbjlyMTNrdDJ5cGo4Y2drZjdoMSJ9.PiPG_QbES5WqNLiebU2r7A";

marker(-74.009, 40.705, 'hotel');

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v11" // mapbox has lots of different map styles available.
});
