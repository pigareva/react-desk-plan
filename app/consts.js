export const FRONTEND_PORT = '8080';
export const BACKEND_PORT = '8000';

const URL_EMPLOYEES = `http://localhost:${BACKEND_PORT}/employees`;

export const URL_GET_ALL_EMPLOYEES = URL_EMPLOYEES;
export const URL_DELETE_EMPLOYEE = `${URL_EMPLOYEES}/delete/`;
export const URL_UPDATE_EMPLOYEE = `${URL_EMPLOYEES}/update/`;
export const URL_CREATE_EMPLOYEE = `${URL_EMPLOYEES}/create`;

export const DEFAULT_BACKGROUND = '/img/at-work-icon.jpg';

export const START_WORKING_DAY_TIME = 540;
export const END_WORKING_DAY_TIME = 1440;
export const WORKING_DAY_LONG = 480;
export const TIME_INTERVAL = 100;

export const CURRENT_TIME = 'CURRENT_TIME';
export const NEW_HOUR = 'NEW_HOUR';
export const NEW_DAY = 'NEW_DAY';
