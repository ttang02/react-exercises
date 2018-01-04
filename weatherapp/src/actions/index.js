import axios from 'axios';

const API_KEY = '85b9021fc91bd81f42b90ec89304b92d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
//to keep action types consistent our action creator and reducer

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type : FETCH_WEATHER,
        payload : request
    }
}