import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import '../app/style/style.scss';

function getDepartmentsList(employees) {
  const departments = [];
  employees.forEach((employee) => {
    if (!departments.includes(employee.department)) {
      departments.push(employee.department);
    }
  });
  return departments;
}

function getDepartmentsWithEmployees(employees) {
  const departmentIndex = {};

  employees.forEach((employee) => {
    const department = employee.department;

    if (departmentIndex[department]) {
      departmentIndex[department].employees.push(employee);
    } else {
      departmentIndex[department] = {
        department,
        employees: [employee],
      };
    }
  });

  return departmentIndex;
}

function getTables(departmentIndex) {
  const tables = [];
  const departmentsWithEmployees = departmentIndex;
  for (let department in departmentsWithEmployees) {
    tables.push(departmentsWithEmployees[department]);
  }
  return tables;
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time, isOff: false };
    this.isGreetingNeeded = props.isGreetingNeeded || false;
  }

  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    this.stopTime();
  }

  tick() {
    const currentTime = this.state.time;
    if (!this.state.isOff) {
      this.setState({ time: currentTime >= 1440 ? 540 : currentTime + 1 });
    }
  }

  stopTime() {
    clearInterval(this.timerID);
  }

  startTime() {
    this.timerID = setInterval(
      () => this.tick(),
      100,
    );
  }

  render() {
    return (
      <div>
        <h3>{String(Math.floor(this.state.time / 60)).padStart(2, '0')}:{String(this.state.time % 60).padStart(2, '0')}.</h3>
      </div>
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hh = this.state.time / 60;
    switch (true) {
      case (hh >= 8 && hh <= 10):
        return <h2> Good Morning! </h2>;
      case (hh >= 12 && hh <= 14):
        return <h2> Bon appetite! </h2>;
      case (hh >= 17 && hh <= 20):
        return <h2> Bye bye! </h2>;
      default:
        return null;
    }
  }
}

class EmployeeOnDesk extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.comeToOffice = this.comeToOffice.bind(this);
    this.toggleEmployeeOnDesk = this.toggleEmployeeOnDesk.bind(this);
    this.state = { atWork: true, timeAtWork: 0, timerIsOff: false };
  }

  componentDidMount() {
    this.comeToOffice();
  }

  goHome() {
    this.setState({ atWork: false, timerIsOff: true });
  }

  comeToOffice() {
    this.setState({ atWork: true, timerIsOff: false });
  }

  toggleEmployeeOnDesk() {
    if (this.state.atWork) {
      this.goHome();
    } else {
      this.comeToOffice();
    }
  }

  render() {
    const descStyle = this.state.atWork ? 'desk-flex-block desk-at-work' : 'desk-flex-block';

    return (
      <Card className={descStyle}>
        <CardBody>
          <CardTitle><a href={`mailto:${this.props.employee.email}`}>{this.props.employee.name}</a></CardTitle>
          <CardSubtitle>{this.props.employee.department}</CardSubtitle>
        </CardBody>
          <Button onClick={this.toggleEmployeeOnDesk}>
            {/* // ToDo I'm working since */}
            {this.state.atWork ? 'I am working' : 'I am relaxing'}
          </Button>
          <Clock time={0} isOff={this.state.timerIsOff} />
      </Card>
    );
  }
}

class TableWithEmployees extends Component {
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

class OfficeRoom extends Component {
  constructor(props) {
    super(props);
    this.state = { employees: {
        error: null,
        isLoaded: false,
        employees: []
      }};
  }

  componentDidMount() {
    fetch("http://localhost:8000/employees")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({ employees: {
              isLoaded: true,
              employees: result
            }});
        },
        (error) => {
          this.setState({ employees: {
              isLoaded: true,
              error
            }});
        }
      )
  }

  render() {
    const { error, isLoaded, employees } = this.state.employees;
    const tables = getTables(getDepartmentsWithEmployees(employees))
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
          {tables}
        </div>
      </div>
    );
  }
}

render(<OfficeRoom />, document.getElementById('root'));
