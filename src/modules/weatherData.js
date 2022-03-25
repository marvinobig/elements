import { lat, lon } from "./locationCoordinates";

async function getWeatherData() {
  const weather = await fetch(
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      lat +
      "&lon=" +
      lon +
      "&exclude=minutely,hourly,alerts&appid=56ee2236b5d006c6606bcbf8167154c3",
      { mode: "cors" }
  );
  const result = await weather.json();
  console.log(result);
}

export { getWeatherData };
