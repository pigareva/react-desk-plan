import React, { Component } from 'react';
import { render } from 'react-dom';

let employees = [
  {
    "_id": "",
    "department": "Working students",
    "name": "",
    "email": "",
    "photo": "",
  },
  {
    "_id": "01",
    "department": "Founder",
    "name": "Harry Potter",
    "email": "potter@pigareva.de",
    "photo": "",
  },
  {
    "_id": "02",
    "department": "Founder",
    "name": "Albus Dumbledore",
    "email": "dumbledore@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "03",
    "department": "HR",
    "name": "Hermione Granger",
    "email": "granger@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "04",
    "department": "Finance",
    "name": "Mad-Eye Moody",
    "email": "moody@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "05",
    "department": "Tech",
    "name": "Ron Weasley",
    "email": "weasley@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "06",
    "department": "Tech",
    "name": "Rubeus Hagrid",
    "email": "hagrid@pigareva.cc",
    "photo": "",
  }, {
    "_id": "07",
    "department": "Tech",
    "name": "Sirius Black",
    "email": "black@pigareva.cc",
    "photo": "",
  }, {
    "_id": "08",
    "department": "Tech",
    "name": "Neville Longbottom",
    "email": "longbottom@pigareva.cc",
    "photo": "",
  }, {
    "_id": "09",
    "department": "Tech",
    "name": "Ron Weasley",
    "email": "weasley@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "10",
    "department": "Tech",
    "name": "Cedric Diggory",
    "email": "diggory@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "11",
    "department": "B2B Sales",
    "name": "Bellatrix Lestrange",
    "email": "lestrange@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "12",
    "department": "B2B Sales",
    "name": "Draco Malfoy",
    "email": "malfoy@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "13",
    "department": "B2B Sales",
    "name": "Gellert Grindelwald",
    "email": "grindelwald@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "14",
    "department": "B2B Sales",
    "name": "Bartemius (Barty) Crouch, Jr.",
    "email": "crouch@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "15",
    "department": "B2B Sales",
    "name": "Peter Pettigrew",
    "email": "pettigrew@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "16",
    "department": "B2B Sales",
    "name": "Tom Riddle",
    "email": "voldemort@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "17",
    "department": "Customer care",
    "name": "Salazar Slytherin ",
    "email": "slytherin@pigareva.cc",
    "photo": "",
  }, {
    "_id": "18",
    "department": "Customer care",
    "name": "Vincent Crabbe",
    "email": "crabbe@pigareva.cc",
    "photo": "",
  }, {
    "_id": "19",
    "department": "Customer care",
    "name": "Millicent Bulstrode",
    "email": "bulstrode@pigareva.cc",
    "photo": "",
  }, {
    "_id": "20",
    "department": "Customer care",
    "name": "Marcus Flint",
    "email": "flint@pigareva.cc",
    "photo": "",
  }, {
    "_id": "21",
    "department": "Customer care",
    "name": "Gregory Goyle",
    "email": "goyle@pigareva.cc",
    "photo": "",
  }, {
    "_id": "22",
    "department": "Customer care",
    "name": "Graham Montague",
    "email": "montague@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "23",
    "department": "Product Team",
    "name": "Igor Karkaroff",
    "email": "karkaroff@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "24",
    "department": "Product Team",
    "name": "Viktor Krum",
    "email": "krum@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "25",
    "department": "Marketing",
    "name": "Dolores Jane Umbridge",
    "email": "umbridge@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "26",
    "department": "Marketing",
    "name": "Dolores Jane Umbridge",
    "email": "umbridge@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "27",
    "department": "Marketing",
    "name": "Dolores Jane Umbridge",
    "email": "umbridge@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "28",
    "department": "Product management",
    "name": "Severus Snape",
    "email": "snape@pigareva.cc",
    "photo": "",
  }, {
    "_id": "29",
    "department": "Working students",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "30",
    "department": "Marketing",
    "name": "Dolores Jane Umbridge",
    "email": "umbridge@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "31",
    "department": "Marketing",
    "name": "Dolores Jane Umbridge",
    "email": "umbridge@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "32",
    "department": "Marketing",
    "name": "Dolores Jane Umbridge",
    "email": "umbridge@pigareva.cc",
    "photo": "",
  },
];

let tables = [
  {
    "_id": "01",
    "department": "Founder, HR & Finance",
    "desks": [
      {
        "_id": "1",
        "idEmployee": "01",
      },
      {
        "_id": "2",
        "idEmployee": "02",
      },
      {
        "_id": "3",
        "idEmployee": "03",
      },
      {
        "_id": "4",
        "idEmployee": "04",
      }],
  },
  {
    "_id": "02",
    "department": "Tech",
    "desks": [
      {
        "_id": "1",
        "idEmployee": "05",
      },
      {
        "_id": "2",
        "idEmployee": "06",
      },
      {
        "_id": "3",
        "idEmployee": "07",
      },
      {
        "_id": "4",
        "idEmployee": "08",
      },
      {
        "_id": "5",
        "idEmployee": "09",
      },
      {
        "_id": "6",
        "idEmployee": "10",
      }],
  },
  {
    "_id": "03",
    "department": "B2B Sales",
    "desks": [
      {
        "_id": "1",
        "idEmployee": "11",
      },
      {
        "_id": "2",
        "idEmployee": "12",
      },
      {
        "_id": "3",
        "idEmployee": "13",
      },
      {
        "_id": "4",
        "idEmployee": "14",
      },
      {
        "_id": "5",
        "idEmployee": "15",
      },
      {
        "_id": "6",
        "idEmployee": "16",
      }],
  },
  {
    "_id": "04",
    "department": "Customer care",
    "desks": [
      {
        "_id": "1",
        "idEmployee": "17",
      },
      {
        "_id": "2",
        "idEmployee": "18",
      },
      {
        "_id": "3",
        "idEmployee": "19",
      },
      {
        "_id": "4",
        "idEmployee": "20",
      },
      {
        "_id": "5",
        "idEmployee": "21",
      },
      {
        "_id": "6",
        "idEmployee": "22",
      }],
  },
  {
    "_id": "05",
    "department": "Product Team",
    "desks": [
      {
        "_id": "1",
        "idEmployee": "23",
      },
      {
        "_id": "2",
        "idEmployee": "24",
      },
      {
        "_id": "3",
        "idEmployee": "25",
      },
      {
        "_id": "4",
        "idEmployee": "26",
      },
      {
        "_id": "5",
        "idEmployee": "27",
      },
      {
        "_id": "6",
        "idEmployee": "28",
      }],
  },
  {
    "_id": "06",
    "department": "Marketing",
    "desks": [
      {
        "_id": "1",
        "idEmployee": "29",
      },
      {
        "_id": "2",
        "idEmployee": "30",
      },
      {
        "_id": "3",
        "idEmployee": "31",
      },
      {
        "_id": "4",
        "idEmployee": "28",
      },
      {
        "_id": "5",
        "idEmployee": null,
      },
      {
        "_id": "6",
        "idEmployee": null,
      }],
  },
];

function getDepartmentsList() {
  const departments = [];
  employees.forEach((employee) =>{
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

    if (departmentIndex.hasOwnProperty(department)) {
      departmentIndex[department].employees.push(employee);
    } else {
      departmentIndex[department] = {
        department,
        employees: [employee],
      }
    }
  });

  return departmentIndex;
}

function getTables() {
  const tab = [];
  const departments = getDepartmentsList();

  departments.forEach((department, i) => {
    const table = {
      _id: i + 1,
      department: department,
      desks: [],
    };
    tab.push(table);
  });

  employees.forEach((employee, i) => {
    console.log('EMPLOYEE', employee, i);
    tab.find((table) => {
      return table.department === employee.department;
    }).desks.push(employee)
  });

  return tab;
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: props.time, isOff: false };
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

  stopTime(){
    clearInterval(this.timerID);
  }

  startTime() {
    this.timerID = setInterval(
      () => this.tick(),
      100
    );
  }

  render() {
    return (
      <div>
        <h3>{String(Math.floor(this.state.time/60)).padStart(2, '0')}:{String(this.state.time % 60).padStart(2, '0')}.</h3>
      </div>
    );
  }
}

class Greeting extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hh = this.state.time/60;
    switch (true) {
      case (hh >= 8 && hh <=10):
        return <h2>  'Good Morning!' </h2>;
      case (hh >= 12 && hh <=14):
        return <h2>  'Bon appetite!'</h2>;
      case (hh >= 17 && hh <=20):
        return <h2>  'Bye bye!'</h2>;
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
    this.state = {atWork: true, timeAtWork: 0, timerIsOff: false };
  }


  render() {
    const descStyle = this.state.atWork ? "desk-flex-block desk-at-work" : "desk-flex-block";

    return (
      <div className={descStyle}>
        <ul>
          <li><b><a href={"mailto:" + this.props.employee.email}>{this.props.employee.name}</a></b></li>
          <li>{this.props.employee.department}</li>
        </ul>
        <button onClick={this.toggleEmployeeOnDesk}>
          {/*// ToDo I'm working since*/}
          {this.state.atWork ? 'I am working' : 'I am relaxing'}
        </button>
        <Clock time={0} isOff={this.state.timerIsOff}/>
      </div>
    );
  }

  componentDidMount() {
    this.comeToOffice();
  };

  goHome() {
    this.setState({ atWork: false, timerIsOff: true });
  };

  comeToOffice() {
    this.setState({ atWork: true, timerIsOff: false });
  };

  toggleEmployeeOnDesk() {
    if (this.state.atWork) {
      this.goHome();
    } else {
      this.comeToOffice();
    }
  }
}

class TableWithEmployees extends Component {
  render() {
    const emloyeesOnTable = this.props.table.desks.map((desk) => {
      <EmployeeOnDesk employee={desk}/>
    });

    return (
      <div className="table-flex-block" key={this.props.table.department}>
        <h1 className="text-center">{this.props.table.department}</h1>
        <div className="desk-flex-container">
          {emloyeesOnTable}
        </div>
      </div>
    );
  }
}


class OfficeRoom extends Component {
  render() {
    return (


    <div className="container">
      <header>
        <h1 className="text-center">Desk plan</h1>
        <p>Local time is</p>
        <Clock time={540} isGreetingNeeded={true}/>
      </header>

      <div className="table-flex-container">

        <div className="table-flex-block">
          <h1 className="text-center">{tables[0].department}</h1>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[5]}/>
            <EmployeeOnDesk employee={employees[6]}/>
            <EmployeeOnDesk employee={employees[28]}/>
          </div>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[8]}/>
            <EmployeeOnDesk employee={employees[9]}/>
            <EmployeeOnDesk employee={employees[10]}/>
          </div>
        </div>

        <div className="table-flex-block">
          <h1 className="text-center">{tables[1].department}</h1>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[5]}/>
            <EmployeeOnDesk employee={employees[6]}/>
            <EmployeeOnDesk employee={employees[28]}/>
          </div>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[8]}/>
            <EmployeeOnDesk employee={employees[9]}/>
            <EmployeeOnDesk employee={employees[10]}/>
          </div>
        </div>
        <div className="table-flex-block">
          <h1 className="text-center">{tables[2].department}</h1>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[11]}/>
            <EmployeeOnDesk employee={employees[12]}/>
            <EmployeeOnDesk employee={employees[13]}/>
          </div>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[14]}/>
            <EmployeeOnDesk employee={employees[15]}/>
            <EmployeeOnDesk employee={employees[0]}/>
          </div>
        </div>
        <div className="table-flex-block">
          <h1 className="text-center">{tables[3].department}</h1>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[17]}/>
            <EmployeeOnDesk employee={employees[18]}/>
            <EmployeeOnDesk employee={employees[19]}/>
          </div>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[20]}/>
            <EmployeeOnDesk employee={employees[21]}/>
            <EmployeeOnDesk employee={employees[22]}/>
          </div>
        </div>
        <div className="table-flex-block">
          <h1 className="text-center">{tables[4].department}</h1>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[23]}/>
            <EmployeeOnDesk employee={employees[24]}/>
            <EmployeeOnDesk employee={employees[25]}/>
          </div>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[26]}/>
            <EmployeeOnDesk employee={employees[27]}/>
            <EmployeeOnDesk employee={employees[32]}/>
          </div>
        </div>
        <div className="table-flex-block">
          <h1 className="text-center">{tables[5].department}</h1>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[29]}/>
            <EmployeeOnDesk employee={employees[30]}/>
            <EmployeeOnDesk employee={employees[31]}/>
          </div>
          <div className="desk-flex-container">
            <EmployeeOnDesk employee={employees[0]}/>
            <EmployeeOnDesk employee={employees[0]}/>
            <EmployeeOnDesk employee={employees[0]}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

render(<OfficeRoom />, document.getElementById('root'));
