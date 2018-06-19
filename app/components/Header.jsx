import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Button } from 'reactstrap';
import { PlusIcon } from 'react-octicons';
import HeaderClock from '../containers/HeaderClock';
import EditEmployee from './EditEmployee';

const Header = ({ toggleShowAdd, showAdd, addEmployee }) => (
  <header>
    <Button onClick={toggleShowAdd}>
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

    {showAdd && <EditEmployee modal={showAdd} editCallback={addEmployee} />}

  </header>
);

export default Header;

Header.propTypes = {
  showAdd: PropTypes.bool.isRequired,
  addEmployee: PropTypes.func.isRequired,
  toggleShowAdd: PropTypes.func.isRequired,
};
