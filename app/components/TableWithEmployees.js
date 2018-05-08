import React, { Component } from 'react';
import EmployeeOnDesk from './EmployeeOnDesk';

export default class TableWithEmployees extends Component {
  render() {
    const employeesOnTable = this.props.table.employees
      .map(employee => <EmployeeOnDesk employee={employee} key={employee._id} />);

    return (
      <div className="table-flex-block" key={this.props.table.department}>
        <h1 className="text-center">{this.props.table.department}</h1>
        <div className="desk-flex-container">
          {employeesOnTable}
        </div>
      </div>
    );
  }
}
