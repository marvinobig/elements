import "./stylesheets/reset.css";
import "./stylesheets/index.scss";
import { getLocationCoordinates } from "./modules/weatherData";

// PWA functionality
if ("serviceWorker" in navigator && "PushManager" in window) {
  navigator.serviceWorker
    .register("../sw.js")
    .catch((err) => console.log("Service Worker Not Registered", err));
}

Notification.requestPermission(function (status) {
  if (status === "granted") {
    checkWeatherNotification();
  }
});

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", app);

const searchBar = document.getElementById("search");
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    app();
  }
});

function app() {
  getLocationCoordinates().catch((err) => {
    console.log(err);
  });
}

function checkWeatherNotification() {
  const notifTitle = "Elements";
  const notifBody = `Check Elements to stay up to date on the current weather`;
  const notifImg = `../public/assets/images/android-chrome-512x512.png`;
  const options = {
    body: notifBody,
    icon: notifImg,
  };
  new Notification(notifTitle, options);
  setInterval(checkWeatherNotification, 86400000);
}
