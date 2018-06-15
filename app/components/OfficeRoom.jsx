import React, { Component } from 'react';
import getDepartmentsWithEmployees from '../functions/getDepartmentsWithEmployees';
import getTables from '../functions/getTables';
import TableWithEmployees from './TableWithEmployees';
import { URL_GET_ALL_EMPLOYEES } from '../consts';
import Header from './Header';
import StartNewDay from './StartNewDay';

export default class OfficeRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        error: null,
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
        <Header />
        <div className="table-flex-container">
          {body}
        </div>
        <StartNewDay modal />
      </div>
    );
  }
}
