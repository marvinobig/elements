import "./reset.css";
import "./index.scss";
import { getLocationCoordinates } from "./modules/locationCoordinates";
import { getWeatherData } from "./modules/weatherData";

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", app);


function app() {
    getLocationCoordinates();
    getWeatherData();
}