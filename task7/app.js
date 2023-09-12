document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("searchButton");
  const cityName = document.getElementById("cityName");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const weatherInfo = document.querySelector(".weather-info");

  searchButton.addEventListener("click", function () {
      const cityInput = document.getElementById("cityInput").value;

      // You should replace 'YOUR_API_KEY' with your actual API key.
      const apiKey = '5d335de7b4273cd3fb64b5a3788bc05c';
      const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

      fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
              cityName.textContent = data.name;
              temperature.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
              description.textContent = data.weather[0].description;
              weatherInfo.style.display = "block";
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
          });
  });
});
