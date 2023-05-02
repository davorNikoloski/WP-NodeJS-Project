//-----------------------index---------------------
const locationBtn = document.getElementById('location-btn');
locationBtn.addEventListener('click', () => {
    window.open('https://www.camping.info/en/country/macedonia', '_blank');
  });


const weatherBtn = document.getElementById('weather-btn');

weatherBtn.addEventListener('click', () => {
  console.log("da");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;

      const apiKey = '0fe4c1c4d72c7af69d5ae342f8280d8a';
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherConditions = data.weather && data.weather[0] && data.weather[0].description;
            const temperature = data.main && data.main.temp;
            const humidity = data.main && data.main.humidity;
            const windSpeed = data.wind && data.wind.speed;
            const weatherInfo = `Weather Conditions: ${weatherConditions || 'N/A'}<br>Temperature: ${temperature || 'N/A'} °C<br>Humidity: ${humidity || 'N/A'}%<br>Wind Speed: ${windSpeed || 'N/A'} m/s`;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
    .catch(error => console.error(error));
    });
  } else {
    alert('Geolocation is not supported by this browser');
  }
});