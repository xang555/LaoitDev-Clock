import { combineReducers } from 'redux';
import currentWeather from './currentWeather';
import forecast from './forecast';

export default combineReducers({currentWeather,forecast});
