import { 
    temperature_three_days_text,
    wind_speed_three_days_text,
    precipitation_probability_three_days_text_container,
    current_weather_button_text,
    three_days_weather_button_text,
    find_me_button_text,
    search_city_input_text,
    temperature_current_text,
    wind_speed_current_text,
    precipitation_probability_current_text,
    general_weather_current_text,
    wind_speed_unit_of_measurement_container,
    weather_conditions,
    wind_speed_hour_unit_of_measurement_container,
    setting_header,
    setting_language_selection,
    setting_theme_selection,
    language_selection_list_header,
    language_ru,
    language_en,
    theme_selection_list_header,
    light_theme,
    dark_theme,
    geoName
} from "../constants/dom-elements.js";

import { keys } from "./keys.js";

let translations = {};

let _localizedWeatherCodes = {};

export async function changeLanguage(lang) {
    try {
        const response = await fetch(`src/locales/${lang}.json`);
        translations = await response.json();
        updateInterfaceTranslations();
        localStorage.setItem('lang', lang);
    } catch (error) {
        if (lang !== 'en') {
            changeLanguage('en');
        }
    }
}

export function t(path) {
    const keys = path.split('.'); 
    
    let current = translations;   

    for (const key of keys) {
        if (current && current[key] !== undefined) {
            current = current[key];
        } else {
            return path; 
        }
    }

    return current;
}

function updateInterfaceTranslations() {
    temperature_three_days_text.textContent = t(keys.weather_info.temperature_three_days);
    wind_speed_three_days_text.textContent = t(keys.weather_info.wind_speed_three_days);
    precipitation_probability_three_days_text_container.textContent = t(keys.weather_info.precipitation_probability_three_days);
    current_weather_button_text.textContent = t(keys.buttons.current_weather);
    three_days_weather_button_text.textContent = t(keys.buttons.three_days_weather);
    find_me_button_text.textContent = t(keys.buttons.find_me);
    search_city_input_text.placeholder = t(keys.inputs.search_city);
    temperature_current_text.textContent = t(keys.weather_info.temperature_current);
    wind_speed_current_text.textContent = t(keys.weather_info.wind_speed_current);
    precipitation_probability_current_text.textContent = t(keys.weather_info.pp_current);
    general_weather_current_text.textContent = t(keys.weather_info.general_conditions);
    setting_header.textContent = t(keys.setting_menu.setting_header);
    setting_language_selection.textContent = t(keys.setting_menu.language_selection);
    setting_theme_selection.textContent = t(keys.setting_menu.theme_selection);
    language_selection_list_header.textContent = t(keys.setting_menu.language);
    language_ru.textContent = t(keys.setting_menu.language_ru);
    language_en.textContent = t(keys.setting_menu.language_en);
    theme_selection_list_header.textContent = t(keys.setting_menu.theme);
    light_theme.textContent = t(keys.setting_menu.light_theme);
    dark_theme.textContent = t(keys.setting_menu.dark_theme);
    updateWeatherCodesDictionary();
    
    wind_speed_hour_unit_of_measurement_container.forEach(element => {
        element.textContent = t(keys.weather_info.unit_km_h);
    })
    
    wind_speed_unit_of_measurement_container.textContent = t(keys.weather_info.unit_km_h);
    
    const weatherData = JSON.parse(localStorage.getItem('geoData'));
    weather_conditions.textContent = getWeatherCodes()[weatherData.current.weather_code].emoji + getWeatherCodes()[weatherData.current.weather_code].key
}

export function setWindSpeedText() {
    return t('wind_speed_unit_of_measurement_km_h');
}

export function getWeatherCodes() {
    return _localizedWeatherCodes;
}

export function updateWeatherCodesDictionary() {
    _localizedWeatherCodes = {
        0: {emoji: '☀️', key: t(keys.weather_codes.clear_sky)},
        1: {emoji: '🌤️', key: t(keys.weather_codes.mainly_clear)},
        2: {emoji: '⛅', key: t(keys.weather_codes.partly_cloudy)},
        3: {emoji: '☁️', key: t(keys.weather_codes.overcast)},
        45: {emoji: '🌫️', key: t(keys.weather_codes.fog)},
        48: {emoji: '🌫️', key: t(keys.weather_codes.depositing_rime_fog)},
        51: {emoji: '🌧️', key: t(keys.weather_codes.light_drizzle)},
        53: {emoji: '🌧️', key: t(keys.weather_codes.moderate_drizzle)},
        55: {emoji: '🌧️', key: t(keys.weather_codes.dense_drizzle)},
        56: {emoji: '🌧️', key: t(keys.weather_codes.light_freezing_drizzle)},
        57: {emoji: '🌧️', key: t(keys.weather_codes.freezing_drizzle)},
        61: {emoji: '🌧️', key: t(keys.weather_codes.slight_rain)},
        63: {emoji: '🌧️', key: t(keys.weather_codes.moderate_rain)},
        65: {emoji: '🌧️', key: t(keys.weather_codes.heavy_rain)},
        66: {emoji: '🌧️', key: t(keys.weather_codes.light_freezing_rain)},
        67: {emoji: '🌧️', key: t(keys.weather_codes.freezing_rain)},
        71: {emoji: '❄️', key: t(keys.weather_codes.slight_snow_fall)},
        73: {emoji: '❄️', key: t(keys.weather_codes.moderate_snow_fall)},
        75: {emoji: '❄️', key: t(keys.weather_codes.heavy_snow_fall)},
        77: {emoji: '❄️', key: t(keys.weather_codes.snow_grains)},
        80: {emoji: '🌧️', key: t(keys.weather_codes.slight_rain_shower)},
        81: {emoji: '🌧️', key: t(keys.weather_codes.moderate_rain_shower)},
        82: {emoji: '🌧️', key: t(keys.weather_codes.violent_rain_shower)},
        85: {emoji: '❄️', key: t(keys.weather_codes.slight_snow_shower)},
        86: {emoji: '❄️', key: t(keys.weather_codes.heavy_snow_shower)},
        95: {emoji: '⛈️', key: t(keys.weather_codes.thunderstorm)},
        96: {emoji: '⛈️', key: t(keys.weather_codes.thunderstorm_with_slight_hail)},
        99: {emoji: '⛈️', key: t(keys.weather_codes.thunderstorm_with_heavy_hail)},
    };

    return _localizedWeatherCodes;
}