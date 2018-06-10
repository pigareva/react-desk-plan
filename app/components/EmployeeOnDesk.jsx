import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { TrashcanIcon, PencilIcon, PlusIcon } from 'react-octicons';
import Clock from './Clock';
import PropTypes from 'prop-types';
import { URL_DELETE_EMPLOYEE, URL_UPDATE_EMPLOYEE } from '../consts';
import EditEmployee from './EditEmployee';


export default class EmployeeOnDesk extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.comeToOffice = this.comeToOffice.bind(this);
    this.toggleEmployeeOnDesk = this.toggleEmployeeOnDesk.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.state = {
      atWork: true,
      timeAtWork: 0,
      timerIsOff: false,
      employee: this.props.employee,
      isRendered: false,
      showEdit: false,
    };
  }

  componentDidMount() {
    this.comeToOffice();
    this.setState({ isRendered: true });
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

  deleteEmployee() {
    if (this.state.isRendered) {
      const id = this.state.employee._id;

      fetch(`${URL_DELETE_EMPLOYEE}${id}`)
        .then(res => {
          res.json();
        })
        .then(
          () => {
            this.setState({
              employee: {
                name: '',
                department: 'I am not there any more',
                email: '',
                photo: '',
              },
              atWork: false,
            });
          },
          (error) => {
            //ToDo
          },
        );
    }
  }

  editEmployee() {
    this.setState({ showEdit: true });
  }

  addEmployee() {
    // ToDo
  }

  get email() {
    return this.state.employee.email;
  }

  get name() {
    return this.state.employee.name;
  }

  get department() {
    return this.state.employee.department;
  }

  render() {
    console.log('EmployeeOnDesk employee', this.state.employee);
    const descStyle = this.state.atWork ? 'desk-flex-block desk-at-work' : 'desk-flex-block';
    const isEmployee = this.state.employee.name;
    const showEdit = this.state.showEdit;

    return (
      <div>
        <Card className={descStyle}>
          <CardBody>
            <CardTitle><a href={`mailto:${this.email}`}>{this.name}</a></CardTitle>
            <CardSubtitle>{this.department}</CardSubtitle>
          </CardBody>
          {isEmployee && <Button onClick={this.toggleEmployeeOnDesk}>
            {this.state.atWork ? 'I am working' : 'I am relaxing'}
          </Button>
          }

          {isEmployee ?
            <ButtonGroup>
              <Button onClick={this.deleteEmployee}>
                <TrashcanIcon/>
              </Button>
              <Button onClick={this.editEmployee}>
                <PencilIcon/>
              </Button>
            </ButtonGroup> :
            <Button onClick={this.addEmployee}>
              <PlusIcon/>
            </Button>
          }

          {isEmployee && <Clock time={0} isOff={this.state.timerIsOff}/>}
        </Card>

        {showEdit && <EditEmployee employee={this.state.employee} modal={showEdit}/>}

      </div>
    );
  }
}

EmployeeOnDesk.propTypes = {
  employee: PropTypes.object.isRequired,
};
