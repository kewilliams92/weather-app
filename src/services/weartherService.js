const API_KEY = '42c1f1d334e13cc0e9e8842643c79b6e';
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams ) => {
    const url = new URL(BASE_URL + '/' +infoType);
    url.search = new URLSearchParams({
        ...searchParams,
        appid: API_KEY,
        units: 'metric'
    });
    return fetch(url)
        .then(res => res.json())
};

const formatCurrentWeather = (data) => {
    let { timezone, daily, hourly } = data;
    daily = daily.slice(0, 5);
    
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name, 
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data;
    const {main: details, icon } = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, country, sunrise, sunset, icon, details, speed}
}

const getFormatedWeatherData = async (searchParams) => {
    const formatedCurrentWeather = await getWeatherData("weather", searchParams).then(formatCurrentWeather)

    const {lat, lon} = formatedCurrentWeather;

    const formatedForecastWeather = await getWeatherData("onecall", {lat, lon, exclude: "currenty,minutely,alerts", units: searchParams.units}).then(data => {
        const {hourly, daily} = data;
        return {hourly, daily}
    })

    return formatedCurrentWeather;
}

export default getFormatedWeatherData;