/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import Department from './Department';
import EmployeeOnDeskWithClockRestart from '../containers/EmployeeOnDeskWithClockRestart';
import { START_WORKING_DAY_TIME } from '../consts';

jest.mock('../containers/EmployeeOnDeskWithClockRestart');

const setup = (department = {}) => {
  const component = shallow(<Department department={department} />);

  return {
    component,
    header: component.find('h1'),
    delay: component.find('h4'),
  };
};

const getTimeMock = jest.fn();

describe('Department component', () => {
  beforeEach(() => {
    EmployeeOnDeskWithClockRestart.mockClear();
  });

  it('should display department name in header', () => {
    const { header } = setup('Founders');
    expect(header.text()).toMatch('Founders');
  });

  it('should display expected delay', () => {
    getTimeMock.mockReturnValue('10:25');
    const { delay } = setup(50);
    expect(delay.text()).toMatch('Expected coming time is 10:25');
    expect(getTimeMock.mock.calls.length).toBe(1);
    expect(getTimeMock.mock.calls[0][0]).toBe(START_WORKING_DAY_TIME + 50);
  });
});
