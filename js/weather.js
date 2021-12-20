const baseURL = 'https://dataservice.accuweather.com';
const APIKey = 'Ry4yHLTSEAlQdX31AehIozwvVSbefGG1';

const getCityURL = cityName => 
    `${baseURL}/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`;

const getWeatherURL = cityKey => 
    `${baseURL}/currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br&details=true`;

const fetchData = async endpoint => {
    try {
        const response = await fetch(endpoint);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

const getCityObject = cityName => fetchData(getCityURL(cityName));
const getCityWeather = cityKey => fetchData(getWeatherURL(cityKey));
