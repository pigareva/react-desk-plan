import { combineReducers } from 'redux';
import time from './time';
import employees from './employees';
import button from './button';

export default combineReducers({
  time,
  employees,
  button,
});
