import React, {Component} from 'react';
import {render} from 'react-dom';

let employees = [
  {
    "_id": "",
    "department": "",
    "name": "",
    "email": "",
    "photo": "",
  },
  {
    "_id": "01",
    "department": "Founder",
    "name": "John Doe",
    "email": "john@pigareva.de",
    "photo": "",
  },
  {
    "_id": "02",
    "department": "Founder",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "03",
    "department": "HR & Finance",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "04",
    "department": "HR & Finance",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "05",
    "department": "Tech",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "06",
    "department": "Tech",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "07",
    "department": "Tech",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "08",
    "department": "Tech",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "09",
    "department": "Tech",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "10",
    "department": "Tech",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "11",
    "department": "B2B Sales",
    "name": "Kathleen Mecke",
    "email": "kathleen.mecke@homelike.cc",
    "photo": "",
  },
  {
    "_id": "12",
    "department": "B2B Sales",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "13",
    "department": "B2B Sales",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "14",
    "department": "B2B Sales",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "15",
    "department": "B2B Sales",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "16",
    "department": "B2B Sales",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "17",
    "department": "Customer care",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "18",
    "department": "Customer care",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "19",
    "department": "Customer care",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "20",
    "department": "Customer care",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "21",
    "department": "Customer care",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "22",
    "department": "Customer care",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "23",
    "department": "Product Team",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "24",
    "department": "Product Team",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "25",
    "department": "Product Team",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "26",
    "department": "Product Team",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "27",
    "department": "Product Team",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  }, {
    "_id": "28",
    "department": "Product management",
    "name": "John Doe",
    "email": "john@pigareva.cc",
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
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "31",
    "department": "Marketing",
    "name": "John Doe",
    "email": "john@pigareva.cc",
    "photo": "",
  },
  {
    "_id": "32",
    "department": "Product team",
    "name": "Friederike Urlaub",
    "email": "friederikeurlaub@homelike.cc",
    "photo": "",
  },

];

var tables = [
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

class EmployeeOnDesk extends Component {

  render() {

    return (
      <div className="desk-flex-block">
        <ul>
          <li><b><a href={"mailto:" + this.props.employee.email}>{this.props.employee.name}</a></b></li>
          <li>{this.props.employee.department}</li>
        </ul>
      </div>
    );
  }
}

class TableWithEmployees extends Component {
  render() {

    return (
      <div className="table-flex-block">
        <h1 className="text-center">{this.props.table.department}</h1>
        <div className="desk-flex-container">
          <EmployeeOnDesk employee={employees[1]}/>
          <EmployeeOnDesk employee={employees[2]}/>
        </div>
        <div className="desk-flex-container">
          <EmployeeOnDesk employee={employees[3]}/>
          <EmployeeOnDesk employee={employees[4]}/>
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
        <h1 className="text-center">HOMELIKE desk plan</h1>
      </header>

      <div className="table-flex-container">

        <TableWithEmployees table={tables[0]}/>

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
