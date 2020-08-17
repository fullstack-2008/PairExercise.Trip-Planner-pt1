console.log('Index.js is running')

import mapboxgl from "mapbox-gl";


mapboxgl.accessToken = "pk.eyJ1IjoiZnVsbHN0YWNrLTIwMDgiLCJhIjoiY2tkeXFraDUwMnBxYjJ4cGJtZmF5c2s4byJ9.Yhz_-ANIjP9q9gvtihcAug";

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });


const domElem = document.createElement('div')

domElem.style.width = "25px";
domElem.style.height = "25px";
domElem.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// domElem.style.zIndex = 2;

new mapboxgl.Marker(domElem).setLngLat([-74.009, 40.705]).addTo(map);


  