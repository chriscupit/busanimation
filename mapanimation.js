// This array contains the coordinates for all bus stops between MIT and Harvard
let displayMessage = document.getElementById("message");
const busStops = [
    [-71.093729, 42.359244],
    [-71.094915, 42.360175],
    [-71.0958, 42.360698],
    [-71.099558, 42.362953],
    [-71.103476, 42.365248],
    [-71.106067, 42.366806],
    [-71.108717, 42.368355],
    [-71.110799, 42.369192],
    [-71.113095, 42.370218],
    [-71.115476, 42.372085],
    [-71.117585, 42.373016],
    [-71.118625, 42.374863],
    [-71.117585, 42.373016],
    [-71.115476, 42.372085],
    [-71.113095, 42.370218],
    [-71.110799, 42.369192],
    [-71.108717, 42.368355],
    [-71.106067, 42.366806],
    [-71.103476, 42.365248],
    [-71.099558, 42.362953],
    [-71.0958, 42.360698],
    [-71.094915, 42.360175],
    [-71.093729, 42.359244],    
  ];
  
  // TODO: add your own access token
  mapboxgl.accessToken = 'pk.eyJ1IjoiY2N1cGl0IiwiYSI6ImNsdGt5c2o3ajE4OWYyaWs5eG1veGczbHMifQ.6vsMwaM-mQWVxqNp3w53PQ';



  // This is the map instance
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-71.104081, 42.365554],
    zoom: 14,
  });
//Sets the marker position and color
  var marker = new mapboxgl.Marker({"color": "orange"})
  .setLngLat([-71.093729, 42.359244])
  .addTo(map);

  
  // TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
  
  // counter here represents the index of the current bus stop
  let counter = 0;
  function move() {
    
    setTimeout(() =>{
      if(counter >= busStops.length)window.alert("You have arrived back at MIT.");
      marker.setLngLat(busStops[counter]);
      counter++;
      move();
    },1000);

  }
    // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
    // Use counter to access bus stops in the array busStops
    // Make sure you call move() after you increment the counter.
  