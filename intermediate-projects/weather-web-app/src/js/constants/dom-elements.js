export let wind_speed_hour_unit_of_measurement_container;
export let wind_speed_hour_meaning_container;
export let precipitation_probability_hour_meaning_container;
export let temperature_hour_meaning_container;
export let general_weather_hour_conditions_meaning_container;

export function initDomElements() {
    general_weather_hour_conditions_meaning_container = document.querySelectorAll(".general-weather-hour-conditions-meaning-container");
    temperature_hour_meaning_container = document.querySelectorAll(".temperature-hour-meaning-container");
    wind_speed_hour_meaning_container = document.querySelectorAll(".wind-speed-hour-meaning-container");
    wind_speed_hour_unit_of_measurement_container = document.querySelectorAll(".wind-speed-hour-unit-of-measurement-container");
    precipitation_probability_hour_meaning_container = document.querySelectorAll(".precipitation-probability-hour-meaning-container");
}

export const notification_container = document.querySelector(".notification-container");

// Setting
export const setting_list = document.querySelector(".setting-list-container");
export const setting_button = document.querySelector(".setting-button");

export const setting_section_button_back = document.querySelectorAll(".button-back")

export const setting_selection = document.querySelector(".setting-selection");
export const setting_header = document.querySelector(".setting-header");
export const setting_language_selection = document.querySelector(".language-selection");
export const setting_theme_selection = document.querySelector(".theme-selection");

    //Language
export const language_selection_list = document.querySelector(".language-selection-list");
export const language_selection_list_header = document.querySelector(".language-selection-list-header");
export const language_ru = document.querySelector(".language-ru");
export const language_en = document.querySelector(".language-en");
export const check_mark_language_ru = document.querySelector(".check-mark-language-ru");
export const check_mark_language_en = document.querySelector(".check-mark-language-en");
    //Language

    //Theme
export const theme_selection_list = document.querySelector(".theme-selection-list");
export const theme_selection_list_header = document.querySelector(".theme-selection-list-header");
export const light_theme = document.querySelector(".light-theme");
export const dark_theme = document.querySelector(".dark-theme");
export const check_mark_light_theme = document.querySelector(".check-mark-light-theme");
export const check_mark_dark_theme = document.querySelector(".check-mark-dark-theme");
    //Theme
//Setting

export const geoName = document.querySelector(".header-body-container");
export const temperature_current = document.querySelector(".temperature-meaning-container");
export const wind_speed_current = document.querySelector(".wind-speed-meaning-container");
export const ppm = document.querySelector(".precipitation-probability-meaning-container");
export const weather_conditions = document.querySelector(".general-weather-conditions-meaning-container");

export const temperature_three_days_container = document.querySelector(".temperature-three-days-data-container");
export const temperature_button_scroll_right = document.querySelector(".t-button-scroll-right-container button");
export const temperature_button_scroll_left = document.querySelector(".t-button-scroll-left-container button");

export const wind_speed_three_days_container = document.querySelector(".wind-speed-three-days-data-container");
export const wind_button_scroll_right = document.querySelector(".w-button-scroll-right-container button");
export const wind_button_scroll_left = document.querySelector(".w-button-scroll-left-container button");

export const precipitation_probability_three_days_container = document.querySelector(".precipitation-probability-three-days-data-container");
export const precipitation_button_scroll_right = document.querySelector(".p-button-scroll-right-container button");
export const precipitation_button_scroll_left = document.querySelector(".p-button-scroll-left-container button");

export const temperature_day_info = document.querySelector(".t-data-info-container");
export const wind_day_info = document.querySelector(".w-data-info-container");
export const precipitation_day_info = document.querySelector(".p-data-info-container");

export const find_me_button = document.querySelector(".find-me-button-container button");

export const findCityInput = document.querySelector(".input-search-container input");

export const refresh_button = document.querySelector(".refresh-buttons-container button");

export const current_weather_container = document.querySelector(".current-weather-container");
export const three_days_weather_container = document.querySelector(".three-days-weather-container");

// label translate
export const temperature_three_days_text = document.querySelector(".temperature-three-days-text-container");
export const wind_speed_three_days_text = document.querySelector(".wind-three-days-text-container");
export const precipitation_probability_three_days_text_container = document.querySelector(".precipitation-probability-three-days-text-container");
export const temperature_current_text = document.querySelector(".temperature-text-container"); 
export const wind_speed_current_text = document.querySelector(".wind-speed-text-container"); 
export const precipitation_probability_current_text = document.querySelector(".precipitation-probability-text-container"); 
export const general_weather_current_text = document.querySelector(".general-weather-conditions-text-container");
export const wind_speed_unit_of_measurement_container = document.querySelector(".wind-speed-unit-of-measurement-container");

// button translate
export const current_weather_button_text = document.querySelector(".current-weather-buttons-container button");
export const three_days_weather_button_text = document.querySelector(".three-days-weather-buttons-container button");
export const find_me_button_text = document.querySelector(".find-me-button-text-container");

// input translate
export const search_city_input_text = document.querySelector(".input-search-container input");

