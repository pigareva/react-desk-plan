import { ADD_BUTTON_CLICK, EMPLOYEE_CREATED, EMPLOYEE_UPDATED, START_DAY, END_DAY } from '../consts';

const button = (state = {}, action) => {
  switch (action.type) {
    case ADD_BUTTON_CLICK:
    {
      return Object.assign({}, state, { button: true });
    }
    case EMPLOYEE_CREATED:
    {
      return Object.assign({}, state, { button: false });
    }
    case EMPLOYEE_UPDATED:
    {
      return Object.assign({}, state, { button: false });
    }
    case END_DAY:
    {
      return Object.assign({}, state, { buttonStart: true });
    }
    case START_DAY:
    {
      return Object.assign({}, state, { buttonStart: false });
    }
    default:
      return state;
  }
};

export default button;
