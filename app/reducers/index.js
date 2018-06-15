import { combineReducers } from 'redux';
import time from './time';
import employees from './employees';

export default combineReducers({
  time,
  employees,
});
