function displayWeatherInfo(response) {
  let cityElement = document.querySelector("#current-city");
  let city = response.data.city;
  cityElement.innerHTML = city;

  let weatherElement = document.querySelector("#current-condition");
  weatherElement.innerHTML = response.data.condition.description;

  let humidityElement = document.querySelector("#current-humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;

  let windElement = document.querySelector("#current-wind");
  let wind = response.data.wind.speed;
  wind = Math.round(((wind * 3600) / 1000) * 10) / 10;
  windElement.innerHTML = `${wind}km/h`;

  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#current-temperature");
  temperatureElement.innerHTML = `${temperature}`;
}

function search(event) {
  event.preventDefault();
  let searchedInputElement = document.querySelector("#search-input");
  let city = searchedInputElement.value;
  let apiKey = "c450930fa53b90f8c5ab74d6t08ao678";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherInfo);
}

function formatCurrentDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

let currentDate = new Date();
let currentDateElement = document.querySelector("#current-date");
currentDateElement.innerHTML = formatCurrentDate(currentDate);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
