import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';
import Clock from './Clock';

export default class EmployeeOnDesk extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
    this.comeToOffice = this.comeToOffice.bind(this);
    this.toggleEmployeeOnDesk = this.toggleEmployeeOnDesk.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
    this.state = {
      atWork: true, timeAtWork: 0, timerIsOff: false, employee: this.props.employee,
    };
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

  deleteEmployee() {
    // ToDo check if rendered
    const id = this.state.employee.id;
    // ToDO request
    this.setState({
      employee: {
        name: 'I am not there nay more',
        department: '',
        email: '',
        photo: '',
      },
    });
  }

  editEmployee() {
    // ToDo check if rendered
    const id = this.state.employee.id;
    // const employee = request;
    this.setState({ employee });
  }

  render() {
    const descStyle = this.state.atWork ? 'desk-flex-block desk-at-work' : 'desk-flex-block';

    return (
      <Card className={descStyle}>
        <CardBody>
          <CardTitle><a href={`mailto:${this.state.employee.email}`}>{this.state.employee.name}</a></CardTitle>
          <CardSubtitle>{this.state.employee.department}</CardSubtitle>
        </CardBody>
        <Button onClick={this.toggleEmployeeOnDesk}>
          {this.state.atWork ? 'I am working' : 'I am relaxing'}
        </Button>
        <ButtonGroup>
          <Button onClick={this.deleteEmployee}>
            <span className="glyphicon glyphicon-trash" aria-hidden="true" />
          </Button>
          <Button onClick={this.editEmployee}>
            <span className="glyphicon glyphicon-edit" aria-hidden="true" />
          </Button>
        </ButtonGroup>

        <Clock time={0} isOff={this.state.timerIsOff} />
      </Card>
    );
  }
}
