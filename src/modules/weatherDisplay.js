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

  icon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
  icon.alt = "current weather icon";
  temp.textContent = `${Math.round(data.current.temp)}°`;
  description.textContent = `${data.current.weather[0].description}`;
  feelsLike.textContent = `${Math.round(data.current.feels_like)}°`;
  humidity.textContent = `${data.current.humidity}%`;
  windSpeed.textContent = `${Math.round(data.current.wind_speed)} m/s`;
}

function dailyWeatherDisplay(data) {
  removePreviousDailyForecast();

  for (let i = 1; i < data.daily.length; i++) {
    const dailyCardContainer = document.getElementById("daily-forecast");

    const dailyCard = document.createElement("div");
    const dailyDay = document.createElement("p");
    const dailyIcon = document.createElement("img");
    const temp = document.createElement("p");
    const description = document.createElement("p");

    dailyCard.classList.add("daily-card");
    dailyDay.classList.add("daily-day");
    dailyIcon.classList.add("daily-icon");
    temp.classList.add("daily-temp");
    description.classList.add("daily-description");

    dailyDay.textContent = `D${i}`;
    dailyIcon.src = `https://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`;
    temp.textContent = `${Math.round(data.daily[i].temp.min)}° / ${Math.round(
      data.daily[i].temp.max
    )}°`;
    description.textContent = `${data.daily[i].weather[0].description}`;

    dailyCardContainer.appendChild(dailyCard);
    dailyCard.appendChild(dailyDay);
    dailyCard.appendChild(dailyIcon);
    dailyCard.appendChild(temp);
    dailyCard.appendChild(description);
  }
}

function removePreviousDailyForecast() {
  const previousDailyCards = document.querySelectorAll(".daily-card");

  previousDailyCards.forEach((element) => {
    if (element !== undefined) {
      element.remove();
    }
  });
}

export { locationDisplay, currentWeatherDisplay, dailyWeatherDisplay };
