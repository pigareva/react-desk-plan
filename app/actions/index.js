import {
  CURRENT_TIME, NEW_DAY, NEW_HOUR, EMPLOYEES_LOADED,
  EMPLOYEE_CREATED, ADD_BUTTON_CLICK, EMPLOYEE_UPDATED,
} from '../consts';

let dayNumber = 1;

export const currentTime = time => ({
  type: CURRENT_TIME,
  time,
});

export const newHour = time => ({
  type: NEW_HOUR,
  time,
});

export const newDay = {
  type: NEW_DAY,
  dayNumber: dayNumber += 1,
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

export const addButtonClick = () => ({
  type: ADD_BUTTON_CLICK,
  button: true,
});
