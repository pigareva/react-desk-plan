import React, { Component } from 'react';
import { Modal, ModalFooter, ModalHeader, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default class StartNewDay extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      modal: this.props.modal || false,
    };
  }

  onSubmit() {
    this.props.onSubmit();
    this.toggle();
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="modal-edit">
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader>Welcome to the office</ModalHeader>
          <ModalFooter>
            <Button color="success" block onClick={this.onSubmit}>Start new day number {this.props.day}</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

StartNewDay.propTypes = {
  modal: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
  day: PropTypes.number.isRequired,
};

StartNewDay.defaultProps = {
  modal: false,
};
