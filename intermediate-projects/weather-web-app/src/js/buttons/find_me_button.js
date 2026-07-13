import { find_me_button } from '../constants/dom-elements.js';
import { fetchAndSaveWeatherData, getCurrentPosition } from '../geoInformation.js';
import { showNotification } from '../notifications/notifications.js';

let latitude = null;
let longitude = null;


export function initFindMeButton(geolocationDefault) {
    find_me_button.addEventListener('click', async () => {
        try {
            const position = await getCurrentPosition();
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            fetchAndSaveWeatherData({latitude:latitude, longitude:longitude, geolocationDefault});
        } catch (error) {
            showNotification({error:true})
            fetchAndSaveWeatherData({cityName: geolocationDefault, geolocationDefault});
        }
    });
}