/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/stylesheets/index.scss":
/*!************************************!*\
  !*** ./src/stylesheets/index.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/stylesheets/reset.css":
/*!***********************************!*\
  !*** ./src/stylesheets/reset.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/weatherData.js":
/*!************************************!*\
  !*** ./src/modules/weatherData.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocationCoordinates": () => (/* binding */ getLocationCoordinates)
/* harmony export */ });
/* harmony import */ var _weatherDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherDisplay */ "./src/modules/weatherDisplay.js");


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

  (0,_weatherDisplay__WEBPACK_IMPORTED_MODULE_0__.locationDisplay)(result[0])

  lat = result[0].lat;
  lon = result[0].lon;

  getWeatherData().catch(err => console.log(err));
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

  (0,_weatherDisplay__WEBPACK_IMPORTED_MODULE_0__.currentWeatherDisplay)(result);
  (0,_weatherDisplay__WEBPACK_IMPORTED_MODULE_0__.dailyWeatherDisplay)(result);
}




/***/ }),

/***/ "./src/modules/weatherDisplay.js":
/*!***************************************!*\
  !*** ./src/modules/weatherDisplay.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentWeatherDisplay": () => (/* binding */ currentWeatherDisplay),
/* harmony export */   "dailyWeatherDisplay": () => (/* binding */ dailyWeatherDisplay),
/* harmony export */   "locationDisplay": () => (/* binding */ locationDisplay)
/* harmony export */ });
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
    dailyIcon.src = `http://openweathermap.org/img/w/${data.daily[i].weather[0].icon}.png`;
    temp.textContent = `${Math.round(data.daily[i].temp.min)}° / ${Math.round(data.daily[i].temp.max)}°`;
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




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/reset.css */ "./src/stylesheets/reset.css");
/* harmony import */ var _stylesheets_index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheets/index.scss */ "./src/stylesheets/index.scss");
/* harmony import */ var _modules_weatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/weatherData */ "./src/modules/weatherData.js");




const searchBtn = document.getElementById("submit");
searchBtn.addEventListener("click", app);

function app() {
  (0,_modules_weatherData__WEBPACK_IMPORTED_MODULE_2__.getLocationCoordinates)().catch((err) => {
    console.log(err);
  });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQThGOztBQUU5RjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7O0FBRUEsRUFBRSxnRUFBZTs7QUFFakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUEsRUFBRSxzRUFBcUI7QUFDdkIsRUFBRSxvRUFBbUI7QUFDckI7O0FBRWtDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3hDbEM7QUFDQTtBQUNBLGdDQUFnQyxXQUFXLElBQUksV0FBVztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQsNkJBQTZCO0FBQzlFO0FBQ0Esd0JBQXdCLDhCQUE4QjtBQUN0RCwrQkFBK0Isb0NBQW9DO0FBQ25FLDZCQUE2QixvQ0FBb0M7QUFDakUsNEJBQTRCLHNCQUFzQjtBQUNsRCw2QkFBNkIscUNBQXFDO0FBQ2xFOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHVCQUF1QjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCLEVBQUU7QUFDakMsdURBQXVELDhCQUE4QjtBQUNyRiwwQkFBMEIsbUNBQW1DLE1BQU0sbUNBQW1DO0FBQ3RHLGlDQUFpQyxxQ0FBcUM7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRXVFOzs7Ozs7O1VDL0R2RTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOaUM7QUFDQztBQUM2Qjs7QUFFL0Q7QUFDQTs7QUFFQTtBQUNBLEVBQUUsNEVBQXNCO0FBQ3hCO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWxlbWVudHMvLi9zcmMvc3R5bGVzaGVldHMvaW5kZXguc2Nzcz9iZTE2Iiwid2VicGFjazovL2VsZW1lbnRzLy4vc3JjL3N0eWxlc2hlZXRzL3Jlc2V0LmNzcz9lMzk1Iiwid2VicGFjazovL2VsZW1lbnRzLy4vc3JjL21vZHVsZXMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vZWxlbWVudHMvLi9zcmMvbW9kdWxlcy93ZWF0aGVyRGlzcGxheS5qcyIsIndlYnBhY2s6Ly9lbGVtZW50cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9lbGVtZW50cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZWxlbWVudHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9lbGVtZW50cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2VsZW1lbnRzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGRhaWx5V2VhdGhlckRpc3BsYXksIGN1cnJlbnRXZWF0aGVyRGlzcGxheSwgbG9jYXRpb25EaXNwbGF5IH0gZnJvbSBcIi4vd2VhdGhlckRpc3BsYXlcIlxuXG5sZXQgbGF0ID0gMDtcbmxldCBsb24gPSAwO1xuXG5hc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbkNvb3JkaW5hdGVzKCkge1xuICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoXCIpO1xuXG4gIGNvbnN0IGNvb3JkaW5hdGVzID0gYXdhaXQgZmV0Y2goXG4gICAgXCJodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPVwiICtcbiAgICAgIGxvY2F0aW9uLnZhbHVlICtcbiAgICAgIFwiJmxpbWl0PTEmYXBwaWQ9NTZlZTIyMzZiNWQwMDZjNjYwNmJjYmY4MTY3MTU0YzNcIixcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb29yZGluYXRlcy5qc29uKCk7XG5cbiAgbG9jYXRpb25EaXNwbGF5KHJlc3VsdFswXSlcblxuICBsYXQgPSByZXN1bHRbMF0ubGF0O1xuICBsb24gPSByZXN1bHRbMF0ubG9uO1xuXG4gIGdldFdlYXRoZXJEYXRhKCkuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YSgpIHtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgIFwiaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PVwiICtcbiAgICAgIGxhdCArXG4gICAgICBcIiZsb249XCIgK1xuICAgICAgbG9uICtcbiAgICAgIFwiJmV4Y2x1ZGU9bWludXRlbHksaG91cmx5LGFsZXJ0cyZhcHBpZD01NmVlMjIzNmI1ZDAwNmM2NjA2YmNiZjgxNjcxNTRjMyZ1bml0cz1tZXRyaWNcIixcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgd2VhdGhlci5qc29uKCk7XG5cbiAgY3VycmVudFdlYXRoZXJEaXNwbGF5KHJlc3VsdCk7XG4gIGRhaWx5V2VhdGhlckRpc3BsYXkocmVzdWx0KTtcbn1cblxuZXhwb3J0IHsgZ2V0TG9jYXRpb25Db29yZGluYXRlcyB9O1xuIiwiZnVuY3Rpb24gbG9jYXRpb25EaXNwbGF5KGRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb25QYXJhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblwiKTtcbiAgbG9jYXRpb25QYXJhLnRleHRDb250ZW50ID0gYCR7ZGF0YS5uYW1lfSAvICR7ZGF0YS5zdGF0ZX1gO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50V2VhdGhlckRpc3BsYXkoZGF0YSkge1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50LXdlYXRoZXItaWNvblwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnQtd2VhdGhlci1kZXNjcmlwdGlvblwiKTtcbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlXCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaHVtaWRpdHlcIik7XG4gIGNvbnN0IHdpbmRTcGVlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZC1zcGVlZFwiKTtcblxuICBpY29uLnNyYyA9IGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmljb259QDJ4LnBuZ2A7XG4gIGljb24uYWx0ID0gXCJjdXJyZW50IHdlYXRoZXIgaWNvblwiO1xuICB0ZW1wLnRleHRDb250ZW50ID0gYCR7TWF0aC5yb3VuZChkYXRhLmN1cnJlbnQudGVtcCl9wrBgO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEuY3VycmVudC53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufWA7XG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LmZlZWxzX2xpa2UpfcKwYDtcbiAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSBgJHtkYXRhLmN1cnJlbnQuaHVtaWRpdHl9JWA7XG4gIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGAke01hdGgucm91bmQoZGF0YS5jdXJyZW50LndpbmRfc3BlZWQpfSBtL3NgO1xufVxuXG5mdW5jdGlvbiBkYWlseVdlYXRoZXJEaXNwbGF5KGRhdGEpIHtcbiAgcmVtb3ZlUHJldmlvdXNEYWlseUZvcmVjYXN0KCk7XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBkYXRhLmRhaWx5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGFpbHlDYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYWlseS1mb3JlY2FzdFwiKTtcblxuICAgIGNvbnN0IGRhaWx5Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgZGFpbHlEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkYWlseUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgZGFpbHlDYXJkLmNsYXNzTGlzdC5hZGQoXCJkYWlseS1jYXJkXCIpO1xuICAgIGRhaWx5RGF5LmNsYXNzTGlzdC5hZGQoXCJkYWlseS1kYXlcIik7XG4gICAgZGFpbHlJY29uLmNsYXNzTGlzdC5hZGQoXCJkYWlseS1pY29uXCIpO1xuICAgIHRlbXAuY2xhc3NMaXN0LmFkZChcImRhaWx5LXRlbXBcIik7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImRhaWx5LWRlc2NyaXB0aW9uXCIpO1xuXG4gICAgZGFpbHlEYXkudGV4dENvbnRlbnQgPSBgRCR7aX1gO1xuICAgIGRhaWx5SWNvbi5zcmMgPSBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvdy8ke2RhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5pY29ufS5wbmdgO1xuICAgIHRlbXAudGV4dENvbnRlbnQgPSBgJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbaV0udGVtcC5taW4pfcKwIC8gJHtNYXRoLnJvdW5kKGRhdGEuZGFpbHlbaV0udGVtcC5tYXgpfcKwYDtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke2RhdGEuZGFpbHlbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbn1gO1xuXG4gICAgZGFpbHlDYXJkQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhaWx5Q2FyZCk7XG4gICAgZGFpbHlDYXJkLmFwcGVuZENoaWxkKGRhaWx5RGF5KTtcbiAgICBkYWlseUNhcmQuYXBwZW5kQ2hpbGQoZGFpbHlJY29uKTtcbiAgICBkYWlseUNhcmQuYXBwZW5kQ2hpbGQodGVtcCk7XG4gICAgZGFpbHlDYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVQcmV2aW91c0RhaWx5Rm9yZWNhc3QoKSB7XG4gIGNvbnN0IHByZXZpb3VzRGFpbHlDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGFpbHktY2FyZFwiKTtcblxuICBwcmV2aW91c0RhaWx5Q2FyZHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgIGlmIChlbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IHsgbG9jYXRpb25EaXNwbGF5LCBjdXJyZW50V2VhdGhlckRpc3BsYXksIGRhaWx5V2VhdGhlckRpc3BsYXkgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9zdHlsZXNoZWV0cy9yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4vc3R5bGVzaGVldHMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IHsgZ2V0TG9jYXRpb25Db29yZGluYXRlcyB9IGZyb20gXCIuL21vZHVsZXMvd2VhdGhlckRhdGFcIjtcblxuY29uc3Qgc2VhcmNoQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXRcIik7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcCk7XG5cbmZ1bmN0aW9uIGFwcCgpIHtcbiAgZ2V0TG9jYXRpb25Db29yZGluYXRlcygpLmNhdGNoKChlcnIpID0+IHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==