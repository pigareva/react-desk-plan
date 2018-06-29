import React from 'react';
import PropTypes from 'prop-types';
import getDepartmentsWithEmployees from '../functions/getDepartmentsWithEmployees';
import getGroupedEmployees from '../functions/getGroupedEmployees';
import DepartmentWithEmployees from './Department';
import HeaderWithAdd from '../containers/HeaderWithAdd';
import StartNewDay from './StartNewDay';

const OfficeRoom = ({
  data, onSubmit, day, modal,
}) => {
  const { error, employees } = data;
  const body = error ? <div>Error: {error.message}</div> :
    getGroupedEmployees(getDepartmentsWithEmployees(employees))
      .map(table => <DepartmentWithEmployees department={table} key={table.department} />);

  return (
    <div className="container">
      <HeaderWithAdd />
      <div className="table-flex-container">
        {body}
      </div>
      {modal && <StartNewDay modal={modal} onSubmit={() => onSubmit()} day={day} />}
    </div>
  );
};

export default OfficeRoom;

OfficeRoom.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
  modal: PropTypes.bool.isRequired,
};

OfficeRoom.defaultProps = {
  data: {
    error: null,
    employees: [],
  },
};
