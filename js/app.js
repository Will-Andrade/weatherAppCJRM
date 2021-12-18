const citySearch = document.querySelector('[data-js="query-form"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityName = document.querySelector('[data-js="city-name"]');
const weatherIcon = document.querySelector('[data-js="weather-icon"]');
const weatherText = document.querySelector('[data-js="weather-text"]');
const temperatureMinMax = document
    .querySelector('[data-js="temperature-min-max"]');
const temperatureRealFeel = document
    .querySelector('[data-js="temperature-real"]')
const windVelocity = document.querySelector('[data-js="wind-velocity"]');
const weatherHumidity = document.querySelector('[data-js="humidity"]');

citySearch.addEventListener('submit', async e => {
    e.preventDefault();
    
    const searchQuery = e.target.city.value;

    const [{ LocalizedName }] = await getCityData(searchQuery);
    const [{ RealFeelTemperature, Temperature, TemperatureSummary, WeatherIcon, WeatherText, RelativeHumidity, Wind }] = await getCityWeather(searchQuery);

    cityName.textContent = `Clima em ${LocalizedName}`;
    cityWeatherContainer.style.display = 'block'
    weatherIcon.src = `src/icons/${WeatherIcon}.svg`;
    weatherText.textContent = `${WeatherText} ${Temperature.Metric.Value}°C`;
    temperatureMinMax.textContent = `Máxima ${TemperatureSummary.Past24HourRange.Maximum.Metric.Value}°C | Mínima ${TemperatureSummary.Past24HourRange.Minimum.Metric.Value}°C`;
    temperatureRealFeel.textContent = `Sensação Térmica ${RealFeelTemperature.Metric.Value}°C`;
    windVelocity.textContent = `${Wind.Speed.Metric.Value} km/h`
    weatherHumidity.textContent = `${RelativeHumidity}%`;
    citySearch.reset();
});
