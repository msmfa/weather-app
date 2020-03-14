//API
const inputField = document.getElementById("input");
const button = document.getElementById("submit-button");
const temperature = document.querySelector(".temp");
const userLocation = document.querySelector(".location");
const description = document.querySelector(".description");
const feelsLikeDiv = document.querySelector(".feels-like");
const container = document.getElementById("container");
button.addEventListener("click", getData);

function getData() {
  let userCity = inputField.value;
  inputField.value = "";
  getWeather(userCity);
  container.style.display = "block";
}
//this doeesnt seem to work when uploading to github pages
//I think the async await has to change to then statements

async function getWeather(userCity) {
  const response = await fetch(
    `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=686435d234791159bf2ce459d109f5f8`,
    { mode: "cors" }
  );
  const data = await response.json();
  display(data);
}

function display(data) {
  console.log(data);
  const forecast = data.weather.map(item => item.description);
  const temps = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);

  feelsLikeDiv.textContent = `feels like: ${feelsLike}°`;
  userLocation.textContent = data.name;
  temperature.textContent = `${temps}°`;
  description.textContent = forecast;
}

//Date

const output = document.querySelector(".display");
const date = document.querySelector(".date");

function displayDay() {
  const today = new Date();
  const day = today.getDay();
  const daylist = ["Sun", "Mon", "Tues", "Wed ", "Thurs", "Fri", "Sat"];
  return daylist[day];
}
function displayMonth() {
  const month = new Date();
  const monthNumber = month.getMonth();
  const months = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return months[monthNumber];
}

function getDigit() {
  const date = new Date();
  const number = String(date.getDate());
  return number;
}

function displayCurrentdate() {
  date.textContent = displayDay() + " " + getDigit() + ", " + displayMonth();
}

displayCurrentdate();

//typewriter

let i = 0;
let text = "Enter your city below";
let time = 50;

function typeWritterText() {
  if (i < text.length) {
    document.getElementById("opening-title").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWritterText, time);
  }
}
typeWritterText();
