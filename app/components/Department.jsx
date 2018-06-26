import React from 'react';
import PropTypes from 'prop-types';
import EmployeeOnDeskWithClockRestart from '../containers/EmployeeOnDeskWithClockRestart';

const Department = (props) => {
  const employeesOnTable = props.department.employees
    .map(employee => <EmployeeOnDeskWithClockRestart employee={employee} key={employee._id} />);
  return (
    <div className="table-flex-block" key={props.department.department}>
      <h1 className="text-center">{props.department.department}</h1>
      <div className="desk-flex-container">
        {employeesOnTable}
      </div>
    </div>
  );
};

export default Department;

Department.propTypes = {
  department: PropTypes.objectOf(PropTypes.any).isRequired,
};
