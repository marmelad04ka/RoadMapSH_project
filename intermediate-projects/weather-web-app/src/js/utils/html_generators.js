import { 
    temperature_three_days_container,
    wind_speed_three_days_container,
    precipitation_probability_three_days_container
} from "../constants/dom-elements.js";

import { createTime } from './utils.js';

export function renderForecast() {
    temperature_three_days_container.innerHTML = getTemperatureTemplate();
    wind_speed_three_days_container.innerHTML = getWindSpeedTemplate();
    precipitation_probability_three_days_container.innerHTML = getPrecipitationTemplate();
}

export function getPrecipitationTemplate() {
    let precipitation_probability_info_HTML = '';

    let hour;
    let pp;
    hour = createTime({number_of_days: 3})
    for (let i = 0; i < hour.length; i++) {
        if (i === 24 || i === 48) {
            precipitation_probability_info_HTML += `<div class="divide">

                        </div>`
        }
        pp = 'test'
        precipitation_probability_info_HTML += `
        <div class="hour-info-container theme-change-transition">

            <div class="hour-meaning-container">
                ${hour[i]}
            </div>

            <div class="precipitation-probability-hour-info-container">
                <p class="precipitation-probability-hour-meaning-container">
                    ${pp}
                </p>

                <p class="precipitation-probability-hour-unit-of-measurement-container">
                    %
                </p>
            </div>
        </div>
        `
        
    }
    return precipitation_probability_info_HTML;
}

export function getWindSpeedTemplate() {
    let wind_speed_info_HTML = '';

    let hour;
    let wind_speed;
    hour = createTime({number_of_days: 3})
    for (let i = 0; i < hour.length; i++) {
        if (i === 24 || i === 48) {
            wind_speed_info_HTML += `<div class="divide">

                        </div>`
        }
        wind_speed = 'test'
        wind_speed_info_HTML += `
        <div class="hour-info-container theme-change-transition">

            <div class="hour-meaning-container">
                ${hour[i]}
            </div>

            <div class="wind-speed-hour-info-container">
                <p class="wind-speed-hour-meaning-container">
                    ${wind_speed}
                </p>

                <p class="wind-speed-hour-unit-of-measurement-container">
                    km/h
                </p>
            </div>
        </div>
        `
        
    }
    return wind_speed_info_HTML;
}

export function getTemperatureTemplate() {
    let temperature_info_HTML = '';

    let hour;
    let emoji;
    let temperature;
    hour = createTime({number_of_days: 3})
    for (let i = 0; i < hour.length; i++) {
        if (i === 24 || i === 48) {
            temperature_info_HTML += `<div class="divide">

                        </div>`
        }
        temperature_info_HTML += `<div class="hour-info-container theme-change-transition">
                                
                            <div class="hour-meaning-container">
                                ${hour[i]}
                            </div>

                            <div class="general-weather-hour-conditions-meaning-container">
                                ${emoji}
                            </div>

                            <div class="temperature-hour-info-container">
                                <p class="temperature-hour-meaning-container">
                                    ${temperature}
                                </p>

                                <p class="temperature-hour-unit-of-measurement-container">
                                    C
                                </p>
                            </div>
                            
                        </div>`
    }
    return temperature_info_HTML;
}