import React, { Component } from 'react';
import { Modal, ModalFooter, ModalHeader, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import getCurrentTime from '../functions/getCurrentTime';
import { START_WORKING_DAY_TIME } from '../consts';

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
    // getCurrentTime(START_WORKING_DAY_TIME);
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
            <Button onClick={this.onSubmit}>Start new day</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

StartNewDay.propTypes = {
  modal: PropTypes.bool,
  onSubmit: PropTypes.func.isRequired,
};

StartNewDay.defaultProps = {
  modal: false,
};
