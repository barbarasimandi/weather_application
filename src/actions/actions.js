import axios from 'axios';
import API_KEY from '../key/api_key'

export const FETCH_CURRENT_DAY = "FETCH_CURRENT_DAY";
export const FETCH_THREE_HOURS = "FETCH_THREE_HOURS";

export function fetchCurrentDay(values) {
    const city = values.city;
    const country = values.country;

    return(dispatch) => {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`)
            .then((response)=>{
                dispatch(getCurrentDay(response.data));
        })
    }
}

export function fetchThreeHours(values) {
    const city = values.city;
    const country = values.country;

    return(dispatch) => {
        return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`)
            .then((response)=>{
                dispatch(getThreeHours(response.data.list));
        })
    }
}

export function getCurrentDay(currentDayData) {
    return {
        type: FETCH_CURRENT_DAY,
        currentDayData: currentDayData
    }
}

export function getThreeHours(threeHoursData) {
    return {
        type: FETCH_THREE_HOURS,
        nextHoursData: filterNextHoursData(threeHoursData),
        nextDaysData: filterNextDaysData(threeHoursData)
    }
}

function filterNextHoursData(list) {
    let today = new Date().toISOString().slice(0, 10);
    return list.filter(day => day.dt_txt.substring(0,10) === today);
};

function filterNextDaysData(list) {
    let today = new Date().toISOString().slice(0, 10);
    return list.filter(day => day.dt_txt.substring(0,10) !== today);
};