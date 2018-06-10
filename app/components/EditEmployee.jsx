import React, { Component } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { URL_UPDATE_EMPLOYEE } from '../consts';

export default class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDepartmentChange = this.handleDepartmentChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      employee: this.props.employee,
      modal: this.props.modal || false,
    };
  }

  handleClose() {
    this.setState({ modal: false });
  }

  handleShow() {
    this.setState({ modal: true });
  }

  handleNameChange(e) {
    const employee = this.state.employee;
    employee.name = e.target.value;
    employee.email = `${e.target.value.split(' ').splice(-1, 1)}@pigareva.cc`;
    this.setState({ employee });
  }

  handleDepartmentChange(e) {
    const employee = this.state.employee;
    employee.department = e.target.value;
    this.setState({ employee });
  }

  onSubmit() {
    const data = {
      name: this.state.employee.name,
      department: this.state.employee.department,
      email: this.state.employee.email,
      photo: this.state.employee.photo,
    };

    fetch(`${URL_UPDATE_EMPLOYEE}${this.state.employee._id}`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      })
      .then(res => {
        res.json();
      })
      .then(
        (response) => {
          console.log('update response', response);
          this.setState({
            employee: {
              name: response.name,
              department: response.department,
              email: response.email,
              photo: '',
            },
          });
        },
        (error) => {
          //ToDo
        },
      );
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="modal-edit">
        <Button color="danger" onClick={this.toggle} >Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Edit an employee</ModalHeader>

          <ModalBody>
            <Form id={'editForm'}>
              <FormGroup>
                <Label>Name</Label>
                <Input
                  type="text"
                  value={this.state.employee.name}
                  placeholder={this.state.employee.name}
                  onChange={this.handleNameChange}
                  name={'name'}
                />

                <Label>Email</Label>
                <Input
                  type="text"
                  disabled={true}
                  value={this.state.employee.email}
                />

                <Label>Department</Label>
                <Input
                  type="text"
                  value={this.state.employee.department}
                  placeholder={this.state.employee.department}
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
  employee: PropTypes.object,
  modal: PropTypes.bool,
};
