let lat = 0;
let lon = 0;

async function getLocationCoordinates() {
  const location = document.getElementById("search");

  const coordinates = await fetch(
    "http://api.openweathermap.org/geo/1.0/direct?q=" +
      location.value +
      "&limit=1&appid=56ee2236b5d006c6606bcbf8167154c3",
    { mode: "cors" }
  );

  const result = await coordinates.json();

  lat = result[0].lat;
  lon = result[0].lon;
  console.log(result, lat, lon);
}

export { getLocationCoordinates, lat, lon };
