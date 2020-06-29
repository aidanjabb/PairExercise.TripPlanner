const mapboxgl = require("mapbox-gl");

module.exports = function buildMarker(long, lat, type){
    let markerDom = document.createElement('div');
    markerDom.style.width = "32px";
    markerDom.style.height = "39px";
   
    if (type === "hotel") {
        markerDom.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    } else if (type === "restaurant") {
        markerDom.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    } else if (type == "activity") {
        markerDom.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }

    let marker = new mapboxgl.Marker(markerDom).setLngLat([long, lat]);
    return marker;
}
