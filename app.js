// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const weatherApi = {
  key: "bab281d79e5f1e9755a68d754cc313e7",
  baseUrl: "https://api.openweathermap.org/data/2.5/weather", 
}

const searchInputBox = document.getElementById('input-box');

// Event Listener Function on keypress
searchInputBox.addEventListener('keypress', (event) => {
  
  if(event.keyCode == 13) {
      console.log(searchInputBox.value);
      getWeatherReport(searchInputBox.value);
      document.querySelector('.weather-body').style.display = "block";
  }

});

// Get Weather Report
function getWeatherReport(city) {
  fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
  .then(weather => {
      return weather.json();
  }).then(showWeatherReport);
}

// Show Weather Report
function showWeatherReport(weather){
  console.log(weather);

  let city = document.getElementById('city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let temperature = document.getElementById('temp');
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;
}