import { 
    temperature_current,
    wind_speed_current,
    ppm,
    weather_conditions,
    wind_speed_hour_meaning_container,
    precipitation_probability_hour_meaning_container,
    temperature_hour_meaning_container,
    general_weather_hour_conditions_meaning_container,
} from "../constants/dom-elements.js";

import { getWeatherCodes } from '../i18n/translation.js'

export function updateWeatherDisplay() {
    const localizedCodes = getWeatherCodes();

    if (Object.keys(localizedCodes).length === 0) {
        setTimeout(updateWeatherDisplay, 20);
        return;
    }
    const weatherData = JSON.parse(localStorage.getItem('geoData'));
    
    temperature_current.textContent = weatherData.current.temperature_2m
    wind_speed_current.textContent = weatherData.current.wind_speed_10m
    ppm.textContent = weatherData.current.precipitation_probability;
    weather_conditions.textContent = localizedCodes[weatherData.current.weather_code].emoji + localizedCodes[weatherData.current.weather_code].key
    renderForecastData(weatherData, localizedCodes)

    document.documentElement.classList.remove('js-loading');
    document.documentElement.classList.add('js-ready');
}

function renderForecastData(weatherData, localizedCodes) {
    for (let i = 0; i < temperature_hour_meaning_container.length; i++) {
        general_weather_hour_conditions_meaning_container[i].textContent = localizedCodes[weatherData.hourly.weather_code[i]].emoji;
        temperature_hour_meaning_container[i].textContent = weatherData.hourly.temperature_2m[i];
    }

    for (let i = 0; i < wind_speed_hour_meaning_container.length; i++) {
        wind_speed_hour_meaning_container[i].textContent = weatherData.hourly.wind_speed_10m[i] 
    }

    for (let i = 0; i < precipitation_probability_hour_meaning_container.length; i++) {
        precipitation_probability_hour_meaning_container[i].textContent = weatherData.hourly.precipitation_probability[i] 
    }
}