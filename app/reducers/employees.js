import { EMPLOYEE_CREATED, EMPLOYEE_UPDATED, EMPLOYEES_LOADED } from '../consts';

const employees = (state = {}, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED:
    {
      return Object.assign({}, state, { employeesData: action.employeesData });
    }
    case EMPLOYEE_CREATED:
    {
      const { employeesData } = state;
      employeesData.push(action.employee);
      return Object.assign({}, state, {
        employeesData,
      });
    }
    case EMPLOYEE_UPDATED:
    {
      const data = state.employeesData;
      data.forEach((employee) => {
        if (employee._id === action.employee._id) {
          // eslint-disable-next-line no-param-reassign
          Object.keys(employee).forEach((key) => { employee[key] = action.employee[key]; });
        }
      });
      return Object.assign({}, state, {
        employeesData: data,
      });
    }
    default:
      return state;
  }
};

export default employees;
