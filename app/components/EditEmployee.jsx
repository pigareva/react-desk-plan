import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.state = {
      employee: this.props.employee,
      show: this.props.show || false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleNameChange(e) {
    const employee = this.state.employee;
    employee.name = e.target.value;
    employee.email = `${e.target.value.split('').splice(-1,1)}@pigareva.cc`;
    this.setState({ employee });
  }

  handleDepartmentChange(e) {
    this.setState({ department: e.target.department });
  }

  onSubmit() {
    // Todo
  }

  render() {

    return (
      <div>
        <Modal.Dialog>
          <ModalHeader>
            <Modal.Title>Edit an employee</Modal.Title>
          </ModalHeader>

          <ModalBody>
            <form>
              <FormGroup controlId="employee">
                <ControlLabel>Name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.employee.name}
                  placeholder={this.state.employee.name}
                  onChange={this.handleNameChange}
                />
                <FormControl.Feedback />

                <ControlLabel>Email</ControlLabel>
                <FormControl
                  type="text"
                  disabled={true}
                  value={this.state.employee.email}
                />
                <FormControl.Feedback />

                <ControlLabel>Department</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.employee.department}
                  placeholder={this.state.employee.department}
                  onChange={this.handleDepartmentChange}
                />
                <FormControl.Feedback />

              </FormGroup>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button>Close</Button>
            <Button bsStyle="primary">Save changes</Button>
          </ModalFooter>
        </Modal.Dialog>
      </div>
    );
  }
}

EmployeeOnDesk.propTypes = {
  employee: PropTypes.object.isRequired,
};
