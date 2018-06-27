import {
  CURRENT_TIME, EMPLOYEES_LOADED,
  EMPLOYEE_CREATED, ADD_BUTTON_CLICK, EMPLOYEE_UPDATED, EMPLOYEE_DELETED,
} from '../consts';
import * as actions from './index';

test('create an action to announce current time', () => {
  const time = 60;
  const expectedAction = {
    type: CURRENT_TIME,
    time,
    day: 2,
  };
  expect(actions.currentTime(time)).toEqual(expectedAction);
});

test('create an action to fetch employees', () => {
  const data = {
    employees: [{}, {}],
    error: 'error',
  };
  const expectedAction = {
    type: EMPLOYEES_LOADED,
    employeesData: data.employees,
    error: data.error,
  };
  expect(actions.fetchEmployees(data)).toEqual(expectedAction);
});

test('create an action to create an employee', () => {
  const data = { employee: {} };
  const expectedAction = {
    type: EMPLOYEE_CREATED,
    employee: data.employee,
  };
  expect(actions.employeeCreated(data)).toEqual(expectedAction);
});

test('create an action to update an employee', () => {
  const data = { employee: {} };
  const expectedAction = {
    type: EMPLOYEE_UPDATED,
    employee: data.employee,
  };
  expect(actions.employeeUpdated(data)).toEqual(expectedAction);
});

test('create an action to delete an employee', () => {
  const data = { id: 3 };
  const expectedAction = {
    type: EMPLOYEE_DELETED,
    id: data.id,
  };
  expect(actions.employeeDeleted(data)).toEqual(expectedAction);
});

test('create an action to store the add button state', () => {
  const expectedAction = {
    type: ADD_BUTTON_CLICK,
    button: true,
  };
  expect(actions.addButtonClick()).toEqual(expectedAction);
});
