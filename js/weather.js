const APIKey = '9mToCLrVoKdgp3mZdQZYhBXbhNDkfXQN';
const baseUrl = 'http://dataservice.accuweather.com';

const getCityData = async query => {
    try {
        const response = await fetch(`${baseUrl}/locations/v1/cities/search?apikey=${APIKey}&q=${query}`);

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

const getCityWeather = async query => {
    try {
        const [{ Key }] = await getCityData(query);
        const weatherData = await fetch(`${baseUrl}/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`)
        
        return weatherData.json()
    } catch (error) {
        console.log(error);
    }
}

getCityWeather('cuiabá')
