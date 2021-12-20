const citySearch = document.querySelector('[data-js="query-form"]');
const cityWeatherContainer = document.querySelector('[data-js="city-weather"]');
const cityName = document.querySelector('[data-js="city-name"]');
const weatherIconContainer = document.querySelector('[data-js="weather-icon"]');
const weatherTextContainer = document.querySelector('[data-js="weather-text"]');
const temperatureMinMax = document
    .querySelector('[data-js="temperature-min-max"]');
const temperatureRealFeel = document
    .querySelector('[data-js="temperature-real"]');
const windVelocity = document.querySelector('[data-js="wind-velocity"]');
const weatherHumidity = document.querySelector('[data-js="humidity"]');

const generateCityWeatherCard = async searchQuery => {
    const [{ Key, LocalizedName }] = await getCityObject(searchQuery);
    const [{ 
        RealFeelTemperature,
        Temperature,
        TemperatureSummary: { Past24HourRange: { Maximum, Minimum } },
        WeatherIcon,
        WeatherText,
        RelativeHumidity,
        Wind: { Speed }
    }] = await getCityWeather(Key);

    cityWeatherContainer.style.display = 'block';
    cityName.textContent = `Clima em ${LocalizedName}`;
    weatherIconContainer.src = `src/icons/${WeatherIcon}.svg`;
    weatherTextContainer.textContent = 
        `${WeatherText} ${Temperature.Metric.Value}°C`;
    temperatureMinMax.textContent = 
        `Máxima ${Maximum.Metric.Value}°C | Mínima ${Minimum.Metric.Value}°C`;
    temperatureRealFeel.textContent = 
        `Sensação Térmica ${RealFeelTemperature.Metric.Value}°C`;
    windVelocity.textContent = `${Speed.Metric.Value} km/h`;
    weatherHumidity.textContent = `${RelativeHumidity}%`;
};

citySearch.addEventListener('submit', e => {
    e.preventDefault();
    
    const searchQuery = e.target.city.value;

    generateCityWeatherCard(searchQuery);
    citySearch.reset();
});
