import { CLASS_HIDDEN, CLASS_ACTIVE } from "../../config/init-state.js";
import { 
    current_weather_button_text,
    three_days_weather_button_text,
    current_weather_container,
    three_days_weather_container
 } from "../constants/dom-elements.js";

export function initWeatherTabs() {
    current_weather_button_text.classList.add(CLASS_ACTIVE);

    current_weather_button_text.addEventListener('click', () => {
        switchActiveButton({
            button_active:current_weather_button_text,
            button_unactive:three_days_weather_button_text
        });
        current_weather_container.classList.remove(CLASS_HIDDEN);
        three_days_weather_container.classList.add(CLASS_HIDDEN);
    });

    three_days_weather_button_text.addEventListener('click', () => {
        switchActiveButton({
            button_active:three_days_weather_button_text,
            button_unactive:current_weather_button_text
        });
        three_days_weather_container.classList.remove(CLASS_HIDDEN);
        current_weather_container.classList.add(CLASS_HIDDEN);
    })
}

function switchActiveButton({button_active, button_unactive}) {
    if (button_active.classList.contains(CLASS_ACTIVE)) {
            return;
        }
    button_unactive.classList.remove(CLASS_ACTIVE);
    button_active.classList.add(CLASS_ACTIVE);
}
