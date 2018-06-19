import {
  CURRENT_TIME, END_DAY, NEW_DAY, EMPLOYEES_LOADED,
  EMPLOYEE_CREATED, ADD_BUTTON_CLICK, EMPLOYEE_UPDATED, EMPLOYEE_DELETED,
} from '../consts';

let dayNumber = 1;

export const currentTime = time => ({
  type: CURRENT_TIME,
  time,
});

export const endDay = {
  type: END_DAY,
  day: dayNumber += 1,
};

export const startDay = {
  type: NEW_DAY,
};

export const fetchEmployees = data => ({
  type: EMPLOYEES_LOADED,
  employeesData: data.employees,
  error: data.error,
});

export const employeeCreated = data => ({
  type: EMPLOYEE_CREATED,
  employee: data.employee,
});

export const employeeUpdated = data => ({
  type: EMPLOYEE_UPDATED,
  employee: data.employee,
});

export const employeeDeleted = data => ({
  type: EMPLOYEE_DELETED,
  id: data.id,
});

export const addButtonClick = () => ({
  type: ADD_BUTTON_CLICK,
  button: true,
});
