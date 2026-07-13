import { 
    temperature_day_info,
    wind_day_info,
    precipitation_day_info,
    temperature_three_days_container,
    wind_speed_three_days_container,
    precipitation_probability_three_days_container
} from '../constants/dom-elements.js';

export function initForecastDateTracker() {
    const date = new Date();
    const now_date = getOffsetDateString(date, 0);
    const yesterday_date = getOffsetDateString(date, -1)
    const tomorrow_date = getOffsetDateString(date, 1);
    const day_after_tomorrow = getOffsetDateString(date, 2);

    const date_conttainer_arr = [temperature_day_info, wind_day_info, precipitation_day_info];
    const data_three_day_arr = [temperature_three_days_container, wind_speed_three_days_container, precipitation_probability_three_days_container];

    for (let i = 0; i < date_conttainer_arr.length; i++) {
        date_conttainer_arr[i].textContent = yesterday_date;
    }

    for (let i = 0; i < data_three_day_arr.length; i++) {
        data_three_day_arr[i].addEventListener('scroll', () => {
            updateStickyDateByScroll({
                nowDay:now_date, 
                tomorrowDay:tomorrow_date, 
                yesterdayDay:yesterday_date,
                container:data_three_day_arr[i],
                dataContainer:date_conttainer_arr[i]
            });
        });
    };
}

function getOffsetDateString(date, increaseNumber) {
    let now_date = new Date(date);
    now_date.setDate(now_date.getDate() + increaseNumber);

    return now_date.toLocaleDateString();
}

function updateStickyDateByScroll({nowDay, tomorrowDay, yesterdayDay, container, dataContainer}) {
    const currentScroll = container.scrollLeft;
    const maxScroll = container.scrollWidth - container.clientWidth;

    const second_day = (container.scrollWidth / 3) - container.clientWidth / 2
    const third_day = (container.scrollWidth / 3) * 2 - container.clientWidth / 2

    if (currentScroll > third_day) {
        dataContainer.textContent = tomorrowDay;
    }

    if (currentScroll > second_day && currentScroll < third_day) {
        dataContainer.textContent = nowDay;
    }

    if (currentScroll < second_day) {
        dataContainer.textContent = yesterdayDay;
    }
}