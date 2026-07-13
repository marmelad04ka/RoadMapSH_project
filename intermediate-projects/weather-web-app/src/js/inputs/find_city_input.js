import { findCityInput } from '../constants/dom-elements.js';
import { fetchAndSaveWeatherData } from '../geoInformation.js';

export function initCitySearch(geolocationDefault) {
    findCityInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            fetchAndSaveWeatherData({cityName: findCityInput.value, geolocationDefault})
            findCityInput.value = ''
        }
    });
}