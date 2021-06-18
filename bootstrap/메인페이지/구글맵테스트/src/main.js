// Initialize and add the map
function initMap() {
  // The location
  const seoul = { lat: 37.541, lng: 126.986 };
  // The map, centered
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: seoul,
  });

  /* =======================[[ 위도, 경도 집합체 표시 ]]========================= */
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  /* =======================[[ 내위치 가져오기 ]]========================= */
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Click here get my position";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

/* MarkerClusterer 위치 */
const locations = [
  { lat: 37.53, lng: 126.988 },
  { lat: 37.53, lng: 126.988 },
  { lat: 37.54, lng: 126.97 },
  { lat: 37.54, lng: 126.97 },
  { lat: 37.523, lng: 126.95 },
  { lat: 37.523, lng: 126.95 },
  { lat: 37.545, lng: 126.886 },
  { lat: 37.545, lng: 126.886 },
  { lat: 37.545, lng: 126.886 },
  { lat: 37.533, lng: 126.77 },
  { lat: 37.533, lng: 126.77 },
  { lat: 37.52, lng: 126.955 },
  { lat: 37.52, lng: 126.955 },
  { lat: 37.52, lng: 126.955 },
];
