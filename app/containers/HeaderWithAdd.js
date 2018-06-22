/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { employeeCreated, addButtonClick } from '../actions';

const getSunBox = state => (
  <div className={state.time.isDay ? 'sun-box-running' : 'sun-box'}>
    <span className="sun-symbol">☀</span>
  </div>);

const mapStateToProps = state => ({
  showAdd: state.button.button,
  sunBox: getSunBox(state),
});

const mapDispatchToProps = dispatch => ({
  addEmployee: data => dispatch(employeeCreated(data)),
  toggleShowAdd: () => dispatch(addButtonClick()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
