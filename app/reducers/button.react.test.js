import buttonReducer from './button';
import { EMPLOYEE_CREATED, ADD_BUTTON_CLICK, EMPLOYEE_UPDATED, END_DAY, START_DAY } from '../consts';

test('Button reducer returns the initial state', () => {
  expect(buttonReducer(undefined, {})).toEqual({});
});

test('Button reducer handles ADD_BUTTON_CLICK', () => {
  const startAction = {
    type: ADD_BUTTON_CLICK,
  };
  expect(buttonReducer({}, startAction)).toEqual({ button: true });
  expect(buttonReducer({ button: false }, startAction)).toEqual({ button: true });
});

test('Button reducer handles EMPLOYEE_CREATED', () => {
  const startAction = {
    type: EMPLOYEE_CREATED,
  };
  expect(buttonReducer({}, startAction)).toEqual({ button: false });
  expect(buttonReducer({ button: true }, startAction)).toEqual({ button: false });
});

test('Button reducer handles EMPLOYEE_UPDATED', () => {
  const startAction = {
    type: EMPLOYEE_UPDATED,
  };
  expect(buttonReducer({}, startAction)).toEqual({ button: false });
  expect(buttonReducer({ button: true }, startAction)).toEqual({ button: false });
});

test('Button reducer handles END_DAY', () => {
  const startAction = {
    type: END_DAY,
  };
  expect(buttonReducer({}, startAction)).toEqual({ buttonStart: true, button: false });
  expect(buttonReducer({ buttonStart: false }, startAction))
    .toEqual({ buttonStart: true, button: false });
});

test('Button reducer handles START_DAY', () => {
  const startAction = {
    type: START_DAY,
  };
  expect(buttonReducer({}, startAction)).toEqual({ buttonStart: false });
  expect(buttonReducer({ buttonStart: true }, startAction)).toEqual({ buttonStart: false });
});
