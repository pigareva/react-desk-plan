import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlusIcon } from 'react-octicons';
import HeaderClock from '../containers/HeaderClock';
import EditEmployee from './EditEmployee';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.addEmployee = this.addEmployee.bind(this);
    this.state = {
      showAdd: false,
    };
  }

  addEmployee() {
    this.setState({ showAdd: true });
  }

  render() {
    return (
      <header>
        <Button onClick={this.addEmployee}>
          <PlusIcon />
        </Button>
        <h1 className="text-center">Desk plan</h1>
        <div className="sun-box">
          <span className="sun-symbol">☀</span>
        </div>
        <Container>
          <Row>
            <Col xs="3">Local time is</Col>
            <Col xs="6">
              <HeaderClock />
            </Col>
          </Row>
        </Container>

        {this.state.showAdd &&
        <EditEmployee modal={this.state.showAdd} />}
      </header>
    );
  }
}
