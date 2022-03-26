function locationDisplay(data) {
  const locationPara = document.getElementById("location");
  locationPara.textContent = `${data.name} / ${data.state}`;
}

function currentWeatherDisplay(data) {
  const icon = document.getElementById("current-weather-icon");
  const temp = document.getElementById("temp");
  const description = document.getElementById("current-weather-description");
  const feelsLike = document.getElementById("feels-like");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("wind-speed");

  icon.src = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
  icon.alt = "current weather icon";
  temp.textContent = `${data.current.temp}°`;
  description.textContent = `${data.current.weather[0].description}`;
  feelsLike.textContent = `${data.current.feels_like}°`;
  humidity.textContent = `${data.current.humidity}%`;
  windSpeed.textContent = `${data.current.wind_speed} mph`
}

export { locationDisplay, currentWeatherDisplay };
