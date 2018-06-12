import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import { TrashcanIcon, PencilIcon, PlusIcon } from 'react-octicons';
import Clock from './Clock';
import { DEFAULT_BACKGROUND, URL_DELETE_EMPLOYEE } from '../consts';
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
      // timeAtWork: 0,
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

  editEmployee() {
    this.setState({ showEdit: true });
  }

  addEmployee() {
    this.setState({ showAdd: true });
  }

  render() {
    const deskStyle = this.state.atWork ? 'desk-flex-block desk-at-work' : 'desk-flex-block';
    const isEmployee = this.state.employee.name;
    const backgroundImage = this.state.employee.photo ? `url(${this.state.employee.photo})` : `url(${DEFAULT_BACKGROUND})`;
    return (
      <div>
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
                <Clock time={0} isOff={this.state.timerIsOff} />
              </Button>
              <Button onClick={this.toggleEmployeeOnDesk}>
                {this.state.atWork ? 'I am working' : 'I am relaxing'}
              </Button>
              <Button onClick={this.deleteEmployee}>
                <TrashcanIcon />
              </Button>
              <Button onClick={this.editEmployee}>
                <PencilIcon />
              </Button>
            </ButtonGroup> :
            <Button onClick={this.addEmployee}>
              <PlusIcon />
            </Button>
          }

        </Card>

        {this.state.showEdit &&
        <EditEmployee employee={this.state.employee} modal={this.state.showEdit} />}

        {this.state.showAdd &&
        <EditEmployee modal={this.state.showAdd} />}

      </div>
    );
  }
}

EmployeeOnDesk.propTypes = {
  employee: PropTypes.objectOf(PropTypes.string).isRequired,
};
