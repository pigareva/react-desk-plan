import React, { Component } from 'react';
import { render } from 'react-dom';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

import '../app/style/style.scss';

const employees = [
  {
    _id: '01',
    department: 'Founder',
    name: 'Harry Potter',
    email: 'potter@pigareva.de',
    photo: '',
  },
  {
    _id: '02',
    department: 'Founder',
    name: 'Albus Dumbledore',
    email: 'dumbledore@pigareva.cc',
    photo: '',
  },
  {
    _id: '03',
    department: 'HR',
    name: 'Hermione Granger',
    email: 'granger@pigareva.cc',
    photo: '',
  },
  {
    _id: '30',
    department: 'HR',
    name: 'Minerva McGonagall',
    email: 'granger@pigareva.cc',
    photo: '',
  },
  {
    _id: '04',
    department: 'Finance',
    name: 'Mad-Eye Moody',
    email: 'moody@pigareva.cc',
    photo: '',
  },
  {
    _id: '05',
    department: 'Tech',
    name: 'Ron Weasley',
    email: 'weasley@pigareva.cc',
    photo: '',
  },
  {
    _id: '06',
    department: 'Tech',
    name: 'Rubeus Hagrid',
    email: 'hagrid@pigareva.cc',
    photo: '',
  },
  {
    _id: '07',
    department: 'Tech',
    name: 'Sirius Black',
    email: 'black@pigareva.cc',
    photo: '',
  },
  {
    _id: '08',
    department: 'Tech',
    name: 'Neville Longbottom',
    email: 'longbottom@pigareva.cc',
    photo: '',
  },
  {
    _id: '09',
    department: 'Tech',
    name: 'Ron Weasley',
    email: 'weasley@pigareva.cc',
    photo: '',
  },
  {
    _id: '10',
    department: 'Tech',
    name: 'Cedric Diggory',
    email: 'diggory@pigareva.cc',
    photo: '',
  },
  {
    _id: '11',
    department: 'B2B Sales',
    name: 'Bellatrix Lestrange',
    email: 'lestrange@pigareva.cc',
    photo: '',
  },
  {
    _id: '12',
    department: 'B2B Sales',
    name: 'Draco Malfoy',
    email: 'malfoy@pigareva.cc',
    photo: '',
  },
  {
    _id: '13',
    department: 'B2B Sales',
    name: 'Gellert Grindelwald',
    email: 'grindelwald@pigareva.cc',
    photo: '',
  },
  {
    _id: '14',
    department: 'B2B Sales',
    name: 'Bartemius (Barty) Crouch, Jr.',
    email: 'crouch@pigareva.cc',
    photo: '',
  },
  {
    _id: '15',
    department: 'B2B Sales',
    name: 'Peter Pettigrew',
    email: 'pettigrew@pigareva.cc',
    photo: '',
  },
  {
    _id: '16',
    department: 'B2B Sales',
    name: 'Tom Riddle',
    email: 'voldemort@pigareva.cc',
    photo: '',
  },
  {
    _id: '17',
    department: 'Customer care',
    name: 'Salazar Slytherin ',
    email: 'slytherin@pigareva.cc',
    photo: '',
  },
  {
    _id: '18',
    department: 'Customer care',
    name: 'Vincent Crabbe',
    email: 'crabbe@pigareva.cc',
    photo: '',
  },
  {
    _id: '19',
    department: 'Customer care',
    name: 'Millicent Bulstrode',
    email: 'bulstrode@pigareva.cc',
    photo: '',
  },
  {
    _id: '20',
    department: 'Customer care',
    name: 'Marcus Flint',
    email: 'flint@pigareva.cc',
    photo: '',
  },
  {
    _id: '21',
    department: 'Customer care',
    name: 'Gregory Goyle',
    email: 'goyle@pigareva.cc',
    photo: '',
  },
  {
    _id: '22',
    department: 'Customer care',
    name: 'Graham Montague',
    email: 'montague@pigareva.cc',
    photo: '',
  },
  {
    _id: '23',
    department: 'Product Team',
    name: 'Igor Karkaroff',
    email: 'karkaroff@pigareva.cc',
    photo: '',
  },
  {
    _id: '24',
    department: 'Product Team',
    name: 'Viktor Krum',
    email: 'krum@pigareva.cc',
    photo: '',
  },
  {
    _id: '25',
    department: 'Marketing',
    name: 'Dolores Jane Umbridge',
    email: 'umbridge@pigareva.cc',
    photo: '',
  },
  {
    _id: '26',
    department: 'Marketing',
    name: 'Argus Filch',
    email: 'filch@pigareva.cc',
    photo: '',
  },
  {
    _id: '27',
    department: 'Product Team',
    name: 'Severus Snape',
    email: 'snape@pigareva.cc',
    photo: '',
  },
  {
    _id: '28',
    department: 'Working students',
    name: 'John Doe',
    email: 'john@pigareva.cc',
    photo: '',
  },
  {
    _id: '31',
    department: 'Working students',
    name: 'Dudley Dursley',
    email: 'dursley@pigareva.de',
    photo: '',
  },
];

function getDepartmentsList() {
  const departments = [];
  employees.forEach((employee) => {
    if (!departments.includes(employee.department)) {
      departments.push(employee.department);
    }
  });
  return departments;
}

function getDepartmentsWithEmployees() {
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

function getTables() {
  const tables = [];
  const departmentsWithEmployees = getDepartmentsWithEmployees();
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
  render() {
    const tables = getTables()
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
