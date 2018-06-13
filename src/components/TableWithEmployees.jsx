import React from 'react';
import PropTypes from 'prop-types';
import EmployeeOnDesk from './EmployeeOnDesk';

const TableWihEmployees = (props) => {
  const employeesOnTable = props.table.employees
    .map(employee => <EmployeeOnDesk employee={employee} key={employee._id} />);
  return (
    <div className="table-flex-block" key={props.table.department}>
      <h1 className="text-center">{props.table.department}</h1>
      <div className="desk-flex-container">
        {employeesOnTable}
      </div>
    </div>
  );
};

export default TableWihEmployees;

TableWihEmployees.propTypes = {
  table: PropTypes.objectOf(PropTypes.any).isRequired,
};
