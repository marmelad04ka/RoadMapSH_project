import { fetchAndSaveWeatherData, getCurrentPosition } from './geoInformation.js';
import { initFindMeButton } from './buttons/find_me_button.js';
import { initCitySearch } from './inputs/find_city_input.js';
import { initDragToScroll } from './drag_to_scroll.js'
import { initWeatherTabs } from './buttons/change_weather_visible_button.js';
import { initWeatherScroll } from './buttons/scroll_weather_data_buttons.js';
import { initRefreshButton } from './buttons/refresh_weather_data_button.js';
import { initForecastDateTracker } from './work_with_date/work_with_date.js';
import { updateWeatherDisplay } from './services/weather-service.js';
import { changeLanguage } from './i18n/translation.js';
import { initSetting } from './components/setting.js';
import { renderForecast } from './utils/html_generators.js';
import { initDomElements, setting_button, setting_list } from './constants/dom-elements.js';
import { INITIAL_LANG, DEFAULT_LOCATION, INITIAL_THEME } from '../config/init-state.js';
import { changeTheme } from './theme/change_theme.js';

let geolocationDefault = DEFAULT_LOCATION;
let currentLang = INITIAL_LANG;
let currentTheme = INITIAL_THEME

changeTheme(currentTheme);

async function init() {
    await fetchAndSaveWeatherData({ cityName: geolocationDefault });

    changeLanguage(currentLang);
    updateWeatherDisplay();   
}

init();

renderForecast();
initDomElements();

initSetting();

initFindMeButton(geolocationDefault);
initCitySearch(geolocationDefault);

initDragToScroll()

initWeatherTabs();

initWeatherScroll();

initRefreshButton();

initForecastDateTracker();

document.addEventListener('click', function(event) {
    if (!setting_button.contains(event.target) && !setting_list.contains(event.target)) {
        setting_list.classList.add('unvisibility');
    }
});

document.addEventListener('scroll', function(event) {
    if (!setting_button.contains(event.target) && !setting_list.contains(event.target)) {
        setting_list.classList.add('unvisibility');
    }
});

export function clearText(geoName) {
    geoName.textContent = ''
}