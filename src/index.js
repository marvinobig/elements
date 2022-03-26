import "./stylesheets/reset.css";
import "./stylesheets/index.scss";
import { getLocationCoordinates } from "./modules/weatherData";

const searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", app);

function app() {
  getLocationCoordinates().catch((err) => {
    console.log(err);
  });
}
