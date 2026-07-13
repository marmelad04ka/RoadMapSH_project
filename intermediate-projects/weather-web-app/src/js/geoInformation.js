import { clearText } from './script.js'
import {  geoName } from './constants/dom-elements.js';
import { updateWeatherDisplay } from './services/weather-service.js';
import { showNotification } from './notifications/notifications.js';

export async function fetchAndSaveWeatherData({latitude, longitude, cityName , geolocationDefault, update}) {
    let weatherUrl = '';
    let geoInfo = null;
    let data = null;
    try {
        geoInfo = await fetchGeoLocation({getlatitude:latitude, getlongitude:longitude, cityName:cityName });
        if (geoInfo === null) {
            geolocationDefault = 'london';
            return;
        }
        clearText(geoName)
        geoName.textContent = geoInfo.fullName;


        weatherUrl = `https://api.open-meteo.com/v1/forecast?` +
        `latitude=${geoInfo.latitude}&longitude=${geoInfo.longitude}&` +
        `current=temperature_2m,wind_speed_10m,precipitation_probability,weather_code&` +
        `past_days=1&forecast_days=2&` +
        `hourly=temperature_2m,wind_speed_10m,precipitation_probability,weather_code&` +
        `timezone=auto`;
        
        const response = await fetch(weatherUrl);
        data = await response.json();
    } catch (error) {
        showNotification({error:true})
        geolocationDefault = 'london';
    }
    localStorage.setItem('geoData', JSON.stringify(data))
    localStorage.setItem('location', geoInfo.fullName)

    geolocationDefault = localStorage.getItem('location');

    updateWeatherDisplay();
    
    if (update) {
        showNotification({success:true, update_data:true})
    }
}

export async function getCurrentPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
        showNotification({error:true})
        reject(new Error('Geolocation не поддерживается'));
    }
    
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 5000
    });
  });
}

export async function fetchGeoLocation({cityName, getlatitude, getlongitude}) {
    let url = '';
    let lang = localStorage.getItem('lang') || navigator.language.slice(0, 2) || 'en';

    if (cityName) {
        url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(cityName)}&limit=1&accept-language=${lang}`;
    }

    if (getlatitude && getlongitude) {
        url = `https://nominatim.openstreetmap.org/reverse?lat=${getlatitude}&lon=${getlongitude}&format=json&limit=1&accept-language=${lang}`;
    }

    try {
        const response = await fetch(url);
            
        if (!response.ok) {
            showNotification({error:true})
            throw new Error("Ошибка при запросе к серверу геокодера");
        }
        const data = await response.json();

        if (!data) {
            showNotification({error:true})
            return null;
        }

        let location;
        if (Array.isArray(data)) {
            if (data.length === 0) {
                showNotification({warning:true})
                return null;
            }
            location = data[0];
        } else {
            location = data;
        }
        
        return {
            latitude: parseFloat(location.lat),
            longitude: parseFloat(location.lon),
            fullName: location.display_name
        };
    } catch (error) {
        showNotification({error:true})
    }
};