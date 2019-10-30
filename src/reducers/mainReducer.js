import { FETCH_CURRENT_DAY, FETCH_THREE_HOURS } from '../actions/actions';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

const initialState = {
    temp: undefined,
    temp_min_current: undefined,
    temp_max_current: undefined,
    city: undefined,
    country: undefined,
    date: undefined,
    description: undefined,
    icon: undefined,
    nextHoursData: undefined,
    nextDaysData: undefined
};

export function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENT_DAY:
            return {
                ...state,
                temp: action.currentDayData.main.temp,
                temp_min_current: action.currentDayData.main.temp_min,
                temp_max_current: action.currentDayData.main.temp_max,
                city: action.currentDayData.name,
                country: action.currentDayData.sys.country,
                date: new Date().toLocaleString().slice(0, 13),
                description: action.currentDayData.weather[0].description,
                icon: `http://openweathermap.org/img/w/${action.currentDayData.weather[0].icon}.png`
            };
        case FETCH_THREE_HOURS:
            return {
                ...state,
                nextHoursData: action.nextHoursData,
                nextDaysData: action.nextDaysData,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    reducer,
    form: formReducer
});

export default rootReducer;