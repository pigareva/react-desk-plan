import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlusIcon } from 'react-octicons';
import getDepartmentsWithEmployees from '../functions/getDepartmentsWithEmployees';
import getTables from '../functions/getTables';
import Clock from './Clock';
import TableWithEmployees from './TableWithEmployees';
import { URL_GET_ALL_EMPLOYEES } from '../consts';
import EditEmployee from './EditEmployee';

export default class OfficeRoom extends Component {
  constructor(props) {
    super(props);
    this.addEmployee = this.addEmployee.bind(this);
    this.state = {
      data: {
        error: null,
        isLoaded: false,
        employees: [],
      },
      showAdd: false,
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

  addEmployee() {
    this.setState({ showAdd: true });
  }

  render() {
    const { error, employees } = this.state.data;
    const body = error ? <div>Error: {error.message}</div> :
      getTables(getDepartmentsWithEmployees(employees))
        .map(table => <TableWithEmployees table={table} key={table.department} />);

    return (
      <div className="container">
        <header>
          <Button onClick={this.addEmployee}>
            <PlusIcon />
          </Button>
          <h1 className="text-center">Desk plan</h1>
          <div className="sun-box">
            <span className="sun-symbol">☀</span>
          </div>
          <Container>
            <Row>
              <Col xs="3">Local time is</Col>
              <Col xs="6">
                <Clock time={540} isGreetingNeeded />
              </Col>
            </Row>
          </Container>
        </header>
        <div className="table-flex-container">
          {body}
        </div>

        {this.state.showAdd &&
        <EditEmployee modal={this.state.showAdd} />}
      </div>
    );
  }
}
