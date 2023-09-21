document.addEventListener('DOMContentLoaded', () => {
    fetchdata('Kolkata');
  });
function fetchdata(cityName) {
  const apiKey = '07930aa15d1080f18f4368149ab73ad3';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(apiUrl)
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => {
          const weatherContainer = document.querySelector('.weather-container');
          const weatherData = document.querySelector('.weather-data');

          const cityName = data.name;
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const WindSpeed=data.wind.speed;

          weatherData.innerHTML = `
              <h2>${cityName}</h2>
              <p>Temperature: ${temperature}°C</p>
              <p>Description: ${description}</p>
              <p>WindSpeed: ${WindSpeed}</p>
          `;
      })
      .catch((error) => {
          console.error('Error fetching weather data:', error);
          const weatherData = document.querySelector('.weather-data');
          weatherData.innerHTML = '<p>Unable to fetch weather data.</p>';
      });
}


