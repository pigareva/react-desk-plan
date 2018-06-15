import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { TrashcanIcon, PencilIcon, PlusIcon } from 'react-octicons';
import DeskClock from './DeskClock';
import { DEFAULT_BACKGROUND, URL_DELETE_EMPLOYEE, WORKING_DAY_LONG } from '../consts';
import EditEmployee from './EditEmployee';

export default class EmployeeOnDesk extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.comeToOffice = this.comeToOffice.bind(this);
    this.toggleEmployeeOnDesk = this.toggleEmployeeOnDesk.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.toggleEditModal = this.toggleEditModal.bind(this);
    this.toggleAddModal = this.toggleAddModal.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.addEmployee = this.addEmployee.bind(this);
    this.state = {
      atWork: true,
      timerIsOff: false,
      employee: this.props.employee,
      showEdit: false,
      showAdd: false,
    };
  }

  componentDidMount() {
    this.comeToOffice();
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
    const id = this.state.employee._id;

    fetch(`${URL_DELETE_EMPLOYEE}${id}`)
      .then((res) => {
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
          // ToDo
          console.log('Can not delete the employee', error);
        },
      );
  }

  toggleEditModal() {
    this.setState({ showEdit: !this.state.showEdit });
  }

  toggleAddModal() {
    this.setState({ showAdd: !this.state.showAdd });
  }

  editEmployee(employee) {
    this.setState({ employee });
    this.toggleEditModal();
  }

  addEmployee(employee) {
    this.setState({ employee, atWork: true });
    this.toggleAddModal();
  }

  render() {
    const deskStyle = this.state.atWork ? 'desk-flex-block desk-at-work' : 'desk-flex-block';
    const isEmployee = this.state.employee.name;
    const backgroundImage = this.state.employee.photo ? `url(${this.state.employee.photo})` : `url(${DEFAULT_BACKGROUND})`;
    return (
      <Card
        className={deskStyle}
        style={this.state.atWork ? { backgroundImage } : null}
      >
        <CardBody>
          <CardTitle><a href={`mailto:${this.email}`}>{this.name}</a></CardTitle>
          <CardSubtitle>{this.department}</CardSubtitle>
        </CardBody>

        {isEmployee ?
          <ButtonGroup>
            <Button className="clock-button">
              <DeskClock
                endTime={WORKING_DAY_LONG}
                isOff={this.state.timerIsOff}
                endTimeCallback={this.goHome}
              />
            </Button>
            <Button onClick={this.toggleEmployeeOnDesk}>
              {this.state.atWork ? 'I am working' : 'I am relaxing'}
            </Button>
            <Button onClick={this.deleteEmployee}>
              <TrashcanIcon />
            </Button>
            <Button onClick={this.toggleEditModal}>
              <PencilIcon />
            </Button>
          </ButtonGroup> :
          <Button onClick={this.toggleAddModal}>
            <PlusIcon />
          </Button>
          }

        {this.state.showEdit &&
          <EditEmployee
            employee={this.state.employee}
            editCallback={this.editEmployee}
            modal={this.state.showEdit}
          />}

        {this.state.showAdd &&
          <EditEmployee modal={this.state.showAdd} editCallback={this.addEmployee} />}

      </Card>
    );
  }
}

EmployeeOnDesk.propTypes = {
  employee: PropTypes.objectOf(PropTypes.string).isRequired,
};
