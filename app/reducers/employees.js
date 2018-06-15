import { EMPLOYEES_LOADED } from '../consts';

const employees = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED:
    {
      return Object.assign({}, state, { employeesData: action.employeesData });
    }
    default:
      return state;
  }
};

export default employees;
