export const FRONTEND_PORT = '8080';
export const BACKEND_PORT = '8000';

const URL_EMPLOYEES = `http://localhost:${BACKEND_PORT}/employees`;

export const URL_GET_ALL_EMPLOYEES = URL_EMPLOYEES;
export const URL_DELETE_EMPLOYEE = `${URL_EMPLOYEES}/delete/:`;
export const URL_UPDATE_EMPLOYEE = `${URL_EMPLOYEES}/update/:`;
export const URL_CREATE_EMPLOYEE = `${URL_EMPLOYEES}/create`;
