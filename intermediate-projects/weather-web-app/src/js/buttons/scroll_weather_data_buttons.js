import { CLASS_HIDDEN } from '../../config/init-state.js';
import {
    temperature_three_days_container,
    wind_speed_three_days_container,
    precipitation_probability_three_days_container,
    temperature_button_scroll_right,
    temperature_button_scroll_left,
    wind_button_scroll_right,
    wind_button_scroll_left,
    precipitation_button_scroll_right,
    precipitation_button_scroll_left
} from '../constants/dom-elements.js';

const scrollGroups = [
    {
        container: temperature_three_days_container,
        btnRight: temperature_button_scroll_right,
        btnLeft: temperature_button_scroll_left
    },
    {
        container: wind_speed_three_days_container,
        btnRight: wind_button_scroll_right,
        btnLeft: wind_button_scroll_left
    },
    {
        container: precipitation_probability_three_days_container,
        btnRight: precipitation_button_scroll_right,
        btnLeft: precipitation_button_scroll_left
    }
];

export function initWeatherScroll() {
    const scrollOffset = 200;

    const resizeObserver = new ResizeObserver((entries) => {
        for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            
            let group = null;
            for (let j = 0; j < scrollGroups.length; j++) {
                if (scrollGroups[j].container === entry.target) {
                    group = scrollGroups[j];
                    break;
                }
            }

            if (group) {
                updateButtonsVisibility(group.container, group.btnRight, group.btnLeft);
            }
        }
    });

    for (let i = 0; i < scrollGroups.length; i++) {
        const group = scrollGroups[i];

        resizeObserver.observe(group.container);

        group.btnRight.addEventListener('click', () => {
            group.container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
        });

        group.btnLeft.addEventListener('click', () => {
            group.container.scrollBy({ left: -scrollOffset, behavior: 'smooth' });
        });

        group.container.addEventListener('scroll', () => {
            updateButtonsVisibility(group.container, group.btnRight, group.btnLeft);
        });
    }
}

function updateButtonsVisibility(container, btnRight, btnLeft) {
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    if (currentScroll <= 2) {
        btnLeft.classList.add(CLASS_HIDDEN);
    } else {
        btnLeft.classList.remove(CLASS_HIDDEN);
    }

    if (maxScroll <= 0 || currentScroll >= maxScroll - 2) {
        btnRight.classList.add(CLASS_HIDDEN);
    } else {
        btnRight.classList.remove(CLASS_HIDDEN);
    }
}