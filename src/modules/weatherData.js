import {
  dailyWeatherDisplay,
  currentWeatherDisplay,
  locationDisplay,
} from "./weatherDisplay";

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

  locationDisplay(result[0]);

  lat = result[0].lat;
  lon = result[0].lon;

  getWeatherData().catch((err) => console.log(err));
}

async function getWeatherData() {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=minutely,hourly,alerts&appid=56ee2236b5d006c6606bcbf8167154c3&units=metric",
    { mode: "cors" }
  );
  const result = await weather.json();

  currentWeatherDisplay(result);
  dailyWeatherDisplay(result);
}

export { getLocationCoordinates };
