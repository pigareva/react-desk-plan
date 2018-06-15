import React from 'react';
import PropTypes from 'prop-types';
import getDepartmentsWithEmployees from '../functions/getDepartmentsWithEmployees';
import getTables from '../functions/getTables';
import TableWithEmployees from './Department';
import Header from './Header';
import StartNewDay from './StartNewDay';

const OfficeRoom = ({ data, onSubmit }) => {
  const { error, employees } = data;
  const body = error ? <div>Error: {error.message}</div> :
    getTables(getDepartmentsWithEmployees(employees))
      .map(table => <TableWithEmployees department={table} key={table.department} />);

  return (
    <div className="container">
      <Header />
      <div className="table-flex-container">
        {body}
      </div>
      <StartNewDay modal onSubmit={() => onSubmit()} />
    </div>
  );
};

export default OfficeRoom;

OfficeRoom.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  onSubmit: PropTypes.func.isRequired,
};

OfficeRoom.defaultProps = {
  data: {
    error: null,
    employees: [],
  },
};
