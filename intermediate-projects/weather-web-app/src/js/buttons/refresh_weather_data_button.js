import { refresh_button } from '../constants/dom-elements.js';
import { fetchAndSaveWeatherData } from '../geoInformation.js';

export function initRefreshButton() {
    refresh_button.addEventListener('click', function() {
        fetchAndSaveWeatherData({cityName :localStorage.getItem('location'), update:true})
    })
}