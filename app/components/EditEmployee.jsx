import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { URL_UPDATE_EMPLOYEE } from '../consts';

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      employee: this.props.employee,
      modal: this.props.modal || false,
    };
  }

  onSubmit() {
    const data = this.state.employee;

    fetch(
      `${URL_UPDATE_EMPLOYEE}${this.state.employee._id}`,
      {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      },
    )
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            employee: {
              name: response.name,
              department: response.department,
              email: response.email,
              photo: '',
            },
            modal: false,
          });
          // ToDo setState for EmployeeOnDesk
        },
        (error) => {
          // ToDo
          console.log('Can not edit the employee', error);
        },
      );
  }

  handleNameChange(e) {
    const {
      _id, department, photo,
    } = this.state.employee;

    this.setState({
      employee: {
        _id,
        name: e.target.value,
        email: `${e.target.value.split(' ').splice(-1, 1)}@pigareva.cc`,
        department,
        photo,
      },
    });
  }

  handleDepartmentChange(e) {
    const {
      _id, name, email, photo,
    } = this.state.employee;
    this.setState({
      employee: {
        _id,
        name,
        email,
        department: e.target.value,
        photo,
      },
    });
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="modal-edit">
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit an employee</ModalHeader>

          <ModalBody>
            <Form id="editForm">
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={this.state.employee.name}
                  onChange={this.handleNameChange}
                  name="name"
                />

                <Label>Email</Label>
                <Input
                  type="text"
                  disabled
                  value={this.state.employee.email}
                />

                <Label>Department</Label>
                <Input
                  type="text"
                  value={this.state.employee.department}
                  onChange={this.handleDepartmentChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={this.toggle}>Close</Button>
            <Button onClick={this.onSubmit}>Save changes</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

EditEmployee.propTypes = {
  employee: PropTypes.objectOf(PropTypes.string),
  modal: PropTypes.bool,
};

EditEmployee.defaultProps = {
  employee: {
    _id: null,
    name: '',
    department: '',
    email: '@pigareva.cc',
    photo: '',
  },
  modal: false,
};
