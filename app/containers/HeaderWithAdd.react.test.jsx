import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { connect } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';
import HeaderWithAdd from './HeaderWithAdd';


test('state works', () => {
  const testState = {
    button: { button: false },
    time: { isDay: false },
  };
  const mapStateToProps = state => ({ state });
  const ConnectedComponent = connect(mapStateToProps)(HeaderWithAdd);
  const component = shallowWithStore(<ConnectedComponent />, createMockStore(testState));
  expect(component.props().state).toBe(testState);
});

test('dispatch works', () => {
  const action = {
    type: 'type',
  };
  const mapDispatchToProps = dispatch => ({
    dispatchProp() {
      dispatch(action);
    },
  });
  const store = createMockStore();

  const ConnectedComponent = connect(undefined, mapDispatchToProps)(HeaderWithAdd);
  const component = shallowWithStore(<ConnectedComponent />, store);
  component.props().dispatchProp();
  expect(store.isActionDispatched(action)).toBe(true);
});
