//API
const inputField = document.getElementById("input");
const button = document.getElementById("submit-button");
const temperature = document.querySelector(".temp");
const userLocation = document.querySelector(".location");
const description = document.querySelector(".description");

button.addEventListener("click", getData);

function getData() {
  let userCity = inputField.value;
  inputField.value = "";
  getWeather(userCity);
}

async function getWeather(userCity) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=686435d234791159bf2ce459d109f5f8`,
    { mode: "cors" }
  );
  const data = await response.json();
  display(data);
}

function display(data) {
  console.log(data);
  const forecast = data.weather.map(item => item.description);

  let temps = Math.round(data.main.temp);
  userLocation.textContent = data.name;
  temperature.textContent = `${temps}°`;
  description.textContent = forecast;
}
