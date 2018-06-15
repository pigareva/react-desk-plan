import React, { Component } from 'react';
import { Modal, ModalFooter, ModalHeader, Button } from 'reactstrap';
import PropTypes from 'prop-types';

export default class StartNewDay extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      modal: this.props.modal || false,
    };
  }

  toggle() {
    this.setState({ modal: !this.state.modal });
  }

  render() {
    return (
      <div className="modal-edit">
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Welcome to the office</ModalHeader>

          <ModalFooter>
            <Button onClick={this.toggle}>Close</Button>
            <Button onClick={this.toggle}>Start new day</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

StartNewDay.propTypes = {
  modal: PropTypes.bool,
};

StartNewDay.defaultProps = {
  modal: false,
};
