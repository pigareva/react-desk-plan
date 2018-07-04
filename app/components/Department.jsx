import React from 'react';
import PropTypes from 'prop-types';
import EmployeeOnDeskWithClockRestart from '../containers/EmployeeOnDeskWithClockRestart';
import { START_WORKING_DAY_TIME } from '../consts';
import getTime from '../functions/getTime';

const Department = (props) => {
  const delays = props.department.employees.map(employee => employee.delay);
  const delay = Math.floor(delays.reduce((a, b) => a + b) / delays.length);
  const employeesInDepartment = props.department.employees
    .map(employee => <EmployeeOnDeskWithClockRestart employee={employee} key={employee._id} />);
  return (
    <div className="table-flex-block" key={props.department.department}>
      <h1 className="text-center">{props.department.department}</h1>
      <h4 className="text-center">Expected coming time is {getTime(START_WORKING_DAY_TIME + delay)}</h4>
      <div className="desk-flex-container">
        {employeesInDepartment}
      </div>
    </div>
  );
};

export default Department;

Department.propTypes = {
  department: PropTypes.objectOf(PropTypes.any).isRequired,
};
