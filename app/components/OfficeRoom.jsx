import React, { Component } from 'react';
import getDepartmentsWithEmployees from '../functions/getDepartmentsWithEmployees';
import getTables from '../functions/getTables';
import Clock from './Clock';
import TableWithEmployees from './TableWithEmployees';
import { URL_GET_ALL_EMPLOYEES } from '../consts';

export default class OfficeRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        error: null,
        isLoaded: false,
        employees: [],
      },
    };
  }

  async componentDidMount() {
    const res = await fetch(URL_GET_ALL_EMPLOYEES);
    res.json()
      .then(
        (result) => {
          this.setState({
            data: {
              isLoaded: true,
              employees: result,
            },
          });
        },
        (error) => {
          this.setState({
            data: {
              isLoaded: true,
              error,
            },
          });
        },
      );
  }

  render() {
    const { error, employees } = this.state.data;
    const body = error ? <div>Error: {error.message}</div> :
      getTables(getDepartmentsWithEmployees(employees))
        .map(table => <TableWithEmployees table={table} key={table.department} />);

    return (
      <div className="container">
        <header>
          <h1 className="text-center">Desk plan</h1>
          <div className="sun-box">
            <span className="sun-symbol">☀</span>
          </div>
          <p>Local time is</p>
          <Clock time={540} isGreetingNeeded />
        </header>
        <div className="table-flex-container">
          {body}
        </div>
      </div>
    );
  }
}
