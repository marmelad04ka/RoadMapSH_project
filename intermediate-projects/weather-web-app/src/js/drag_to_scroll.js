import { 
    temperature_three_days_container,
    wind_speed_three_days_container,
    precipitation_probability_three_days_container
} from './constants/dom-elements.js';

export function initDragToScroll() {
    const data_info_container_arr = [temperature_three_days_container, wind_speed_three_days_container, precipitation_probability_three_days_container]
    for (let i = 0; i < data_info_container_arr.length; i++) {
        const container = data_info_container_arr[i];
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (event) => {
            isDown = true;
            startX = event.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
        });

        container.addEventListener('mousemove', (event) => {
            if (!isDown) return;
            event.preventDefault();
            const x = event.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5;
            container.scrollLeft = scrollLeft - walk;
        });
    }
};
