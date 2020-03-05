//API
const inputField = document.getElementById("input");
const button = document.getElementById("submit-button");
const display = document.querySelector(".display");

button.addEventListener("click", getData);

function getData() {
  let userCity = inputField.value;
  getWeather(userCity);
}

async function getWeather(userCity) {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=686435d234791159bf2ce459d109f5f8`,
    { mode: "cors" }
  );
  const data = await response.json();
  display.textContent = data.main.temp;
}
